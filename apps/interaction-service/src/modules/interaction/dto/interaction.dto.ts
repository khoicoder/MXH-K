import { IsString, IsNotEmpty, IsIn, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SetReactionDto {
  @ApiProperty({ example: 'POST', enum: ['POST', 'COMMENT', 'REEL'] })
  @IsIn(['POST', 'COMMENT', 'REEL'])
  targetType!: string;

  @ApiProperty({ example: 'target-id-uuid' })
  @IsString()
  @IsNotEmpty()
  targetId!: string;

  @ApiProperty({ example: 'LIKE', enum: ['LIKE', 'LOVE', 'HAHA', 'WOW', 'SAD', 'ANGRY'] })
  @IsIn(['LIKE', 'LOVE', 'HAHA', 'WOW', 'SAD', 'ANGRY'])
  reactionType!: 'LIKE' | 'LOVE' | 'HAHA' | 'WOW' | 'SAD' | 'ANGRY';
}

export class CreateCommentDto {
  @ApiProperty({ example: 'target-post-uuid' })
  @IsString()
  @IsNotEmpty()
  postId!: string;

  @ApiProperty({ example: 'Great progress on the architecture!', maxLength: 1000 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  content!: string;

  @ApiProperty({ example: 'parent-comment-uuid', required: false })
  @IsOptional()
  @IsString()
  parentCommentId?: string;
}

export class UpdateCommentDto {
  @ApiProperty({ example: 'Updated comment text', maxLength: 1000 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  content!: string;
}

export class CreateReportDto {
  @ApiProperty({ example: 'POST', enum: ['POST', 'COMMENT', 'USER'] })
  @IsIn(['POST', 'COMMENT', 'USER'])
  targetType!: string;

  @ApiProperty({ example: 'target-id-uuid' })
  @IsString()
  @IsNotEmpty()
  targetId!: string;

  @ApiProperty({ example: 'Hate speech or harassment' })
  @IsString()
  @IsNotEmpty()
  reason!: string;
}
