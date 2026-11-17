import {
  Controller,
  Get,
  Patch,
  Post,
  Body,
  Param,
  Headers,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserService } from '../services/user.service';
import { UpdateProfileDto, UpdateSettingsDto } from '../dto/user.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @ApiOperation({ summary: 'Get current authenticated user profile and settings' })
  async getMyProfile(@Headers('x-user-id') userId: string) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.userService.getOrCreateProfile(userId);
  }

  @Patch('me')
  @ApiOperation({ summary: 'Update current authenticated user profile' })
  async updateMyProfile(
    @Headers('x-user-id') userId: string,
    @Body() dto: UpdateProfileDto,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.userService.updateProfile(userId, dto);
  }

  @Patch('me/settings')
  @ApiOperation({ summary: 'Update user privacy and preference settings' })
  async updateMySettings(
    @Headers('x-user-id') userId: string,
    @Body() dto: UpdateSettingsDto,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.userService.updateSettings(userId, dto);
  }

  @Post('batch')
  @ApiOperation({ summary: 'Internal service batch retrieval of public user cards' })
  async getBatchUsers(@Body('userIds') userIds: string[]) {
    return this.userService.getBatchUsers(userIds);
  }

  @Get(':userId/profile')
  @ApiOperation({ summary: 'Get public profile for a specific user' })
  async getUserProfile(@Param('userId') userId: string) {
    return this.userService.getProfile(userId);
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Get user by ID' })
  async getUser(@Param('userId') userId: string) {
    return this.userService.getProfile(userId);
  }
}
