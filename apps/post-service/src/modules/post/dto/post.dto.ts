import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsIn,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PostMediaInputDto {
  @ApiProperty({ example: 'media-uuid-1234' })
  @IsString()
  @IsNotEmpty()
  mediaId!: string;

  @ApiProperty({ example: 'IMAGE', enum: ['IMAGE', 'VIDEO'] })
  @IsIn(['IMAGE', 'VIDEO'])
  mediaType!: string;

  @ApiProperty({ example: 'https://cdn.example.com/posts/img1.jpg' })
  @IsString()
  @IsNotEmpty()
  url!: string;
}

export class CreatePostDto {
  @ApiProperty({ example: 'Building a microservices social network with NestJS and Next.js! #coding #tech' })
  @IsString()
  @IsNotEmpty()
  content!: string;

  @ApiProperty({ example: 'PUBLIC', enum: ['PUBLIC', 'FRIENDS_ONLY', 'PRIVATE'], required: false })
  @IsOptional()
  @IsIn(['PUBLIC', 'FRIENDS_ONLY', 'PRIVATE'])
  visibility?: 'PUBLIC' | 'FRIENDS_ONLY' | 'PRIVATE';

  @ApiProperty({ example: 'original-post-uuid', required: false })
  @IsOptional()
  @IsString()
  sharedPostId?: string;

  @ApiProperty({ type: [PostMediaInputDto], required: false })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PostMediaInputDto)
  media?: PostMediaInputDto[];
}

export class UpdatePostDto {
  @ApiProperty({ example: 'Updated post content #update' })
  @IsString()
  @IsNotEmpty()
  content!: string;

  @ApiProperty({ example: 'PUBLIC', enum: ['PUBLIC', 'FRIENDS_ONLY', 'PRIVATE'], required: false })
  @IsOptional()
  @IsIn(['PUBLIC', 'FRIENDS_ONLY', 'PRIVATE'])
  visibility?: 'PUBLIC' | 'FRIENDS_ONLY' | 'PRIVATE';
}
