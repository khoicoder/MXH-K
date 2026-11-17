import { IsString, IsNotEmpty, IsOptional, IsInt, Min, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReelDto {
  @ApiProperty({ example: 'My first short video! #viral #fyp' })
  @IsString()
  @IsNotEmpty()
  caption!: string;

  @ApiProperty({ example: 'https://cdn.example.com/videos/reel1.mp4' })
  @IsString()
  @IsNotEmpty()
  videoUrl!: string;

  @ApiProperty({ example: 'https://cdn.example.com/thumbnails/thumb1.jpg', required: false })
  @IsOptional()
  @IsString()
  thumbnailUrl?: string;

  @ApiProperty({ example: 15, description: 'Duration in seconds' })
  @IsInt()
  @Min(1)
  durationSec!: number;
}

export class TrackReelViewDto {
  @ApiProperty({ example: 12, description: 'Watch duration in seconds' })
  @IsInt()
  @Min(1)
  watchDurationSec!: number;

  @ApiProperty({ example: true, description: 'Whether the video was watched to completion' })
  @IsBoolean()
  completed!: boolean;
}
