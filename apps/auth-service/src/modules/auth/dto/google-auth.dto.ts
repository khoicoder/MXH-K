import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GoogleAuthDto {
  @ApiProperty({ description: 'Google OAuth authorization code', required: false })
  @IsOptional()
  @IsString()
  code?: string;

  @ApiProperty({ description: 'Google ID token (JWT from Google Sign-In button)', required: false })
  @IsOptional()
  @IsString()
  idToken?: string;

  @ApiProperty({ description: 'Redirect URI used during OAuth authorization code flow', required: false })
  @IsOptional()
  @IsString()
  redirectUri?: string;

  @ApiProperty({ example: 'device-uuid-1234', required: false })
  @IsOptional()
  @IsString()
  deviceId?: string;

  @ApiProperty({ example: 'Chrome on MacOS / Windows', required: false })
  @IsOptional()
  @IsString()
  deviceName?: string;
}
