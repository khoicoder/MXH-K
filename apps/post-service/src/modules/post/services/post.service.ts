import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreatePostDto, UpdatePostDto } from '../dto/post.dto';

@Injectable()
export class PostService {
  private readonly logger = new Logger(PostService.name);

  constructor(private readonly prisma: PrismaService) {}

  private extractHashtags(content: string): string[] {
    const matches = content.match(/#[a-zA-Z0-9_]+/g);
    if (!matches) return [];
    return Array.from(new Set(matches.map((tag) => tag.substring(1).toLowerCase())));
  }

  async createPost(authorId: string, dto: CreatePostDto) {
    const tags = this.extractHashtags(dto.content);
    const media = dto.media || [];

    return this.prisma.$transaction(async (tx) => {
      // 1. Create post
      const post = await tx.post.create({
        data: {
          authorId,
          content: dto.content,
          visibility: dto.visibility || 'PUBLIC',
          sharedPostId: dto.sharedPostId,
          mediaCount: media.length,
          media: {
            create: media.map((m, idx) => ({
              mediaId: m.mediaId,
              mediaType: m.mediaType,
              url: m.url,
              orderIndex: idx,
            })),
          },
        },
        include: {
          media: { orderBy: { orderIndex: 'asc' } },
        },
      });

      // 2. Upsert hashtags & link
      for (const tag of tags) {
        const hashtag = await tx.hashtag.upsert({
          where: { tag },
          update: {
            postCount: { increment: 1 },
            lastUsedAt: new Date(),
          },
          create: {
            tag,
            postCount: 1,
          },
        });

        await tx.postHashtag.create({
          data: {
            postId: post.id,
            hashtagId: hashtag.id,
          },
        });
      }

      this.logger.log(`Created post ${post.id} by author ${authorId} with ${tags.length} hashtags`);

      // Ingest into feed_db
      try {
        const FeedPrisma = require('../../../../../feed-service/src/prisma/client').PrismaClient;
        const feedPrisma = new FeedPrisma({ datasources: { db: { url: process.env.FEED_DATABASE_URL } } });
        await feedPrisma.feedItem.upsert({
          where: { recipientId_postId: { recipientId: authorId, postId: post.id } },
          create: { recipientId: authorId, postId: post.id, authorId, score: 100, reason: 'AUTHOR' },
          update: { score: 100 },
        });
        await feedPrisma.$disconnect();
      } catch (e: any) {
        this.logger.warn(`Could not fan-out feed item: ${e.message}`);
      }

      // Invalidate Redis feed cache
      try {
        const Redis = require('ioredis');
        const redisHost = process.env.REDIS_HOST || 'localhost';
        const redisPort = parseInt(process.env.REDIS_PORT || '6380', 10);
        const redisPassword = process.env.REDIS_PASSWORD || 'redis_secure_pass';
        const redis = new Redis({ host: redisHost, port: redisPort, password: redisPassword, lazyConnect: true, maxRetriesPerRequest: 1 });
        await redis.connect();
        const keys = await redis.keys('feed:*');
        if (keys.length > 0) await redis.del(...keys);
        redis.disconnect();
      } catch {}

      return post;
    });
  }

  async getPostById(postId: string, requestingUserId?: string) {
    const post = await this.prisma.post.findUnique({
      where: { id: postId, deletedAt: null },
      include: {
        media: { orderBy: { orderIndex: 'asc' } },
        hashtags: { include: { hashtag: true } },
      },
    });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    // Visibility checks
    if (post.visibility === 'PRIVATE' && post.authorId !== requestingUserId) {
      throw new ForbiddenException('This post is private');
    }

    return {
      ...post,
      hashtags: post.hashtags.map((h) => h.hashtag.tag),
    };
  }

  async updatePost(postId: string, authorId: string, dto: UpdatePostDto) {
    const post = await this.prisma.post.findUnique({ where: { id: postId } });
    if (!post || post.deletedAt) {
      throw new NotFoundException('Post not found');
    }
    if (post.authorId !== authorId) {
      throw new ForbiddenException('Cannot edit another user post');
    }

    return this.prisma.post.update({
      where: { id: postId },
      data: {
        content: dto.content,
        visibility: dto.visibility,
      },
      include: {
        media: true,
      },
    });
  }

  async deletePost(postId: string, authorId: string) {
    const post = await this.prisma.post.findUnique({ where: { id: postId } });
    if (!post || post.deletedAt) {
      throw new NotFoundException('Post not found');
    }
    if (post.authorId !== authorId) {
      throw new ForbiddenException('Cannot delete another user post');
    }

    await this.prisma.post.update({
      where: { id: postId },
      data: { deletedAt: new Date() },
    });

    try {
      const FeedPrisma = require('../../../../../feed-service/src/prisma/client').PrismaClient;
      const feedPrisma = new FeedPrisma({ datasources: { db: { url: process.env.FEED_DATABASE_URL } } });
      await feedPrisma.feedItem.deleteMany({ where: { postId } });
      await feedPrisma.$disconnect();
    } catch {}

    try {
      const Redis = require('ioredis');
      const redisHost = process.env.REDIS_HOST || 'localhost';
      const redisPort = parseInt(process.env.REDIS_PORT || '6380', 10);
      const redisPassword = process.env.REDIS_PASSWORD || 'redis_secure_pass';
      const redis = new Redis({ host: redisHost, port: redisPort, password: redisPassword, lazyConnect: true, maxRetriesPerRequest: 1 });
      await redis.connect();
      const keys = await redis.keys('feed:*');
      if (keys.length > 0) await redis.del(...keys);
      redis.disconnect();
    } catch {}

    return { success: true, message: 'Post deleted' };
  }

  async togglePinPost(postId: string, authorId: string) {
    const post = await this.prisma.post.findUnique({ where: { id: postId } });
    if (!post || post.deletedAt) throw new NotFoundException('Post not found');
    if (post.authorId !== authorId) throw new ForbiddenException('Cannot pin another user post');

    return this.prisma.post.update({
      where: { id: postId },
      data: { isPinned: !post.isPinned },
    });
  }

  async toggleSavePost(postId: string, userId: string) {
    const existing = await this.prisma.savedPost.findUnique({
      where: { userId_postId: { userId, postId } },
    });

    if (existing) {
      await this.prisma.savedPost.delete({
        where: { id: existing.id },
      });
      return { saved: false, message: 'Post removed from saved bookmarks' };
    } else {
      await this.prisma.savedPost.create({
        data: { userId, postId },
      });
      return { saved: true, message: 'Post saved to bookmarks' };
    }
  }

  async getSavedPosts(userId: string, limit = 20, cursor?: string) {
    const items = await this.prisma.savedPost.findMany({
      where: { userId },
      take: limit + 1,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      orderBy: { savedAt: 'desc' },
      include: {
        post: {
          include: { media: true },
        },
      },
    });

    const hasMore = items.length > limit;
    const paginated = hasMore ? items.slice(0, limit) : items;
    const nextCursor = hasMore ? paginated[paginated.length - 1]?.id : null;

    return {
      items: paginated.map((p) => p.post),
      nextCursor,
      hasMore,
    };
  }

  async getUserPosts(authorId: string, limit = 20, cursor?: string) {
    const items = await this.prisma.post.findMany({
      where: { authorId, deletedAt: null },
      take: limit + 1,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      orderBy: [{ isPinned: 'desc' }, { createdAt: 'desc' }],
      include: {
        media: { orderBy: { orderIndex: 'asc' } },
        hashtags: { include: { hashtag: true } },
      },
    });

    const hasMore = items.length > limit;
    const paginated = hasMore ? items.slice(0, limit) : items;
    const nextCursor = hasMore ? paginated[paginated.length - 1]?.id : null;

    const postIds = paginated.map((p) => p.id);
    const interactionMap = await this.resolveInteractions(postIds);

    return {
      items: paginated.map((p) => ({
        ...p,
        hashtags: p.hashtags.map((h) => h.hashtag.tag),
        reactionsCount: interactionMap[p.id]?.total || 0,
        commentsCount: interactionMap[p.id]?.commentsCount || 0,
      })),
      nextCursor,
      hasMore,
    };
  }

  private async resolveInteractions(postIds: string[]): Promise<Record<string, { total: number; commentsCount: number }>> {
    const result: Record<string, { total: number; commentsCount: number }> = {};
    if (postIds.length === 0) return result;
    for (const pid of postIds) result[pid] = { total: 0, commentsCount: 0 };

    try {
      const InteractPrisma = require('../../../../../interaction-service/src/prisma/client').PrismaClient;
      const interactClient = new InteractPrisma({ datasources: { db: { url: process.env.INTERACTION_DATABASE_URL } } });
      const reactions = await interactClient.reaction.findMany({
        where: { targetType: 'POST', targetId: { in: postIds } },
        select: { targetId: true },
      });
      const comments = await interactClient.comment.findMany({
        where: { postId: { in: postIds }, deletedAt: null },
        select: { postId: true },
      });
      for (const r of reactions) {
        if (result[r.targetId]) result[r.targetId].total += 1;
      }
      for (const c of comments) {
        if (result[c.postId]) result[c.postId].commentsCount += 1;
      }
      await interactClient.$disconnect();
    } catch {}
    return result;
  }

  async getPublicPosts(limit = 20, cursor?: string) {
    const items = await this.prisma.post.findMany({
      where: { visibility: 'PUBLIC', deletedAt: null },
      take: limit + 1,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      orderBy: [{ isPinned: 'desc' }, { createdAt: 'desc' }],
      include: {
        media: { orderBy: { orderIndex: 'asc' } },
        hashtags: { include: { hashtag: true } },
      },
    });

    const hasMore = items.length > limit;
    const paginated = hasMore ? items.slice(0, limit) : items;
    const nextCursor = hasMore ? paginated[paginated.length - 1]?.id : null;

    const postIds = paginated.map((p) => p.id);
    const interactionMap = await this.resolveInteractions(postIds);

    return {
      items: paginated.map((p) => ({
        ...p,
        hashtags: p.hashtags.map((h) => h.hashtag.tag),
        reactionsCount: interactionMap[p.id]?.total || 0,
        commentsCount: interactionMap[p.id]?.commentsCount || 0,
      })),
      nextCursor,
      hasMore,
    };
  }
}
