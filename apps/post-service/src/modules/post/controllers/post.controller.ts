import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PostService } from '../services/post.service';
import { CreatePostDto, UpdatePostDto } from '../dto/post.dto';

@ApiTags('Posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new rich post with media and hashtags' })
  async createPost(
    @Headers('x-user-id') userId: string,
    @Body() dto: CreatePostDto,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.postService.createPost(userId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get public posts feed with cursor pagination' })
  async getPublicPosts(
    @Query('limit') limit?: number,
    @Query('cursor') cursor?: string,
  ) {
    return this.postService.getPublicPosts(limit ? Number(limit) : 20, cursor);
  }

  @Get('saved')
  @ApiOperation({ summary: 'Get saved bookmark posts with cursor pagination' })
  async getSavedPosts(
    @Headers('x-user-id') userId: string,
    @Query('limit') limit?: number,
    @Query('cursor') cursor?: string,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.postService.getSavedPosts(userId, limit ? Number(limit) : 20, cursor);
  }

  @Get('user/:authorId')
  @ApiOperation({ summary: 'Get posts published by a user with cursor pagination' })
  async getUserPosts(
    @Param('authorId') authorId: string,
    @Query('limit') limit?: number,
    @Query('cursor') cursor?: string,
  ) {
    return this.postService.getUserPosts(authorId, limit ? Number(limit) : 20, cursor);
  }

  @Get(':postId')
  @ApiOperation({ summary: 'Get post by ID' })
  async getPostById(
    @Param('postId') postId: string,
    @Headers('x-user-id') userId?: string,
  ) {
    return this.postService.getPostById(postId, userId);
  }

  @Patch(':postId')
  @ApiOperation({ summary: 'Edit post content or visibility' })
  async updatePost(
    @Param('postId') postId: string,
    @Headers('x-user-id') userId: string,
    @Body() dto: UpdatePostDto,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.postService.updatePost(postId, userId, dto);
  }

  @Delete(':postId')
  @ApiOperation({ summary: 'Soft delete a post' })
  async deletePost(
    @Param('postId') postId: string,
    @Headers('x-user-id') userId: string,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.postService.deletePost(postId, userId);
  }

  @Post(':postId/pin')
  @ApiOperation({ summary: 'Toggle pinned state of a post' })
  async togglePin(
    @Param('postId') postId: string,
    @Headers('x-user-id') userId: string,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.postService.togglePinPost(postId, userId);
  }

  @Post(':postId/save')
  @ApiOperation({ summary: 'Save or bookmark a post' })
  async toggleSave(
    @Param('postId') postId: string,
    @Headers('x-user-id') userId: string,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.postService.toggleSavePost(postId, userId);
  }
}
