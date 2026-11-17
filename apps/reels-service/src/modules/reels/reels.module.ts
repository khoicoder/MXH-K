import { Module } from '@nestjs/common';
import { ReelsController } from './controllers/reels.controller';
import { ReelsService } from './services/reels.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [ReelsController],
  providers: [ReelsService, PrismaService],
  exports: [ReelsService],
})
export class ReelsModule {}
