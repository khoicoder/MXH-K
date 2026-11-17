import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  Logger,
  Optional,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { InteractionGateway } from '../gateways/interaction.gateway';
import { NotificationService } from '../../../../../notification-service/src/modules/notification/services/notification.service';
import { SetReactionDto, CreateCommentDto, UpdateCommentDto, CreateReportDto } from '../dto/interaction.dto';

@Injectable()
export class InteractionService {
  private readonly logger = new Logger(InteractionService.name);

  constructor(
    private readonly prisma: PrismaService,
    @Optional() private readonly gateway?: InteractionGateway,
  ) {}

  // ================= REACTIONS =================

  async setReaction(userId: string, dto: SetReactionDto) {
    const existing = await this.prisma.reaction.findUnique({
      where: {
        userId_targetType_targetId: {
          userId,
          targetType: dto.targetType,
          targetId: dto.targetId,
        },
      },
    });

    // If same reaction clicked again -> Toggle off (remove)
    if (existing && existing.type === dto.reactionType) {
      await this.prisma.reaction.delete({
        where: { id: existing.id },
      });
      const total = await this.prisma.reaction.count({
        where: { targetType: dto.targetType, targetId: dto.targetId },
      });
      this.gateway?.broadcastReactionUpdate(dto.targetType, dto.targetId, {
        action: 'REMOVED',
        total,
        userId,
      });
      return { action: 'REMOVED', reactionType: null, total };
    }

    // Upsert new reaction type
    const reaction = await this.prisma.reaction.upsert({
      where: {
        userId_targetType_targetId: {
          userId,
          targetType: dto.targetType,
          targetId: dto.targetId,
        },
      },
      update: {
        type: dto.reactionType,
      },
      create: {
        userId,
        targetType: dto.targetType,
        targetId: dto.targetId,
        type: dto.reactionType,
      },
    });

    const total = await this.prisma.reaction.count({
      where: { targetType: dto.targetType, targetId: dto.targetId },
    });

    this.gateway?.broadcastReactionUpdate(dto.targetType, dto.targetId, {
      action: existing ? 'UPDATED' : 'CREATED',
      reactionType: reaction.type,
      total,
      userId,
    });

    // Notify post author or comment author
    try {
      if (dto.targetType === 'POST') {
        const PostPrisma = require('../../../../../post-service/src/prisma/client').PrismaClient;
        const postClient = new PostPrisma({ datasources: { db: { url: process.env.POST_DATABASE_URL } } });
        const post = await postClient.post.findUnique({
          where: { id: dto.targetId },
          select: { authorId: true },
        });
        await postClient.$disconnect();
        if (post && post.authorId !== userId) {
          await NotificationService.dispatchNotification({
            recipientId: post.authorId,
            actorId: userId,
            type: 'POST_REACTION',
            targetType: 'POST',
            targetId: dto.targetId,
            summary: 'đã bày tỏ cảm xúc về bài viết của bạn.',
          });
        }
      } else if (dto.targetType === 'COMMENT') {
        const comment = await this.prisma.comment.findUnique({
          where: { id: dto.targetId },
          select: { authorId: true, postId: true },
        });
        if (comment && comment.authorId !== userId) {
          await NotificationService.dispatchNotification({
            recipientId: comment.authorId,
            actorId: userId,
            type: 'POST_REACTION',
            targetType: 'COMMENT',
            targetId: dto.targetId,
            summary: 'đã bày tỏ cảm xúc về bình luận của bạn.',
          });
        }
      }
    } catch (err: any) {
      this.logger.warn(`Could not dispatch reaction notification: ${err.message}`);
    }

    return { action: existing ? 'UPDATED' : 'CREATED', reactionType: reaction.type, total };
  }

  async removeReaction(userId: string, targetType: string, targetId: string) {
    await this.prisma.reaction.deleteMany({
      where: { userId, targetType, targetId },
    });
    return { success: true, message: 'Reaction removed' };
  }

  async getReactionSummary(targetType: string, targetId: string, currentUserId?: string) {
    const reactions = await this.prisma.reaction.findMany({
      where: { targetType, targetId },
      select: { userId: true, type: true },
    });

    const counts: Record<string, number> = {
      LIKE: 0,
      LOVE: 0,
      HAHA: 0,
      WOW: 0,
      SAD: 0,
      ANGRY: 0,
    };

    let myReaction: string | null = null;

    for (const r of reactions) {
      counts[r.type] = (counts[r.type] || 0) + 1;
      if (currentUserId && r.userId === currentUserId) {
        myReaction = r.type;
      }
    }

    return {
      counts,
      total: reactions.length,
      myReaction,
    };
  }

  // ================= COMMENTS =================

  async createComment(authorId: string, dto: CreateCommentDto) {
    let depth = 0;

    if (dto.parentCommentId) {
      const parent = await this.prisma.comment.findUnique({
        where: { id: dto.parentCommentId },
      });
      if (!parent || parent.deletedAt) {
        throw new NotFoundException('Parent comment not found');
      }
      // Maximum depth clamping at 2 (Root = 0, Reply = 1, Sub-reply = 2)
      depth = Math.min(parent.depth + 1, 2);

      await this.prisma.comment.update({
        where: { id: parent.id },
        data: { repliesCount: { increment: 1 } },
      });
    }

    const effectivePostId = dto.postId || (dto as any).targetId;
    const comment = await this.prisma.comment.create({
      data: {
        postId: effectivePostId,
        authorId,
        parentCommentId: dto.parentCommentId,
        depth,
        content: dto.content,
      },
    });

    let authorProfile: any = null;
    try {
      const UserPrisma = require('../../../../../user-service/src/prisma/client').PrismaClient;
      const userClient = new UserPrisma({ datasources: { db: { url: process.env.USER_DATABASE_URL } } });
      authorProfile = await userClient.userProfile.findUnique({ where: { userId: authorId } });
      await userClient.$disconnect();
    } catch {}

    const result = {
      ...comment,
      authorName: authorProfile?.displayName || authorProfile?.username || 'Bạn',
      authorAvatar: authorProfile?.avatarUrl || null,
    };

    this.gateway?.broadcastCommentCreated(comment.postId, result);

    // Notify parent comment author or post author
    try {
      const preview = dto.content.length > 50 ? `${dto.content.substring(0, 50)}...` : dto.content;
      let parentAuthorId: string | null = null;

      if (dto.parentCommentId) {
        const parent = await this.prisma.comment.findUnique({
          where: { id: dto.parentCommentId },
          select: { authorId: true },
        });
        if (parent && parent.authorId) {
          parentAuthorId = parent.authorId;
          if (parent.authorId !== authorId) {
            await NotificationService.dispatchNotification({
              recipientId: parent.authorId,
              actorId: authorId,
              type: 'REPLY',
              targetType: 'COMMENT',
              targetId: comment.id,
              summary: `đã trả lời bình luận của bạn: "${preview}"`,
            });
          }
        }
      }

      // Also notify post author if post author is not the comment author and not already notified as parent author
      const PostPrisma = require('../../../../../post-service/src/prisma/client').PrismaClient;
      const postClient = new PostPrisma({ datasources: { db: { url: process.env.POST_DATABASE_URL } } });
      const post = await postClient.post.findUnique({
        where: { id: effectivePostId },
        select: { authorId: true },
      });
      await postClient.$disconnect();

      if (post && post.authorId !== authorId && post.authorId !== parentAuthorId) {
        await NotificationService.dispatchNotification({
          recipientId: post.authorId,
          actorId: authorId,
          type: 'COMMENT',
          targetType: 'POST',
          targetId: comment.postId,
          summary: `đã bình luận về bài viết của bạn: "${preview}"`,
        });
      }
    } catch (err: any) {
      this.logger.warn(`Could not dispatch comment notification: ${err.message}`);
    }

    return result;
  }

  async getPostComments(postId: string, limit = 50, cursor?: string) {
    const comments = await this.prisma.comment.findMany({
      where: { postId, deletedAt: null },
      take: limit + 1,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      orderBy: { createdAt: 'asc' },
    });

    const hasMore = comments.length > limit;
    const paginatedList = hasMore ? comments.slice(0, limit) : comments;
    const nextCursor = hasMore ? paginatedList[paginatedList.length - 1]?.id : null;

    const authorIds = Array.from(new Set(paginatedList.map((c: any) => c.authorId)));
    let profileMap: Record<string, any> = {};
    try {
      const UserPrisma = require('../../../../../user-service/src/prisma/client').PrismaClient;
      const userClient = new UserPrisma({ datasources: { db: { url: process.env.USER_DATABASE_URL } } });
      const profiles = await userClient.userProfile.findMany({
        where: { userId: { in: authorIds } },
      });
      profileMap = Object.fromEntries(profiles.map((p: any) => [p.userId, p]));
      await userClient.$disconnect();
    } catch {}

    const enriched = paginatedList.map((c: any) => ({
      ...c,
      authorName: profileMap[c.authorId]?.displayName || profileMap[c.authorId]?.username || 'Thành viên MXH-K',
      authorAvatar: profileMap[c.authorId]?.avatarUrl || null,
    }));

    return {
      items: enriched,
      nextCursor,
      hasMore,
    };
  }

  async updateComment(commentId: string, authorId: string, dto: UpdateCommentDto) {
    const comment = await this.prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!comment || comment.deletedAt) throw new NotFoundException('Comment not found');
    if (comment.authorId !== authorId) throw new ForbiddenException('Cannot edit another user comment');

    return this.prisma.comment.update({
      where: { id: commentId },
      data: { content: dto.content },
    });
  }

  async deleteComment(commentId: string, authorId: string) {
    const comment = await this.prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!comment || comment.deletedAt) throw new NotFoundException('Comment not found');
    if (comment.authorId !== authorId) throw new ForbiddenException('Cannot delete another user comment');

    await this.prisma.comment.update({
      where: { id: commentId },
      data: { deletedAt: new Date() },
    });

    this.gateway?.broadcastCommentDeleted(comment.postId, commentId);

    return { success: true, message: 'Comment deleted' };
  }

  // ================= REPORTS =================

  async createReport(reporterId: string, dto: CreateReportDto) {
    return this.prisma.report.create({
      data: {
        reporterId,
        targetType: dto.targetType,
        targetId: dto.targetId,
        reason: dto.reason,
      },
    });
  }
}
