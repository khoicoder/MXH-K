import { IsString, IsNotEmpty, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNotificationDto {
  @ApiProperty({ example: 'recipient-uuid' })
  @IsString()
  @IsNotEmpty()
  recipientId!: string;

  @ApiProperty({ example: 'actor-uuid' })
  @IsString()
  @IsNotEmpty()
  actorId!: string;

  @ApiProperty({ example: 'POST_REACTION', enum: ['FRIEND_REQ', 'FRIEND_ACCEPT', 'POST_REACTION', 'COMMENT', 'REPLY', 'MENTION'] })
  @IsIn(['FRIEND_REQ', 'FRIEND_ACCEPT', 'POST_REACTION', 'COMMENT', 'REPLY', 'MENTION'])
  type!: string;

  @ApiProperty({ example: 'POST' })
  @IsString()
  @IsNotEmpty()
  targetType!: string;

  @ApiProperty({ example: 'target-uuid' })
  @IsString()
  @IsNotEmpty()
  targetId!: string;

  @ApiProperty({ example: 'Alice reacted LOVE to your post' })
  @IsString()
  @IsNotEmpty()
  summary!: string;
}
