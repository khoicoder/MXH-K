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
import { InteractionService } from '../services/interaction.service';
import { SetReactionDto, CreateCommentDto, UpdateCommentDto, CreateReportDto } from '../dto/interaction.dto';

@ApiTags('Interactions')
@Controller()
export class InteractionController {
  constructor(private readonly interactionService: InteractionService) {}

  // --- REACTIONS ---

  @Post('reactions')
  @ApiOperation({ summary: 'Set or toggle emotional reaction on Post, Comment, or Reel' })
  async setReaction(
    @Headers('x-user-id') userId: string,
    @Body() dto: SetReactionDto,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.interactionService.setReaction(userId, dto);
  }

  @Delete('reactions/:targetType/:targetId')
  @ApiOperation({ summary: 'Remove reaction from an entity' })
  async removeReaction(
    @Headers('x-user-id') userId: string,
    @Param('targetType') targetType: string,
    @Param('targetId') targetId: string,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.interactionService.removeReaction(userId, targetType, targetId);
  }

  @Get('reactions/:targetType/:targetId')
  @ApiOperation({ summary: 'Get reaction counts and user current reaction for an entity' })
  async getReactions(
    @Param('targetType') targetType: string,
    @Param('targetId') targetId: string,
    @Headers('x-user-id') userId?: string,
  ) {
    return this.interactionService.getReactionSummary(targetType, targetId, userId);
  }

  // --- COMMENTS ---

  @Post('comments')
  @ApiOperation({ summary: 'Post a comment or reply to an existing comment' })
  async createComment(
    @Headers('x-user-id') userId: string,
    @Body() dto: CreateCommentDto,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.interactionService.createComment(userId, dto);
  }

  @Get('comments/post/:postId')
  @ApiOperation({ summary: 'Get threaded comments for a post' })
  async getPostComments(
    @Param('postId') postId: string,
    @Query('limit') limit?: number,
    @Query('cursor') cursor?: string,
  ) {
    return this.interactionService.getPostComments(postId, limit ? Number(limit) : 50, cursor);
  }

  @Patch('comments/:commentId')
  @ApiOperation({ summary: 'Edit an existing comment' })
  async updateComment(
    @Headers('x-user-id') userId: string,
    @Param('commentId') commentId: string,
    @Body() dto: UpdateCommentDto,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.interactionService.updateComment(commentId, userId, dto);
  }

  @Delete('comments/:commentId')
  @ApiOperation({ summary: 'Soft delete a comment' })
  async deleteComment(
    @Headers('x-user-id') userId: string,
    @Param('commentId') commentId: string,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.interactionService.deleteComment(commentId, userId);
  }

  // --- REPORTS ---

  @Post('reports')
  @ApiOperation({ summary: 'Report inappropriate post, comment, or user profile' })
  async createReport(
    @Headers('x-user-id') userId: string,
    @Body() dto: CreateReportDto,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.interactionService.createReport(userId, dto);
  }
}
