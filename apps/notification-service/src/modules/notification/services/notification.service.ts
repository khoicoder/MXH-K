import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { NotificationGateway } from '../gateways/notification.gateway';
import { CreateNotificationDto } from '../dto/notification.dto';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);
  private static instance: NotificationService | null = null;

  constructor(
    private readonly prisma: PrismaService,
    private readonly gateway: NotificationGateway,
  ) {
    NotificationService.instance = this;
  }

  static getInstance(): NotificationService | null {
    return NotificationService.instance;
  }

  /**
   * Universal notification dispatcher that can be called statically from other microservices
   */
  static async dispatchNotification(dto: {
    recipientId: string;
    actorId: string;
    type: string;
    targetType: string;
    targetId: string;
    summary: string;
  }) {
    if (!dto.recipientId || !dto.actorId || dto.recipientId === dto.actorId) {
      return null;
    }

    const instance = NotificationService.instance;
    if (instance) {
      return instance.createNotification(dto);
    }
    return null;
  }

  async createNotification(dto: CreateNotificationDto) {
    if (dto.recipientId === dto.actorId) {
      return null;
    }

    const notif = await this.prisma.notification.create({
      data: {
        recipientId: dto.recipientId,
        actorId: dto.actorId,
        type: dto.type,
        targetType: dto.targetType,
        targetId: dto.targetId,
        summary: dto.summary,
      },
    });

    // Resolve actor info
    let actorProfile: any = null;
    try {
      const UserPrisma = require('../../../../../user-service/src/prisma/client').PrismaClient;
      const userClient = new UserPrisma({ datasources: { db: { url: process.env.USER_DATABASE_URL } } });
      actorProfile = await userClient.userProfile.findUnique({
        where: { userId: dto.actorId },
        select: { displayName: true, username: true, avatarUrl: true },
      });
      await userClient.$disconnect();
    } catch {}

    const enriched = {
      ...notif,
      actorName: actorProfile?.displayName || actorProfile?.username || 'Thành viên MXH-K',
      actorAvatar: actorProfile?.avatarUrl || null,
    };

    // Real-time Push via WebSocket
    try {
      this.gateway.sendToUser(dto.recipientId, enriched);
    } catch (e: any) {
      this.logger.warn(`Failed to dispatch websocket push: ${e.message}`);
    }

    return enriched;
  }

  async getUserNotifications(userId: string, limit = 20, cursor?: string) {
    const items = await this.prisma.notification.findMany({
      where: { recipientId: userId },
      take: limit + 1,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      orderBy: { createdAt: 'desc' },
    });

    const hasMore = items.length > limit;
    const paginated = hasMore ? items.slice(0, limit) : items;
    const nextCursor = hasMore ? paginated[paginated.length - 1]?.id : null;

    // Resolve actor profile details
    const actorIds = Array.from(new Set(paginated.map((n: any) => n.actorId))) as string[];
    let profileMap: Record<string, any> = {};
    if (actorIds.length > 0) {
      try {
        const UserPrisma = require('../../../../../user-service/src/prisma/client').PrismaClient;
        const userClient = new UserPrisma({ datasources: { db: { url: process.env.USER_DATABASE_URL } } });
        const profiles = await userClient.userProfile.findMany({
          where: { userId: { in: actorIds } },
          select: { userId: true, displayName: true, username: true, avatarUrl: true },
        });
        profileMap = Object.fromEntries(profiles.map((p: any) => [p.userId, p]));
        await userClient.$disconnect();
      } catch (err: any) {
        this.logger.warn(`Could not resolve actor profiles: ${err.message}`);
      }
    }

    const enrichedItems = paginated.map((n: any) => {
      const profile = profileMap[n.actorId];
      return {
        ...n,
        actorName: profile?.displayName || profile?.username || 'Thành viên MXH-K',
        actorAvatar: profile?.avatarUrl || null,
      };
    });

    return {
      items: enrichedItems,
      nextCursor,
      hasMore,
    };
  }

  async markAsRead(notificationId: string, userId: string) {
    await this.prisma.notification.updateMany({
      where: { id: notificationId, recipientId: userId },
      data: { isRead: true },
    });
    return { success: true, message: 'Notification marked as read' };
  }

  async markAllAsRead(userId: string) {
    await this.prisma.notification.updateMany({
      where: { recipientId: userId, isRead: false },
      data: { isRead: true },
    });
    return { success: true, message: 'All notifications marked as read' };
  }

  async getUnreadCount(userId: string) {
    const count = await this.prisma.notification.count({
      where: { recipientId: userId, isRead: false },
    });
    return { unreadCount: count };
  }
}
