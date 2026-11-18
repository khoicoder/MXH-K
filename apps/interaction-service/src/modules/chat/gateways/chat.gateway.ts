import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger, Injectable, Inject, forwardRef } from '@nestjs/common';
import { JwtSecurityService } from '@libs/security';
import { ChatService } from '../services/chat.service';
import { SendMessageDto } from '../dto/chat.dto';

@Injectable()
@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: 'chat',
})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server!: Server;

  private readonly logger = new Logger(ChatGateway.name);
  private userSockets = new Map<string, Set<string>>();

  constructor(
    @Inject(forwardRef(() => ChatService))
    private readonly chatService: ChatService,
  ) {}

  afterInit(server: Server) {
    // Socket.IO Handshake Middleware: Strictly block unauthenticated connections at handshake level
    server.use((socket, next) => {
      try {
        const token =
          socket.handshake.auth?.token ||
          (socket.handshake.headers?.authorization?.startsWith('Bearer ')
            ? socket.handshake.headers.authorization.slice(7)
            : null) ||
          socket.handshake.query?.token;

        if (!token || typeof token !== 'string') {
          return next(new Error('Chức năng chat yêu cầu đăng nhập tài khoản hợp lệ (Thiếu authentication token).'));
        }

        const payload = JwtSecurityService.verifyAccessToken(token);
        if (!payload || !payload.sub) {
          return next(new Error('Token không hợp lệ hoặc đã hết hạn.'));
        }

        // Attach authenticated userId to socket session
        socket.data.userId = payload.sub;
        return next();
      } catch (err: any) {
        return next(new Error('Xác thực thất bại: ' + (err?.message || 'Token không hợp lệ')));
      }
    });
  }

  handleConnection(client: Socket) {
    try {
      const userId = client.data?.userId;

      if (!userId) {
        this.logger.warn(`Rejecting unauthenticated connection to chat socket: ${client.id}`);
        client.disconnect(true);
        return;
      }

      // Join personal user room for direct messaging & notifications
      client.join(`user_${userId}`);

      // Track multi-socket presence
      const isFirstConnection = !this.userSockets.has(userId);
      if (isFirstConnection) {
        this.userSockets.set(userId, new Set());
      }
      this.userSockets.get(userId)!.add(client.id);

      this.logger.log(`Authenticated user ${userId} connected to chat socket ${client.id}`);

      // Broadcast online status if this is their first active socket
      if (isFirstConnection && this.server) {
        this.server.emit('presence:update', {
          userId,
          isOnline: true,
          timestamp: new Date(),
        });
      }
    } catch (err) {
      this.logger.error(`Error during socket handleConnection:`, err);
      client.disconnect(true);
    }
  }

  handleDisconnect(client: Socket) {
    const userId = client.data?.userId;
    if (userId && this.userSockets.has(userId)) {
      const sockets = this.userSockets.get(userId)!;
      sockets.delete(client.id);

      if (sockets.size === 0) {
        this.userSockets.delete(userId);
        this.logger.log(`User ${userId} went offline from chat`);
        if (this.server) {
          this.server.emit('presence:update', {
            userId,
            isOnline: false,
            timestamp: new Date(),
          });
        }
      }
    }
  }

  isUserOnline(userId: string): boolean {
    const sockets = this.userSockets.get(userId);
    return !!(sockets && sockets.size > 0);
  }

  @SubscribeMessage('conversation:join')
  handleJoinConversation(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { conversationId: string },
  ) {
    if (data?.conversationId) {
      client.join(`conv_${data.conversationId}`);
      this.logger.log(`Client ${client.id} (user ${client.data.userId}) joined conv_${data.conversationId}`);
      return { status: 'joined', conversationId: data.conversationId };
    }
  }

  @SubscribeMessage('conversation:leave')
  handleLeaveConversation(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { conversationId: string },
  ) {
    if (data?.conversationId) {
      client.leave(`conv_${data.conversationId}`);
      this.logger.log(`Client ${client.id} left conv_${data.conversationId}`);
      return { status: 'left', conversationId: data.conversationId };
    }
  }

  @SubscribeMessage('message:send')
  async handleSendMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() dto: SendMessageDto,
  ) {
    const senderId = client.data?.userId;
    if (!senderId) {
      return { status: 'error', message: 'Unauthorized' };
    }

    try {
      const message = await this.chatService.sendMessage(senderId, dto);

      // Broadcast to all sockets in conversation room
      if (this.server) {
        this.server.to(`conv_${dto.conversationId}`).emit('message:new', message);

        // Also broadcast to conversation members' individual rooms so their sidebar updates
        try {
          const conv = await this.chatService.getConversationById(dto.conversationId, senderId);
          if (conv && conv.peerUser?.id) {
            this.server.to(`user_${conv.peerUser.id}`).emit('message:new', message);
            this.server.to(`user_${conv.peerUser.id}`).emit('conversation:updated', conv);
          }
        } catch (e) {
          // Ignore sidebar broadcast errors
        }
      }

      return { status: 'ok', data: message };
    } catch (err: any) {
      this.logger.error(`Error sending message: ${err?.message}`, err);
      return { status: 'error', message: err?.message || 'Failed to send message' };
    }
  }

  @SubscribeMessage('message:read')
  async handleMarkRead(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { conversationId: string },
  ) {
    const userId = client.data?.userId;
    if (!userId || !data?.conversationId) return;

    try {
      const result = await this.chatService.markAsRead(data.conversationId, userId);

      if (this.server) {
        this.server.to(`conv_${data.conversationId}`).emit('message:read', {
          conversationId: data.conversationId,
          readerId: userId,
          readAt: result.lastReadAt,
        });
      }

      return { status: 'ok', data: result };
    } catch (err: any) {
      return { status: 'error', message: err?.message };
    }
  }

  @SubscribeMessage('typing:start')
  handleTypingStart(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { conversationId: string },
  ) {
    const userId = client.data?.userId;
    if (!userId || !data?.conversationId) return;

    client.to(`conv_${data.conversationId}`).emit('typing:start', {
      conversationId: data.conversationId,
      userId,
    });
  }

  @SubscribeMessage('typing:stop')
  handleTypingStop(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { conversationId: string },
  ) {
    const userId = client.data?.userId;
    if (!userId || !data?.conversationId) return;

    client.to(`conv_${data.conversationId}`).emit('typing:stop', {
      conversationId: data.conversationId,
      userId,
    });
  }

  @SubscribeMessage('presence:query')
  handlePresenceQuery(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { userIds: string[] },
  ) {
    const userIds = data?.userIds || [];
    const onlineMap: Record<string, boolean> = {};
    for (const uid of userIds) {
      onlineMap[uid] = this.isUserOnline(uid);
    }
    return { onlineMap };
  }

  // Server-triggered broadcasts
  broadcastMessageRecalled(conversationId: string, messageId: string) {
    if (this.server) {
      this.server.to(`conv_${conversationId}`).emit('message:recalled', {
        conversationId,
        messageId,
      });
    }
  }
}
