import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  Query,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { NotificationService } from '../services/notification.service';
import { CreateNotificationDto } from '../dto/notification.dto';

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationController {
  constructor(private readonly notifService: NotificationService) {}

  @Post()
  @ApiOperation({ summary: 'Internal service notification dispatcher' })
  async createNotification(@Body() dto: CreateNotificationDto) {
    return this.notifService.createNotification(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get notifications for current user with cursor pagination' })
  async getNotifications(
    @Headers('x-user-id') userId: string,
    @Query('limit') limit?: number,
    @Query('cursor') cursor?: string,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.notifService.getUserNotifications(userId, limit ? Number(limit) : 20, cursor);
  }

  @Get('unread-count')
  @ApiOperation({ summary: 'Get badge count of unread notifications' })
  async getUnreadCount(@Headers('x-user-id') userId: string) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.notifService.getUnreadCount(userId);
  }

  @Patch(':notificationId/read')
  @ApiOperation({ summary: 'Mark specific notification as read' })
  async markRead(
    @Headers('x-user-id') userId: string,
    @Param('notificationId') notificationId: string,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.notifService.markAsRead(notificationId, userId);
  }

  @Patch('read-all')
  @ApiOperation({ summary: 'Mark all notifications as read for current user' })
  async markAllRead(@Headers('x-user-id') userId: string) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.notifService.markAllAsRead(userId);
  }
}
