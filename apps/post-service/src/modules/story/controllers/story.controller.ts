import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Headers,
  Req,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { StoryService } from '../services/story.service';
import { CreateStoryDto, StoryReactionDto } from '../dto/story.dto';
import { Request } from 'express';

@ApiTags('Stories')
@Controller('stories')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Story (Image, Video, or Text) with Privacy' })
  async createStory(
    @Headers('x-user-id') userId: string,
    @Body() dto: CreateStoryDto,
  ) {
    if (!userId) {
      throw new UnauthorizedException('Vui lòng đăng nhập để đăng tin');
    }
    return this.storyService.createStory(userId, dto);
  }

  @Get('feed')
  @ApiOperation({ summary: 'Get active stories feed grouped by author with privacy and view status' })
  async getStoryFeed(@Req() req: Request) {
    const viewerId = req.headers['x-user-id'] as string | undefined;
    return this.storyService.getStoryFeed(viewerId);
  }

  @Get('close-friends')
  @ApiOperation({ summary: 'Get user close friends list' })
  async getCloseFriends(@Headers('x-user-id') userId: string) {
    if (!userId) {
      throw new UnauthorizedException('Vui lòng đăng nhập');
    }
    return this.storyService.getCloseFriends(userId);
  }

  @Post('close-friends/:friendId')
  @ApiOperation({ summary: 'Add a user to close friends' })
  async addCloseFriend(
    @Headers('x-user-id') userId: string,
    @Param('friendId') friendId: string,
  ) {
    if (!userId) {
      throw new UnauthorizedException('Vui lòng đăng nhập');
    }
    return this.storyService.addCloseFriend(userId, friendId);
  }

  @Delete('close-friends/:friendId')
  @ApiOperation({ summary: 'Remove a user from close friends' })
  async removeCloseFriend(
    @Headers('x-user-id') userId: string,
    @Param('friendId') friendId: string,
  ) {
    if (!userId) {
      throw new UnauthorizedException('Vui lòng đăng nhập');
    }
    return this.storyService.removeCloseFriend(userId, friendId);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get active stories for a specific user' })
  async getUserActiveStories(
    @Param('userId') targetUserId: string,
    @Req() req: Request,
  ) {
    const viewerId = req.headers['x-user-id'] as string | undefined;
    return this.storyService.getUserActiveStories(targetUserId, viewerId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get detailed story by ID with privacy authorization' })
  async getStoryById(
    @Param('id') storyId: string,
    @Req() req: Request,
  ) {
    const viewerId = req.headers['x-user-id'] as string | undefined;
    return this.storyService.getStoryById(storyId, viewerId);
  }

  @Post(':id/view')
  @ApiOperation({ summary: 'Mark story as viewed by current user' })
  async markStoryViewed(
    @Param('id') storyId: string,
    @Headers('x-user-id') userId: string,
  ) {
    if (!userId) {
      throw new UnauthorizedException('Vui lòng đăng nhập để ghi nhận lượt xem');
    }
    return this.storyService.markStoryViewed(storyId, userId);
  }

  @Get(':id/viewers')
  @ApiOperation({ summary: 'Get list of viewers for story (Story owner only)' })
  async getStoryViewers(
    @Param('id') storyId: string,
    @Headers('x-user-id') userId: string,
  ) {
    if (!userId) {
      throw new UnauthorizedException('Vui lòng đăng nhập');
    }
    return this.storyService.getStoryViewers(storyId, userId);
  }

  @Post(':id/reactions')
  @ApiOperation({ summary: 'React to a story with an emotion' })
  async reactToStory(
    @Param('id') storyId: string,
    @Headers('x-user-id') userId: string,
    @Body() dto: StoryReactionDto,
  ) {
    if (!userId) {
      throw new UnauthorizedException('Vui lòng đăng nhập');
    }
    if (!dto.reactionType) {
      throw new BadRequestException('Vui lòng chọn loại cảm xúc');
    }
    return this.storyService.reactToStory(storyId, userId, dto.reactionType);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a story (Author only)' })
  async deleteStory(
    @Param('id') storyId: string,
    @Headers('x-user-id') userId: string,
  ) {
    if (!userId) {
      throw new UnauthorizedException('Vui lòng đăng nhập');
    }
    return this.storyService.deleteStory(storyId, userId);
  }
}
