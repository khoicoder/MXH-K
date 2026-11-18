import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { FeedService } from '../services/feed.service';

@ApiTags('Feed')
@Controller('feed')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get()
  @ApiOperation({ summary: 'Get personalized or public news feed with cursor pagination' })
  async getFeed(
    @Headers('x-user-id') userId: string,
    @Query('limit') limit?: number,
    @Query('cursor') cursor?: string,
  ) {
    return this.feedService.getUserFeed(userId || '', limit ? Number(limit) : 20, cursor);
  }

  @Get('explore')
  @ApiOperation({ summary: 'Get global trending content for explore discovery tab' })
  async getExplore(
    @Query('limit') limit?: number,
    @Query('cursor') cursor?: string,
  ) {
    return this.feedService.getExploreFeed(limit ? Number(limit) : 20, cursor);
  }

  @Post('hide/:postId')
  @ApiOperation({ summary: 'Hide a post from personalized feed' })
  async hidePost(
    @Headers('x-user-id') userId: string,
    @Param('postId') postId: string,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.feedService.hidePost(userId, postId);
  }
}
