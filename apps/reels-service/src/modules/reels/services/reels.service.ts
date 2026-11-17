import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateReelDto, TrackReelViewDto } from '../dto/reels.dto';

@Injectable()
export class ReelsService {
  private readonly logger = new Logger(ReelsService.name);

  constructor(private readonly prisma: PrismaService) {}

  async createReel(creatorId: string, dto: CreateReelDto) {
    const reel = await this.prisma.reel.create({
      data: {
        creatorId,
        caption: dto.caption,
        videoUrl: dto.videoUrl,
        thumbnailUrl: dto.thumbnailUrl,
        durationSec: dto.durationSec,
      },
    });

    this.logger.log(`Created new short video reel: ${reel.id} by creator ${creatorId}`);
    return reel;
  }

  async getReelsFeed(limit = 10, cursor?: string) {
    const items = await this.prisma.reel.findMany({
      where: { deletedAt: null },
      take: limit + 1,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      orderBy: [
        { viewsCount: 'desc' },
        { createdAt: 'desc' },
      ],
    });

    const hasMore = items.length > limit;
    const paginated = hasMore ? items.slice(0, limit) : items;
    const nextCursor = hasMore ? paginated[paginated.length - 1]?.id : null;

    return {
      items: paginated,
      nextCursor,
      hasMore,
    };
  }

  async recordView(reelId: string, viewerId: string, dto: TrackReelViewDto) {
    const reel = await this.prisma.reel.findUnique({ where: { id: reelId } });
    if (!reel) throw new NotFoundException('Reel not found');

    return this.prisma.$transaction(async (tx) => {
      const view = await tx.reelView.create({
        data: {
          reelId,
          viewerId,
          watchDurationSec: dto.watchDurationSec,
          completed: dto.completed,
        },
      });

      await tx.reel.update({
        where: { id: reelId },
        data: { viewsCount: { increment: 1 } },
      });

      return view;
    });
  }

  async toggleBookmark(reelId: string, userId: string) {
    const existing = await this.prisma.reelBookmark.findUnique({
      where: { userId_reelId: { userId, reelId } },
    });

    if (existing) {
      await this.prisma.reelBookmark.delete({ where: { id: existing.id } });
      return { bookmarked: false, message: 'Removed from bookmarks' };
    } else {
      await this.prisma.reelBookmark.create({ data: { userId, reelId } });
      return { bookmarked: true, message: 'Saved to bookmarks' };
    }
  }

  async getUserReels(creatorId: string) {
    return this.prisma.reel.findMany({
      where: { creatorId, deletedAt: null },
      orderBy: { createdAt: 'desc' },
    });
  }
}
