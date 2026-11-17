import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendFriendRequestDto {
  @ApiProperty({ example: 'target-user-uuid' })
  @IsString()
  @IsNotEmpty()
  targetUserId!: string;
}

export class RelationshipStatusDto {
  targetUserId!: string;
  isFriend!: boolean;
  isFollowing!: boolean;
  isFollowedBy!: boolean;
  isBlockedByMe!: boolean;
  isBlockedByThem!: boolean;
  friendRequestStatus?: 'PENDING_SENT' | 'PENDING_RECEIVED' | 'NONE';
  requestId?: string;
}
