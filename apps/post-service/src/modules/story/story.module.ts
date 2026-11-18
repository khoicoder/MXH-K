import { Module } from '@nestjs/common';
import { StoryController } from './controllers/story.controller';
import { StoryService } from './services/story.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [StoryController],
  providers: [StoryService, PrismaService],
  exports: [StoryService],
})
export class StoryModule {}
