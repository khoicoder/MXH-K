import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Headers,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SocialGraphService } from '../services/social-graph.service';
import { SendFriendRequestDto } from '../dto/social.dto';

@ApiTags('Social Graph')
@Controller()
export class SocialGraphController {
  constructor(private readonly socialService: SocialGraphService) {}

  // --- FRIENDSHIP ---

  @Post('friends/requests')
  @ApiOperation({ summary: 'Send a friend request' })
  async sendFriendRequest(
    @Headers('x-user-id') userId: string,
    @Body() dto: SendFriendRequestDto,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.socialService.sendFriendRequest(userId, dto.targetUserId);
  }

  @Patch('friends/requests/:requestId/accept')
  @ApiOperation({ summary: 'Accept a friend request' })
  async acceptFriendRequest(
    @Headers('x-user-id') userId: string,
    @Param('requestId') requestId: string,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.socialService.acceptFriendRequest(requestId, userId);
  }

  @Patch('friends/requests/:requestId/reject')
  @ApiOperation({ summary: 'Reject a friend request' })
  async rejectFriendRequest(
    @Headers('x-user-id') userId: string,
    @Param('requestId') requestId: string,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.socialService.rejectFriendRequest(requestId, userId);
  }

  @Delete('friends/requests/:requestId')
  @ApiOperation({ summary: 'Cancel a pending sent friend request' })
  async cancelFriendRequest(
    @Headers('x-user-id') userId: string,
    @Param('requestId') requestId: string,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.socialService.cancelFriendRequest(requestId, userId);
  }

  @Delete('friends/:targetUserId')
  @ApiOperation({ summary: 'Remove a friend' })
  async removeFriend(
    @Headers('x-user-id') userId: string,
    @Param('targetUserId') targetUserId: string,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.socialService.removeFriend(userId, targetUserId);
  }

  @Get('friends')
  @ApiOperation({ summary: 'Get list of friends for current user' })
  async getMyFriends(@Headers('x-user-id') userId: string) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.socialService.getFriendsList(userId);
  }

  @Get('friends/requests')
  @ApiOperation({ summary: 'Get pending friend requests (received and sent)' })
  async getPendingRequests(@Headers('x-user-id') userId: string) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.socialService.getPendingRequests(userId);
  }

  @Get('friends/suggestions')
  @ApiOperation({ summary: 'Get discoverable friend suggestions' })
  async getFriendSuggestions(
    @Headers('x-user-id') userId: string,
    @Query('limit') limit?: number,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.socialService.getFriendSuggestions(userId, limit ? Number(limit) : 10);
  }

  // --- FOLLOWS ---

  @Post('follows/:targetUserId')
  @ApiOperation({ summary: 'Follow a user (unidirectional)' })
  async followUser(
    @Headers('x-user-id') userId: string,
    @Param('targetUserId') targetUserId: string,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.socialService.followUser(userId, targetUserId);
  }

  @Delete('follows/:targetUserId')
  @ApiOperation({ summary: 'Unfollow a user' })
  async unfollowUser(
    @Headers('x-user-id') userId: string,
    @Param('targetUserId') targetUserId: string,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.socialService.unfollowUser(userId, targetUserId);
  }

  @Get('follows/:userId/followers')
  @ApiOperation({ summary: 'Get followers of a user' })
  async getFollowers(@Param('userId') userId: string) {
    return this.socialService.getFollowers(userId);
  }

  @Get('follows/:userId/following')
  @ApiOperation({ summary: 'Get following list of a user' })
  async getFollowing(@Param('userId') userId: string) {
    return this.socialService.getFollowing(userId);
  }

  // --- BLOCKS ---

  @Post('blocks/:targetUserId')
  @ApiOperation({ summary: 'Block a user (strictly bidirectional visibility barrier)' })
  async blockUser(
    @Headers('x-user-id') userId: string,
    @Param('targetUserId') targetUserId: string,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.socialService.blockUser(userId, targetUserId);
  }

  @Delete('blocks/:targetUserId')
  @ApiOperation({ summary: 'Unblock a user' })
  async unblockUser(
    @Headers('x-user-id') userId: string,
    @Param('targetUserId') targetUserId: string,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.socialService.unblockUser(userId, targetUserId);
  }

  @Get('blocks')
  @ApiOperation({ summary: 'Get list of users blocked by current user' })
  async getBlockedUsers(@Headers('x-user-id') userId: string) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.socialService.getBlockedUsers(userId);
  }

  // --- RELATIONSHIP EVALUATION ---

  @Get('social/relationship/:targetUserId')
  @ApiOperation({ summary: 'Evaluate complete relationship status between current user and target user' })
  async getRelationship(
    @Headers('x-user-id') userId: string,
    @Param('targetUserId') targetUserId: string,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.socialService.getRelationship(userId, targetUserId);
  }
}
