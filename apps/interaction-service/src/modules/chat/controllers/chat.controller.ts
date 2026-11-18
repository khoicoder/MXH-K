import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Query,
  Req,
  Headers,
  HttpCode,
  HttpStatus,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { ChatService } from '../services/chat.service';
import { CreateDirectConversationDto, SendMessageDto, GetMessagesQueryDto } from '../dto/chat.dto';

@Controller('conversations')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  private extractUserId(req: any, headerUserId?: string): string {
    const userId = headerUserId || req.user?.id || req.user?.sub;
    if (!userId) {
      throw new UnauthorizedException('Bạn cần đăng nhập tài khoản để sử dụng chức năng chat');
    }
    return userId;
  }

  @Get()
  async getConversations(@Req() req: any, @Headers('x-user-id') headerUserId?: string) {
    const userId = this.extractUserId(req, headerUserId);
    return this.chatService.getUserConversations(userId);
  }

  @Get('unread-count')
  async getUnreadCount(@Req() req: any, @Headers('x-user-id') headerUserId?: string) {
    const userId = this.extractUserId(req, headerUserId);
    const count = await this.chatService.getTotalUnreadCount(userId);
    return { unreadCount: count };
  }

  @Post('direct')
  async createDirectConversation(
    @Req() req: any,
    @Headers('x-user-id') headerUserId: string | undefined,
    @Body() dto: CreateDirectConversationDto,
  ) {
    const userId = this.extractUserId(req, headerUserId);
    return this.chatService.getOrCreateDirectConversation(userId, dto);
  }

  @Get(':id')
  async getConversationById(
    @Req() req: any,
    @Headers('x-user-id') headerUserId: string | undefined,
    @Param('id') id: string,
  ) {
    const userId = this.extractUserId(req, headerUserId);
    return this.chatService.getConversationById(id, userId);
  }

  @Get(':id/messages')
  async getMessages(
    @Req() req: any,
    @Headers('x-user-id') headerUserId: string | undefined,
    @Param('id') id: string,
    @Query() query: GetMessagesQueryDto,
  ) {
    const userId = this.extractUserId(req, headerUserId);
    const limit = query.limit ? Number(query.limit) : 30;
    return this.chatService.getMessages(id, userId, query.cursor, limit);
  }

  @Post(':id/messages')
  async sendMessage(
    @Req() req: any,
    @Headers('x-user-id') headerUserId: string | undefined,
    @Param('id') id: string,
    @Body() body: any,
  ) {
    const userId = this.extractUserId(req, headerUserId);
    const dto: SendMessageDto = {
      conversationId: id,
      clientMessageId: body.clientMessageId,
      content: body.content,
      type: body.type,
      replyToMessageId: body.replyToMessageId,
      attachments: body.attachments,
    };
    return this.chatService.sendMessage(userId, dto);
  }

  @Post(':id/read')
  @HttpCode(HttpStatus.OK)
  async markRead(
    @Req() req: any,
    @Headers('x-user-id') headerUserId: string | undefined,
    @Param('id') id: string,
  ) {
    const userId = this.extractUserId(req, headerUserId);
    return this.chatService.markAsRead(id, userId);
  }
}

@Controller('messages')
export class MessageController {
  constructor(private readonly chatService: ChatService) {}

  private extractUserId(req: any, headerUserId?: string): string {
    const userId = headerUserId || req.user?.id || req.user?.sub;
    if (!userId) {
      throw new UnauthorizedException('Bạn cần đăng nhập tài khoản để sử dụng chức năng chat');
    }
    return userId;
  }

  @Delete(':id/recall')
  async recallMessage(
    @Req() req: any,
    @Headers('x-user-id') headerUserId: string | undefined,
    @Param('id') id: string,
  ) {
    const userId = this.extractUserId(req, headerUserId);
    return this.chatService.recallMessage(id, userId);
  }

  @Delete(':id')
  async deleteMessageForMe(
    @Req() req: any,
    @Headers('x-user-id') headerUserId: string | undefined,
    @Param('id') id: string,
  ) {
    const userId = this.extractUserId(req, headerUserId);
    return this.chatService.deleteMessageForMe(id, userId);
  }
}
