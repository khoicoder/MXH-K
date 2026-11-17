import { Module } from '@nestjs/common';
import { InteractionController } from './controllers/interaction.controller';
import { InteractionService } from './services/interaction.service';
import { InteractionGateway } from './gateways/interaction.gateway';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [InteractionController],
  providers: [InteractionService, InteractionGateway, PrismaService],
  exports: [InteractionService, InteractionGateway],
})
export class InteractionModule {}
