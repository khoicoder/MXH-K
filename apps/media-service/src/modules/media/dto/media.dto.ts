import { IsString, IsNotEmpty, IsInt, Min, Max, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'video/mp4',
  'video/quicktime',
  'video/webm',
];

export class RequestUploadDto {
  @ApiProperty({ example: 'photo.jpg' })
  @IsString()
  @IsNotEmpty()
  filename!: string;

  @ApiProperty({ example: 'image/jpeg', enum: ALLOWED_MIME_TYPES })
  @IsString()
  @IsIn(ALLOWED_MIME_TYPES, { message: 'Unsupported file type. Only JPEG, PNG, WEBP, GIF, MP4, WEBM allowed.' })
  mimeType!: string;

  @ApiProperty({ example: 1048576, description: 'File size in bytes (max 100MB)' })
  @IsInt()
  @Min(1)
  @Max(104857600, { message: 'File size exceeds maximum allowable limit of 100MB' })
  sizeBytes!: number;
}

export class ConfirmUploadDto {
  @ApiProperty({ example: 'media-file-uuid' })
  @IsString()
  @IsNotEmpty()
  mediaId!: string;
}
