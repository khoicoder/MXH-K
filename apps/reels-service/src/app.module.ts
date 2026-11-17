import { Module } from '@nestjs/common';
import { ReelsModule } from './modules/reels/reels.module';

@Module({
  imports: [ReelsModule],
})
export class AppModule {}
