import { IsString, IsNotEmpty, IsOptional, IsEnum, IsArray, ValidateNested, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export enum MessageTypeDto {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  FILE = 'FILE',
  SYSTEM = 'SYSTEM',
}

export class AttachmentDto {
  @IsString()
  @IsNotEmpty()
  fileName!: string;

  @IsOptional()
  @IsString()
  fileKey?: string;

  @IsString()
  @IsNotEmpty()
  mimeType!: string;

  @IsInt()
  size!: number;

  @IsString()
  @IsNotEmpty()
  url!: string;
}

export class CreateDirectConversationDto {
  @IsString()
  @IsNotEmpty()
  targetUserId!: string;
}

export class SendMessageDto {
  @IsString()
  @IsNotEmpty()
  conversationId!: string;

  @IsOptional()
  @IsString()
  clientMessageId?: string;

  @IsString()
  @IsNotEmpty()
  content!: string;

  @IsOptional()
  @IsEnum(MessageTypeDto)
  type?: MessageTypeDto = MessageTypeDto.TEXT;

  @IsOptional()
  @IsString()
  replyToMessageId?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AttachmentDto)
  attachments?: AttachmentDto[];
}

export class MarkReadDto {
  @IsString()
  @IsNotEmpty()
  conversationId!: string;
}

export class GetMessagesQueryDto {
  @IsOptional()
  @IsString()
  cursor?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  @Type(() => Number)
  limit?: number = 30;
}
