import { Module } from '@nestjs/common';
import { SocialGraphController } from './controllers/social-graph.controller';
import { SocialGraphService } from './services/social-graph.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [SocialGraphController],
  providers: [SocialGraphService, PrismaService],
  exports: [SocialGraphService],
})
export class SocialGraphModule {}
