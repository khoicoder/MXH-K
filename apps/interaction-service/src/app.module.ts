import { Module } from '@nestjs/common';
import { InteractionModule } from './modules/interaction/interaction.module';

@Module({
  imports: [InteractionModule],
})
export class AppModule {}
