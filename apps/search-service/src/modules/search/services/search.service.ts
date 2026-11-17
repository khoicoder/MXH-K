import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { IndexEntityDto } from '../dto/search.dto';

@Injectable()
export class SearchService {
  private readonly logger = new Logger(SearchService.name);

  constructor(private readonly prisma: PrismaService) {}

  async indexEntity(dto: IndexEntityDto) {
    return this.prisma.searchIndex.upsert({
      where: {
        entityType_entityId: {
          entityType: dto.entityType,
          entityId: dto.entityId,
        },
      },
      update: {
        title: dto.title,
        content: dto.content || '',
        tags: dto.tags || [],
        popularity: dto.popularity ?? 0,
      },
      create: {
        entityType: dto.entityType,
        entityId: dto.entityId,
        title: dto.title,
        content: dto.content || '',
        tags: dto.tags || [],
        popularity: dto.popularity ?? 0,
      },
    });
  }

  async search(query: string, entityType?: string, limit = 20, cursor?: string) {
    const cleanQuery = query.trim();
    if (!cleanQuery) {
      return { items: [], nextCursor: null, hasMore: false };
    }

    const results: any[] = [];

    // 1. Search Users if all or USER type
    if (!entityType || entityType === 'USER') {
      try {
        const UserPrisma = require('../../../../../user-service/src/prisma/client').PrismaClient;
        const userClient = new UserPrisma({ datasources: { db: { url: process.env.USER_DATABASE_URL } } });
        const users = await userClient.userProfile.findMany({
          where: {
            OR: [
              { displayName: { contains: cleanQuery, mode: 'insensitive' } },
              { username: { contains: cleanQuery, mode: 'insensitive' } },
              { bio: { contains: cleanQuery, mode: 'insensitive' } },
            ],
          },
          take: limit,
          select: {
            userId: true,
            displayName: true,
            username: true,
            avatarUrl: true,
            bio: true,
          },
        });
        await userClient.$disconnect();

        for (const u of users) {
          results.push({
            id: `user_${u.userId}`,
            entityId: u.userId,
            entityType: 'USER',
            title: u.displayName || u.username,
            content: u.bio || `@${u.username}`,
            avatarUrl: u.avatarUrl,
            username: u.username,
            displayName: u.displayName,
          });
        }
      } catch (err: any) {
        this.logger.warn(`Could not search users: ${err.message}`);
      }
    }

    // 2. Search Posts if all or POST type
    if (!entityType || entityType === 'POST') {
      try {
        const PostPrisma = require('../../../../../post-service/src/prisma/client').PrismaClient;
        const postClient = new PostPrisma({ datasources: { db: { url: process.env.POST_DATABASE_URL } } });
        const posts = await postClient.post.findMany({
          where: {
            content: { contains: cleanQuery, mode: 'insensitive' },
            status: 'PUBLISHED',
          },
          take: limit,
          orderBy: { createdAt: 'desc' },
          select: {
            id: true,
            authorId: true,
            content: true,
            mediaUrls: true,
            createdAt: true,
          },
        });
        await postClient.$disconnect();

        for (const p of posts) {
          results.push({
            id: `post_${p.id}`,
            entityId: p.id,
            entityType: 'POST',
            title: p.content.slice(0, 80),
            content: p.content,
            authorId: p.authorId,
            mediaUrls: p.mediaUrls,
            createdAt: p.createdAt,
          });
        }
      } catch (err: any) {
        this.logger.warn(`Could not search posts: ${err.message}`);
      }
    }

    // 3. Search searchIndex items (hashtags, topics, etc.)
    try {
      const indexed = await this.prisma.searchIndex.findMany({
        where: {
          entityType: entityType ? entityType : undefined,
          OR: [
            { title: { contains: cleanQuery, mode: 'insensitive' } },
            { content: { contains: cleanQuery, mode: 'insensitive' } },
            { tags: { has: cleanQuery.toLowerCase() } },
          ],
        },
        take: limit,
        orderBy: [{ popularity: 'desc' }, { createdAt: 'desc' }],
      });
      for (const item of indexed) {
        if (!results.some((r) => r.entityId === item.entityId)) {
          results.push(item);
        }
      }
    } catch {}

    const hasMore = results.length > limit;
    const paginated = hasMore ? results.slice(0, limit) : results;

    return {
      items: paginated,
      nextCursor: null,
      hasMore,
    };
  }

  async getSuggestions(prefix: string, limit = 5) {
    const clean = prefix.trim();
    if (!clean) return [];

    const suggestions: any[] = [];

    // Check user profiles
    try {
      const UserPrisma = require('../../../../../user-service/src/prisma/client').PrismaClient;
      const userClient = new UserPrisma({ datasources: { db: { url: process.env.USER_DATABASE_URL } } });
      const users = await userClient.userProfile.findMany({
        where: {
          OR: [
            { displayName: { startsWith: clean, mode: 'insensitive' } },
            { username: { startsWith: clean, mode: 'insensitive' } },
          ],
        },
        take: limit,
        select: { userId: true, displayName: true, username: true, avatarUrl: true },
      });
      await userClient.$disconnect();

      for (const u of users) {
        suggestions.push({
          title: u.displayName || u.username,
          entityType: 'USER',
          entityId: u.userId,
          avatarUrl: u.avatarUrl,
        });
      }
    } catch {}

    try {
      const matches = await this.prisma.searchIndex.findMany({
        where: {
          title: { startsWith: clean, mode: 'insensitive' },
        },
        take: limit,
        orderBy: { popularity: 'desc' },
        select: {
          title: true,
          entityType: true,
          entityId: true,
        },
      });
      suggestions.push(...matches);
    } catch {}

    return suggestions.slice(0, limit);
  }
}
