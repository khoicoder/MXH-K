import { IsEnum, IsOptional, IsString, IsArray, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum StoryTypeDto {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  TEXT = 'TEXT',
}

export enum StoryVisibilityDto {
  PUBLIC = 'PUBLIC',
  FRIENDS = 'FRIENDS',
  FRIENDS_EXCEPT = 'FRIENDS_EXCEPT',
  CLOSE_FRIENDS = 'CLOSE_FRIENDS',
  ONLY_ME = 'ONLY_ME',
  CUSTOM = 'CUSTOM',
}

export class CreateStoryDto {
  @ApiProperty({ enum: StoryTypeDto, default: StoryTypeDto.IMAGE })
  @IsEnum(StoryTypeDto)
  type!: StoryTypeDto;

  @ApiPropertyOptional({ description: 'Text caption for media story or main text for text story' })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  content?: string;

  @ApiPropertyOptional({ description: 'Public URL of uploaded media (image or video)' })
  @IsOptional()
  @IsString()
  mediaUrl?: string;

  @ApiPropertyOptional({ description: 'Background hex color for text story, e.g. #1877F2' })
  @IsOptional()
  @IsString()
  backgroundColor?: string;

  @ApiPropertyOptional({ description: 'Font style or layout identifier' })
  @IsOptional()
  @IsString()
  fontStyle?: string;

  @ApiPropertyOptional({ enum: StoryVisibilityDto, default: StoryVisibilityDto.PUBLIC })
  @IsOptional()
  @IsEnum(StoryVisibilityDto)
  visibility?: StoryVisibilityDto;

  @ApiPropertyOptional({ description: 'List of target user IDs for FRIENDS_EXCEPT or CUSTOM', type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  targetUserIds?: string[];
}

export class StoryReactionDto {
  @ApiProperty({ description: 'Reaction type: LIKE, LOVE, HAHA, WOW, SAD, ANGRY', example: 'LOVE' })
  @IsString()
  reactionType!: string;
}
