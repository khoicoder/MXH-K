import { Module } from '@nestjs/common';
import { FeedModule } from './modules/feed/feed.module';

@Module({
  imports: [FeedModule],
})
export class AppModule {}
