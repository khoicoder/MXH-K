import { Module } from '@nestjs/common';
import { FeedController } from './controllers/feed.controller';
import { FeedService } from './services/feed.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [FeedController],
  providers: [FeedService, PrismaService],
  exports: [FeedService],
})
export class FeedModule {}
