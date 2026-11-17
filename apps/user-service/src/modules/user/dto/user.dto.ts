import { IsString, IsOptional, MaxLength, IsDateString, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfileDto {
  @ApiProperty({ example: 'John Doe', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(60)
  displayName?: string;

  @ApiProperty({ example: 'https://cdn.example.com/avatars/john.jpg', required: false })
  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @ApiProperty({ example: 'https://cdn.example.com/covers/sunset.jpg', required: false })
  @IsOptional()
  @IsString()
  coverUrl?: string;

  @ApiProperty({ example: 'Software engineer passionate about distributed systems.', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(300)
  bio?: string;

  @ApiProperty({ example: 'MALE', enum: ['MALE', 'FEMALE', 'OTHER'], required: false })
  @IsOptional()
  @IsString()
  @IsIn(['MALE', 'FEMALE', 'OTHER'])
  gender?: string;

  @ApiProperty({ example: '1995-05-15', required: false })
  @IsOptional()
  @IsDateString()
  birthdate?: string;
}

export class UpdateSettingsDto {
  @ApiProperty({ example: 'PUBLIC', enum: ['PUBLIC', 'FRIENDS_ONLY', 'PRIVATE'], required: false })
  @IsOptional()
  @IsIn(['PUBLIC', 'FRIENDS_ONLY', 'PRIVATE'])
  postVisibilityDefault?: string;

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  allowFriendRequests?: boolean;

  @ApiProperty({ example: false, required: false })
  @IsOptional()
  isPrivateAccount?: boolean;
}
