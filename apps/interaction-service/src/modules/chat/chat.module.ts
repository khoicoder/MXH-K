import { Module } from '@nestjs/common';
import { ChatController, MessageController } from './controllers/chat.controller';
import { ChatService } from './services/chat.service';
import { ChatGateway } from './gateways/chat.gateway';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [ChatController, MessageController],
  providers: [ChatService, ChatGateway, PrismaService],
  exports: [ChatService, ChatGateway],
})
export class ChatModule {}
