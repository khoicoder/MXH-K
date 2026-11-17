import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger, Injectable } from '@nestjs/common';

@Injectable()
@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: 'interactions',
})
export class InteractionGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server!: Server;

  private readonly logger = new Logger(InteractionGateway.name);

  handleConnection(client: Socket) {
    this.logger.log(`Client connected to interactions gateway: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected from interactions gateway: ${client.id}`);
  }

  @SubscribeMessage('join_post')
  handleJoinPost(client: Socket, postId: string) {
    if (postId) {
      client.join(`post:${postId}`);
    }
  }

  @SubscribeMessage('leave_post')
  handleLeavePost(client: Socket, postId: string) {
    if (postId) {
      client.leave(`post:${postId}`);
    }
  }

  broadcastReactionUpdate(targetType: string, targetId: string, data: { action: string; reactionType?: string; total: number; userId: string }) {
    if (this.server) {
      this.server.emit('reaction_updated', { targetType, targetId, ...data });
      this.server.to(`post:${targetId}`).emit('reaction_updated', { targetType, targetId, ...data });
    }
  }

  broadcastCommentCreated(postId: string, comment: any) {
    if (this.server) {
      this.server.emit('comment_created', { postId, comment });
      this.server.to(`post:${postId}`).emit('comment_created', { postId, comment });
    }
  }

  broadcastCommentDeleted(postId: string, commentId: string) {
    if (this.server) {
      this.server.emit('comment_deleted', { postId, commentId });
      this.server.to(`post:${postId}`).emit('comment_deleted', { postId, commentId });
    }
  }
}
