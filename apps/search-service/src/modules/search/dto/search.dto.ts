import { IsString, IsNotEmpty, IsOptional, IsIn, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class IndexEntityDto {
  @ApiProperty({ example: 'USER', enum: ['USER', 'POST', 'HASHTAG'] })
  @IsIn(['USER', 'POST', 'HASHTAG'])
  entityType!: string;

  @ApiProperty({ example: 'target-uuid' })
  @IsString()
  @IsNotEmpty()
  entityId!: string;

  @ApiProperty({ example: 'Alice Smith' })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({ example: 'Software engineer and architect', required: false })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiProperty({ example: ['tech', 'cloud'], required: false })
  @IsOptional()
  tags?: string[];

  @ApiProperty({ example: 100.0, required: false })
  @IsOptional()
  @IsNumber()
  popularity?: number;
}
