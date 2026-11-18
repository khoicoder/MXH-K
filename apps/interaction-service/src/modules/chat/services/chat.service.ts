import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
  Logger,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateDirectConversationDto, SendMessageDto, MarkReadDto } from '../dto/chat.dto';
import { ChatGateway } from '../gateways/chat.gateway';

@Injectable()
export class ChatService {
  private readonly logger = new Logger(ChatService.name);
  private userProfileCache = new Map<string, { profile: any; timestamp: number }>();
  private readonly CACHE_TTL_MS = 60 * 1000; // 1 minute cache for user profiles

  constructor(
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => ChatGateway))
    private readonly chatGateway: ChatGateway,
  ) {}

  // Helper to fetch user profile from user_db
  async getUserProfile(userId: string): Promise<any> {
    const cached = this.userProfileCache.get(userId);
    if (cached && Date.now() - cached.timestamp < this.CACHE_TTL_MS) {
      return cached.profile;
    }

    try {
      const UserPrisma = require('../../../../../user-service/src/prisma/client').PrismaClient;
      const userClient = new UserPrisma({
        datasources: { db: { url: process.env.USER_DATABASE_URL } },
      });
      const profile = await userClient.userProfile.findUnique({
        where: { userId },
      });
      await userClient.$disconnect();

      const result = profile || {
        userId,
        displayName: 'Người dùng MXH',
        username: 'user_' + userId.slice(0, 6),
        avatarUrl: null,
      };

      this.userProfileCache.set(userId, { profile: result, timestamp: Date.now() });
      return result;
    } catch (err) {
      this.logger.error(`Failed to fetch user profile for ${userId}`, err);
      return {
        userId,
        displayName: 'Người dùng MXH',
        username: 'user_' + userId.slice(0, 6),
        avatarUrl: null,
      };
    }
  }

  // Helper to check if userA blocked userB or vice versa
  async isBlocked(userAId: string, userBId: string): Promise<boolean> {
    try {
      const SocialPrisma = require('../../../../../social-graph-service/src/prisma/client').PrismaClient;
      const socialClient = new SocialPrisma({
        datasources: { db: { url: process.env.SOCIAL_DATABASE_URL } },
      });
      const block = await socialClient.block.findFirst({
        where: {
          OR: [
            { blockerId: userAId, blockedId: userBId },
            { blockerId: userBId, blockedId: userAId },
          ],
        },
      });
      await socialClient.$disconnect();
      return !!block;
    } catch (err) {
      this.logger.warn(`Failed to check block status between ${userAId} and ${userBId}`, err);
      return false;
    }
  }

  // 1. Get or create a 1-1 direct conversation
  async getOrCreateDirectConversation(currentUserId: string, dto: CreateDirectConversationDto) {
    const targetUserId = dto.targetUserId;
    if (!targetUserId) {
      throw new BadRequestException('targetUserId không được để trống');
    }

    if (currentUserId === targetUserId) {
      throw new BadRequestException('Không thể tạo cuộc trò chuyện với chính mình');
    }

    // Check if blocked
    const blocked = await this.isBlocked(currentUserId, targetUserId);
    if (blocked) {
      throw new ForbiddenException('Không thể gửi tin nhắn cho người dùng này do trạng thái chặn');
    }

    // Check if a direct conversation already exists between these 2 users
    const userAMemberships = await (this.prisma as any).conversationMember.findMany({
      where: { userId: currentUserId },
      include: {
        conversation: {
          include: {
            members: true,
          },
        },
      },
    });

    const existingDirectConv = userAMemberships.find(
      (m: any) =>
        m.conversation.type === 'DIRECT' &&
        m.conversation.members.some((member: any) => member.userId === targetUserId),
    )?.conversation;

    if (existingDirectConv) {
      return this.formatConversation(existingDirectConv, currentUserId);
    }

    // Create new conversation
    const newConv = await (this.prisma as any).conversation.create({
      data: {
        type: 'DIRECT',
        members: {
          create: [
            { userId: currentUserId },
            { userId: targetUserId },
          ],
        },
      },
      include: {
        members: true,
      },
    });

    return this.formatConversation(newConv, currentUserId);
  }

  // 2. Get list of user's conversations
  async getUserConversations(userId: string) {
    const memberships = await (this.prisma as any).conversationMember.findMany({
      where: {
        userId,
        isArchived: false,
      },
      include: {
        conversation: {
          include: {
            members: true,
          },
        },
      },
      orderBy: {
        conversation: {
          updatedAt: 'desc',
        },
      },
    });

    const results = await Promise.all(
      memberships.map(async (m: any) => {
        return this.formatConversation(m.conversation, userId, m.lastReadAt);
      }),
    );

    // Sort by lastMessageAt DESC, falling back to updatedAt
    return results.sort((a, b) => {
      const timeA = new Date(a.lastMessageAt || a.updatedAt).getTime();
      const timeB = new Date(b.lastMessageAt || b.updatedAt).getTime();
      return timeB - timeA;
    });
  }

  // 3. Format conversation with peer profile and unread count
  private async formatConversation(conv: any, currentUserId: string, memberLastReadAt?: Date) {
    const peerMember = conv.members.find((m: any) => m.userId !== currentUserId);
    const peerUserId = peerMember ? peerMember.userId : currentUserId;
    const peerProfile = await this.getUserProfile(peerUserId);

    // Get unread count
    let unreadCount = 0;
    const currentMember = conv.members.find((m: any) => m.userId === currentUserId);
    const lastRead = memberLastReadAt || (currentMember ? currentMember.lastReadAt : new Date(0));

    unreadCount = await (this.prisma as any).message.count({
      where: {
        conversationId: conv.id,
        createdAt: { gt: lastRead },
        senderId: { not: currentUserId },
      },
    });

    // Check online status via chatGateway
    const isOnline = this.chatGateway ? this.chatGateway.isUserOnline(peerUserId) : false;

    return {
      id: conv.id,
      type: conv.type,
      title: conv.type === 'DIRECT' ? peerProfile.displayName : conv.title,
      avatar: conv.type === 'DIRECT' ? peerProfile.avatarUrl : conv.avatar,
      peerUser: {
        id: peerProfile.userId,
        displayName: peerProfile.displayName,
        username: peerProfile.username,
        avatarUrl: peerProfile.avatarUrl,
        isOnline,
      },
      lastMessageText: conv.lastMessageText,
      lastMessageAt: conv.lastMessageAt,
      lastSenderId: conv.lastSenderId,
      unreadCount,
      createdAt: conv.createdAt,
      updatedAt: conv.updatedAt,
    };
  }

  // 4. Get messages in a conversation
  async getMessages(conversationId: string, userId: string, cursor?: string, limit = 30) {
    // Check membership
    const member = await (this.prisma as any).conversationMember.findUnique({
      where: {
        conversationId_userId: {
          conversationId,
          userId,
        },
      },
    });

    if (!member) {
      throw new ForbiddenException('Bạn không có quyền truy cập cuộc trò chuyện này');
    }

    const queryOptions: any = {
      where: {
        conversationId,
        NOT: {
          deletedForUserIds: { has: userId },
        },
      },
      include: {
        attachments: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: Math.min(limit, 100),
    };

    if (cursor) {
      queryOptions.cursor = { id: cursor };
      queryOptions.skip = 1;
    }

    const messages = await (this.prisma as any).message.findMany(queryOptions);

    // Format sender profile and sort chronologically (oldest first)
    const formatted = await Promise.all(
      messages.map(async (msg: any) => {
        const senderProfile = await this.getUserProfile(msg.senderId);
        return {
          id: msg.id,
          conversationId: msg.conversationId,
          senderId: msg.senderId,
          sender: {
            id: senderProfile.userId,
            displayName: senderProfile.displayName,
            avatarUrl: senderProfile.avatarUrl,
          },
          clientMessageId: msg.clientMessageId,
          content: msg.recalledAt ? 'Tin nhắn đã được thu hồi' : msg.content,
          type: msg.type,
          status: msg.status,
          replyToMessageId: msg.replyToMessageId,
          recalled: !!msg.recalledAt,
          recalledAt: msg.recalledAt,
          attachments: msg.attachments || [],
          createdAt: msg.createdAt,
          updatedAt: msg.updatedAt,
        };
      }),
    );

    return formatted.reverse();
  }

  // 5. Send message
  async sendMessage(senderId: string, dto: SendMessageDto) {
    const { conversationId, clientMessageId, content, type = 'TEXT', replyToMessageId, attachments } = dto;

    if (!content && (!attachments || attachments.length === 0)) {
      throw new BadRequestException('Nội dung tin nhắn hoặc tệp đính kèm không được để trống');
    }

    // Verify membership
    const member = await (this.prisma as any).conversationMember.findUnique({
      where: {
        conversationId_userId: {
          conversationId,
          userId: senderId,
        },
      },
      include: {
        conversation: {
          include: {
            members: true,
          },
        },
      },
    });

    if (!member) {
      throw new ForbiddenException('Bạn không phải là thành viên của cuộc trò chuyện này');
    }

    // Check block status between direct members
    if (member.conversation.type === 'DIRECT') {
      const peer = member.conversation.members.find((m: any) => m.userId !== senderId);
      if (peer) {
        const blocked = await this.isBlocked(senderId, peer.userId);
        if (blocked) {
          throw new ForbiddenException('Không thể gửi tin nhắn cho người dùng này do trạng thái chặn');
        }
      }
    }

    // Deduplication check via clientMessageId
    if (clientMessageId) {
      const existing = await (this.prisma as any).message.findFirst({
        where: {
          conversationId,
          senderId,
          clientMessageId,
        },
        include: {
          attachments: true,
        },
      });

      if (existing) {
        const senderProfile = await this.getUserProfile(senderId);
        return {
          id: existing.id,
          conversationId: existing.conversationId,
          senderId: existing.senderId,
          sender: {
            id: senderProfile.userId,
            displayName: senderProfile.displayName,
            avatarUrl: senderProfile.avatarUrl,
          },
          clientMessageId: existing.clientMessageId,
          content: existing.content,
          type: existing.type,
          status: existing.status,
          replyToMessageId: existing.replyToMessageId,
          recalled: !!existing.recalledAt,
          recalledAt: existing.recalledAt,
          attachments: existing.attachments || [],
          createdAt: existing.createdAt,
          updatedAt: existing.updatedAt,
        };
      }
    }

    // Determine preview text for conversation
    let previewText = content;
    if (!content && attachments && attachments.length > 0) {
      previewText = attachments[0].mimeType.startsWith('image/')
        ? 'Đã gửi một ảnh'
        : 'Đã gửi một tệp đính kèm';
    }

    // Create message in database
    const message = await (this.prisma as any).message.create({
      data: {
        conversationId,
        senderId,
        clientMessageId,
        content: content || '',
        type,
        status: 'SENT',
        replyToMessageId,
        attachments: attachments && attachments.length > 0 ? {
          create: attachments.map((att) => ({
            fileName: att.fileName,
            fileKey: att.fileKey,
            mimeType: att.mimeType,
            size: att.size,
            url: att.url,
          })),
        } : undefined,
      },
      include: {
        attachments: true,
      },
    });

    // Update conversation last message & timestamp
    await (this.prisma as any).conversation.update({
      where: { id: conversationId },
      data: {
        lastMessageText: previewText,
        lastMessageAt: message.createdAt,
        lastSenderId: senderId,
        updatedAt: message.createdAt,
      },
    });

    // Update sender's lastReadAt so sender doesn't see their own sent message as unread
    await (this.prisma as any).conversationMember.update({
      where: {
        conversationId_userId: {
          conversationId,
          userId: senderId,
        },
      },
      data: {
        lastReadAt: message.createdAt,
      },
    });

    const senderProfile = await this.getUserProfile(senderId);

    const formattedMessage = {
      id: message.id,
      conversationId: message.conversationId,
      senderId: message.senderId,
      sender: {
        id: senderProfile.userId,
        displayName: senderProfile.displayName,
        avatarUrl: senderProfile.avatarUrl,
      },
      clientMessageId: message.clientMessageId,
      content: message.content,
      type: message.type,
      status: message.status,
      replyToMessageId: message.replyToMessageId,
      recalled: false,
      recalledAt: null,
      attachments: message.attachments || [],
      createdAt: message.createdAt,
      updatedAt: message.updatedAt,
    };

    return formattedMessage;
  }

  // 6. Mark conversation as read
  async markAsRead(conversationId: string, userId: string) {
    const member = await (this.prisma as any).conversationMember.findUnique({
      where: {
        conversationId_userId: {
          conversationId,
          userId,
        },
      },
    });

    if (!member) {
      throw new ForbiddenException('Bạn không phải thành viên của cuộc trò chuyện này');
    }

    const now = new Date();
    await (this.prisma as any).conversationMember.update({
      where: {
        conversationId_userId: {
          conversationId,
          userId,
        },
      },
      data: {
        lastReadAt: now,
      },
    });

    // Update unread messages status to READ
    await (this.prisma as any).message.updateMany({
      where: {
        conversationId,
        senderId: { not: userId },
        status: { not: 'READ' },
      },
      data: {
        status: 'READ',
      },
    });

    return { success: true, lastReadAt: now };
  }

  // 7. Recall message
  async recallMessage(messageId: string, userId: string) {
    const message = await (this.prisma as any).message.findUnique({
      where: { id: messageId },
    });

    if (!message) {
      throw new NotFoundException('Tin nhắn không tồn tại');
    }

    if (message.senderId !== userId) {
      throw new ForbiddenException('Bạn chỉ có thể thu hồi tin nhắn của chính mình');
    }

    const now = new Date();
    const updated = await (this.prisma as any).message.update({
      where: { id: messageId },
      data: {
        recalledAt: now,
      },
    });

    return {
      id: updated.id,
      conversationId: updated.conversationId,
      recalled: true,
      recalledAt: now,
      content: 'Tin nhắn đã được thu hồi',
    };
  }

  // 8. Delete message for me
  async deleteMessageForMe(messageId: string, userId: string) {
    const message = await (this.prisma as any).message.findUnique({
      where: { id: messageId },
    });

    if (!message) {
      throw new NotFoundException('Tin nhắn không tồn tại');
    }

    const currentDeleted = message.deletedForUserIds || [];
    if (!currentDeleted.includes(userId)) {
      await (this.prisma as any).message.update({
        where: { id: messageId },
        data: {
          deletedForUserIds: [...currentDeleted, userId],
        },
      });
    }

    return { success: true };
  }

  // 9. Get conversation detail by ID
  async getConversationById(conversationId: string, userId: string) {
    const member = await (this.prisma as any).conversationMember.findUnique({
      where: {
        conversationId_userId: {
          conversationId,
          userId,
        },
      },
      include: {
        conversation: {
          include: {
            members: true,
          },
        },
      },
    });

    if (!member) {
      throw new ForbiddenException('Bạn không có quyền truy cập cuộc trò chuyện này');
    }

    return this.formatConversation(member.conversation, userId, member.lastReadAt);
  }

  // 10. Get total unread count for badge
  async getTotalUnreadCount(userId: string): Promise<number> {
    const memberships = await (this.prisma as any).conversationMember.findMany({
      where: { userId, isArchived: false },
      select: { conversationId: true, lastReadAt: true },
    });

    let total = 0;
    for (const m of memberships) {
      const count = await (this.prisma as any).message.count({
        where: {
          conversationId: m.conversationId,
          createdAt: { gt: m.lastReadAt },
          senderId: { not: userId },
        },
      });
      if (count > 0) total += count;
    }

    return total;
  }
}
