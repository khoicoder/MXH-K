import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ReelsService } from '../services/reels.service';
import { CreateReelDto, TrackReelViewDto } from '../dto/reels.dto';

@ApiTags('Reels')
@Controller('reels')
export class ReelsController {
  constructor(private readonly reelsService: ReelsService) {}

  @Post()
  @ApiOperation({ summary: 'Upload and publish short-form vertical video' })
  async createReel(
    @Headers('x-user-id') userId: string,
    @Body() dto: CreateReelDto,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.reelsService.createReel(userId, dto);
  }

  @Get('feed')
  @ApiOperation({ summary: 'Infinite vertical video feed with cursor pagination' })
  async getFeed(
    @Query('limit') limit?: number,
    @Query('cursor') cursor?: string,
  ) {
    return this.reelsService.getReelsFeed(limit ? Number(limit) : 10, cursor);
  }

  @Post(':reelId/views')
  @ApiOperation({ summary: 'Track video view duration and completion status' })
  async recordView(
    @Param('reelId') reelId: string,
    @Headers('x-user-id') userId: string,
    @Body() dto: TrackReelViewDto,
  ) {
    const viewer = userId || 'anonymous';
    return this.reelsService.recordView(reelId, viewer, dto);
  }

  @Post(':reelId/bookmark')
  @ApiOperation({ summary: 'Bookmark a reel' })
  async toggleBookmark(
    @Param('reelId') reelId: string,
    @Headers('x-user-id') userId: string,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.reelsService.toggleBookmark(reelId, userId);
  }

  @Get('creator/:creatorId')
  @ApiOperation({ summary: 'Get all reels published by creator' })
  async getCreatorReels(@Param('creatorId') creatorId: string) {
    return this.reelsService.getUserReels(creatorId);
  }
}
