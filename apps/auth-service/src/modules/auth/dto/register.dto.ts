import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail({}, { message: 'Invalid email address format' })
  @IsNotEmpty()
  email!: string;

  @ApiProperty({ example: 'SecurePassword123!', minLength: 8 })
  @IsString()
  @MinLength(8, { message: 'Password must contain at least 8 characters' })
  password!: string;

  @ApiProperty({ example: 'johndoe', required: false })
  @IsString()
  username?: string;

  @ApiProperty({ example: 'Nguyễn Văn A', required: false })
  @IsString()
  displayName?: string;
}
