import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: 'notifications',
})
export class NotificationGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server!: Server;

  private static instance: NotificationGateway | null = null;
  private readonly logger = new Logger(NotificationGateway.name);
  private userSockets = new Map<string, Set<string>>();

  constructor() {
    NotificationGateway.instance = this;
  }

  static getInstance(): NotificationGateway | null {
    return NotificationGateway.instance;
  }

  handleConnection(client: Socket) {
    const userId = (client.handshake.query.userId as string) || (client.handshake.auth?.userId as string);
    if (userId) {
      if (!this.userSockets.has(userId)) {
        this.userSockets.set(userId, new Set());
      }
      this.userSockets.get(userId)!.add(client.id);
      client.join(`user_${userId}`);
      this.logger.log(`User ${userId} connected to notification socket ${client.id}`);
    }
  }

  handleDisconnect(client: Socket) {
    for (const [userId, sockets] of this.userSockets.entries()) {
      if (sockets.has(client.id)) {
        sockets.delete(client.id);
        if (sockets.size === 0) {
          this.userSockets.delete(userId);
        }
        break;
      }
    }
  }

  sendToUser(userId: string, notification: any) {
    if (this.server) {
      this.server.to(`user_${userId}`).emit('new_notification', notification);
    }
    const sockets = this.userSockets.get(userId);
    if (sockets && this.server) {
      for (const socketId of sockets) {
        this.server.to(socketId).emit('new_notification', notification);
      }
    }
  }
}
