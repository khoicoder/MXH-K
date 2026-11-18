import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import Redis from 'ioredis';

let PostPrismaClient: any;
let UserPrismaClient: any;
try {
  PostPrismaClient = require('../../../../../post-service/src/prisma/client').PrismaClient;
} catch {}
try {
  UserPrismaClient = require('../../../../../user-service/src/prisma/client').PrismaClient;
} catch {}

@Injectable()
export class FeedService {
  private readonly logger = new Logger(FeedService.name);
  private postPrisma?: any;
  private userPrisma?: any;
  private redis?: Redis;

  constructor(private readonly prisma: PrismaService) {
    const redisHost = process.env.REDIS_HOST || 'localhost';
    const redisPort = parseInt(process.env.REDIS_PORT || '6380', 10);
    const redisPassword = process.env.REDIS_PASSWORD || 'redis_secure_pass';

    try {
      this.redis = new Redis({
        host: redisHost,
        port: redisPort,
        password: redisPassword,
        lazyConnect: true,
        maxRetriesPerRequest: 1,
        retryStrategy: () => null,
      });
      this.redis.on('error', () => {});
      this.redis.connect().catch(() => {});
    } catch {}
  }

  private getPostPrisma(): any {
    if (!this.postPrisma && PostPrismaClient) {
      this.postPrisma = new PostPrismaClient({
        datasources: { db: { url: process.env.POST_DATABASE_URL } },
      });
    }
    return this.postPrisma;
  }

  private getUserPrisma(): any {
    if (!this.userPrisma && UserPrismaClient) {
      this.userPrisma = new UserPrismaClient({
        datasources: { db: { url: process.env.USER_DATABASE_URL } },
      });
    }
    return this.userPrisma;
  }

  private interactPrisma?: any;

  private getInteractPrisma(): any {
    if (!this.interactPrisma) {
      try {
        const InteractPrisma = require('../../../../../interaction-service/src/prisma/client').PrismaClient;
        this.interactPrisma = new InteractPrisma({
          datasources: { db: { url: process.env.INTERACTION_DATABASE_URL } },
        });
      } catch {}
    }
    return this.interactPrisma;
  }

  private async resolveAuthorProfiles(authorIds: string[]): Promise<Record<string, { displayName: string; avatarUrl: string | null }>> {
    const result: Record<string, { displayName: string; avatarUrl: string | null }> = {};
    if (authorIds.length === 0) return result;

    try {
      const userClient = this.getUserPrisma();
      if (userClient) {
        const profiles = await userClient.userProfile.findMany({
          where: { userId: { in: authorIds } },
        });
        for (const p of profiles) {
          result[p.userId] = {
            displayName: p.displayName || p.username || 'Người dùng MXH-K',
            avatarUrl: p.avatarUrl || null,
          };
        }
      }
    } catch {}

    const missingIds = authorIds.filter((id) => !result[id]);
    if (missingIds.length > 0) {
      try {
        const AuthPrisma = require('../../../../../auth-service/src/prisma/client').PrismaClient;
        const authClient = new AuthPrisma({ datasources: { db: { url: process.env.AUTH_DATABASE_URL } } });
        const accounts = await authClient.account.findMany({
          where: { id: { in: missingIds } },
        });
        for (const acc of accounts) {
          result[acc.id] = {
            displayName: acc.email.split('@')[0],
            avatarUrl: null,
          };
        }
        await authClient.$disconnect();
      } catch {}
    }

    return result;
  }

  private async resolveInteractions(postIds: string[], currentUserId?: string): Promise<Record<string, { total: number; myReaction: string | null; commentsCount: number }>> {
    const result: Record<string, { total: number; myReaction: string | null; commentsCount: number }> = {};
    if (postIds.length === 0) return result;

    for (const pid of postIds) {
      result[pid] = { total: 0, myReaction: null, commentsCount: 0 };
    }

    try {
      const interactClient = this.getInteractPrisma();
      if (!interactClient) return result;

      const reactions = await interactClient.reaction.findMany({
        where: { targetType: 'POST', targetId: { in: postIds } },
        select: { targetId: true, userId: true, type: true },
      });

      const comments = await interactClient.comment.findMany({
        where: { postId: { in: postIds }, deletedAt: null },
        select: { postId: true },
      });

      for (const r of reactions) {
        if (result[r.targetId]) {
          result[r.targetId].total += 1;
          if (currentUserId && r.userId === currentUserId) {
            result[r.targetId].myReaction = r.type;
          }
        }
      }

      for (const c of comments) {
        if (result[c.postId]) {
          result[c.postId].commentsCount += 1;
        }
      }
    } catch (e: any) {
      this.logger.warn(`Could not resolve interactions: ${e.message}`);
    }

    return result;
  }

  calculateRankingScore(affinity: 'FRIEND' | 'FOLLOWING' | 'TRENDING', reactionsCount = 0, commentsCount = 0, ageHours = 0): number {
    let affinityWeight = 10;
    if (affinity === 'FRIEND') affinityWeight = 50;
    if (affinity === 'FOLLOWING') affinityWeight = 30;

    const engagementScore = (reactionsCount * 2) + (commentsCount * 5);
    const recencyPenalty = ageHours * 1.5;

    return Math.max(0, affinityWeight + engagementScore - recencyPenalty);
  }

  async ingestFeedItem(recipientId: string, postId: string, authorId: string, affinity: 'FRIEND' | 'FOLLOWING' | 'TRENDING' = 'RECOMMENDED' as any) {
    const score = this.calculateRankingScore(affinity, 0, 0, 0);

    return this.prisma.feedItem.upsert({
      where: {
        recipientId_postId: { recipientId, postId },
      },
      update: {
        score,
        reason: affinity,
      },
      create: {
        recipientId,
        postId,
        authorId,
        score,
        reason: affinity,
      },
    });
  }

  async getUserFeed(userId: string, limit = 20, cursor?: string) {
    const cacheKey = `feed:${userId || 'public'}:${limit}`;

    // Redis Cache lookup (only for initial page without pagination cursor)
    if (!cursor && this.redis) {
      try {
        const cached = await this.redis.get(cacheKey);
        if (cached) {
          return JSON.parse(cached);
        }
      } catch {}
    }

    // 1. Get IDs of posts hidden by user
    const hidden = await this.prisma.hiddenPost.findMany({
      where: { userId },
      select: { postId: true },
    });
    const hiddenPostIds = hidden.map((h: any) => h.postId);

    // 2. Fetch ranked feed items
    const items = await this.prisma.feedItem.findMany({
      where: {
        recipientId: userId,
        postId: { notIn: hiddenPostIds },
      },
      take: limit + 1,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      orderBy: [
        { score: 'desc' },
        { createdAt: 'desc' },
      ],
    });

    const hasMore = items.length > limit;
    const paginated = hasMore ? items.slice(0, limit) : items;
    const nextCursor = hasMore ? paginated[paginated.length - 1]?.id : null;

    if (paginated.length === 0) {
      try {
        const postClient = this.getPostPrisma();
        if (!postClient) {
          return { items: [], nextCursor: null, hasMore: false };
        }

        const publicPosts = await postClient.post.findMany({
          where: { visibility: 'PUBLIC', deletedAt: null },
          take: limit,
          orderBy: { createdAt: 'desc' },
          include: {
            media: { orderBy: { orderIndex: 'asc' } },
            hashtags: { include: { hashtag: true } },
          },
        });

        const authorIds = Array.from(new Set(publicPosts.map((p: any) => p.authorId))) as string[];
        const postIds = publicPosts.map((p: any) => p.id);
        const [profileMap, interactionMap] = await Promise.all([
          this.resolveAuthorProfiles(authorIds),
          this.resolveInteractions(postIds, userId),
        ]);

        const enriched = publicPosts.map((p: any) => ({
          id: p.id,
          postId: p.id,
          authorId: p.authorId,
          authorName: profileMap[p.authorId]?.displayName || 'Người dùng MXH-K',
          authorAvatar: profileMap[p.authorId]?.avatarUrl || null,
          content: p.content,
          visibility: p.visibility,
          isPinned: p.isPinned,
          createdAt: p.createdAt.toISOString(),
          media: p.media,
          hashtags: p.hashtags?.map((h: any) => h.hashtag.tag) || [],
          reactionsCount: interactionMap[p.id]?.total || 0,
          commentsCount: interactionMap[p.id]?.commentsCount || 0,
          myReaction: interactionMap[p.id]?.myReaction || null,
        }));

        const feedResult = {
          items: enriched,
          nextCursor: null,
          hasMore: false,
        };

        if (!cursor && this.redis && enriched.length > 0) {
          try {
            await this.redis.set(cacheKey, JSON.stringify(feedResult), 'EX', 30);
          } catch {}
        }

        return feedResult;
      } catch (err: any) {
        this.logger.warn(`Could not hydrate public posts: ${err.message}`);
        return { items: [], nextCursor: null, hasMore: false };
      }
    }

    try {
      const postClient = this.getPostPrisma();
      if (!postClient) {
        return { items: paginated, nextCursor, hasMore };
      }

      const postIds = paginated.map((p: any) => p.postId);
      const postRecords = await postClient.post.findMany({
        where: { id: { in: postIds }, deletedAt: null },
        include: {
          media: { orderBy: { orderIndex: 'asc' } },
          hashtags: { include: { hashtag: true } },
        },
      });
      const postMap = Object.fromEntries(postRecords.map((p: any) => [p.id, p]));

      const authorIds = Array.from(new Set([...paginated.map((p: any) => p.authorId), ...postRecords.map((p: any) => p.authorId)])) as string[];
      const [profileMap, interactionMap] = await Promise.all([
        this.resolveAuthorProfiles(authorIds),
        this.resolveInteractions(postIds, userId),
      ]);

      const enrichedItems = paginated.map((item: any) => {
        const post = postMap[item.postId];
        return {
          ...item,
          content: post?.content || '',
          visibility: post?.visibility || 'PUBLIC',
          isPinned: post?.isPinned || false,
          media: post?.media || [],
          hashtags: post?.hashtags?.map((h: any) => h.hashtag.tag) || [],
          authorName: profileMap[item.authorId]?.displayName || 'Người dùng MXH-K',
          authorAvatar: profileMap[item.authorId]?.avatarUrl || null,
          reactionsCount: interactionMap[item.postId]?.total || 0,
          commentsCount: interactionMap[item.postId]?.commentsCount || 0,
          myReaction: interactionMap[item.postId]?.myReaction || null,
        };
      });

      const paginatedResult = {
        items: enrichedItems,
        nextCursor,
        hasMore,
      };

      if (!cursor && this.redis && enrichedItems.length > 0) {
        try {
          await this.redis.set(cacheKey, JSON.stringify(paginatedResult), 'EX', 30);
        } catch {}
      }

      return paginatedResult;
    } catch {
      return {
        items: paginated,
        nextCursor,
        hasMore,
      };
    }
  }

  async getExploreFeed(limit = 20, cursor?: string) {
    const items = await this.prisma.feedItem.findMany({
      take: limit + 1,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      orderBy: [
        { score: 'desc' },
        { createdAt: 'desc' },
      ],
      distinct: ['postId'],
    });

    const hasMore = items.length > limit;
    const paginated = hasMore ? items.slice(0, limit) : items;
    const nextCursor = hasMore ? paginated[paginated.length - 1]?.id : null;

    if (paginated.length === 0) {
      try {
        const postClient = this.getPostPrisma();
        if (!postClient) {
          return { items: [], nextCursor: null, hasMore: false };
        }

        const publicPosts = await postClient.post.findMany({
          where: { visibility: 'PUBLIC', deletedAt: null },
          take: limit,
          orderBy: { createdAt: 'desc' },
          include: {
            media: { orderBy: { orderIndex: 'asc' } },
            hashtags: { include: { hashtag: true } },
          },
        });

        const authorIds = Array.from(new Set(publicPosts.map((p: any) => p.authorId))) as string[];
        const postIds = publicPosts.map((p: any) => p.id);
        const [profileMap, interactionMap] = await Promise.all([
          this.resolveAuthorProfiles(authorIds),
          this.resolveInteractions(postIds),
        ]);

        const enriched = publicPosts.map((p: any) => ({
          id: p.id,
          postId: p.id,
          authorId: p.authorId,
          authorName: profileMap[p.authorId]?.displayName || 'Người dùng MXH-K',
          authorAvatar: profileMap[p.authorId]?.avatarUrl || null,
          content: p.content,
          visibility: p.visibility,
          isPinned: p.isPinned,
          createdAt: p.createdAt.toISOString(),
          media: p.media,
          hashtags: p.hashtags?.map((h: any) => h.hashtag.tag) || [],
          reactionsCount: interactionMap[p.id]?.total || 0,
          commentsCount: interactionMap[p.id]?.commentsCount || 0,
          myReaction: interactionMap[p.id]?.myReaction || null,
        }));

        return {
          items: enriched,
          nextCursor: null,
          hasMore: false,
        };
      } catch {
        return { items: [], nextCursor: null, hasMore: false };
      }
    }

    try {
      const postClient = this.getPostPrisma();
      if (!postClient) {
        return { items: paginated, nextCursor, hasMore };
      }

      const postIds = paginated.map((p: any) => p.postId);
      const postRecords = await postClient.post.findMany({
        where: { id: { in: postIds }, deletedAt: null },
        include: {
          media: { orderBy: { orderIndex: 'asc' } },
          hashtags: { include: { hashtag: true } },
        },
      });
      const postMap = Object.fromEntries(postRecords.map((p: any) => [p.id, p]));

      const authorIds = Array.from(new Set([...paginated.map((p: any) => p.authorId), ...postRecords.map((p: any) => p.authorId)])) as string[];
      const [profileMap, interactionMap] = await Promise.all([
        this.resolveAuthorProfiles(authorIds),
        this.resolveInteractions(postIds),
      ]);

      const enrichedItems = paginated.map((item: any) => {
        const post = postMap[item.postId];
        return {
          ...item,
          content: post?.content || '',
          visibility: post?.visibility || 'PUBLIC',
          isPinned: post?.isPinned || false,
          media: post?.media || [],
          hashtags: post?.hashtags?.map((h: any) => h.hashtag.tag) || [],
          authorName: profileMap[item.authorId]?.displayName || 'Người dùng MXH-K',
          authorAvatar: profileMap[item.authorId]?.avatarUrl || null,
          reactionsCount: interactionMap[item.postId]?.total || 0,
          commentsCount: interactionMap[item.postId]?.commentsCount || 0,
          myReaction: interactionMap[item.postId]?.myReaction || null,
        };
      });

      return {
        items: enrichedItems,
        nextCursor,
        hasMore,
      };
    } catch {
      return {
        items: paginated,
        nextCursor,
        hasMore,
      };
    }
  }

  async hidePost(userId: string, postId: string) {
    await this.prisma.hiddenPost.upsert({
      where: { userId_postId: { userId, postId } },
      create: { userId, postId },
      update: {},
    });

    await this.prisma.feedItem.deleteMany({
      where: { recipientId: userId, postId },
    });

    return { success: true, message: 'Post hidden from your feed' };
  }

  async invalidateFeedCache(userId?: string) {
    if (!this.redis) return;
    try {
      if (userId) {
        const keys = await this.redis.keys(`feed:${userId}:*`);
        if (keys.length > 0) await this.redis.del(...keys);
      }
      const pubKeys = await this.redis.keys('feed:public:*');
      if (pubKeys.length > 0) await this.redis.del(...pubKeys);
    } catch {}
  }
}
