import { Module } from '@nestjs/common';
import { SocialGraphModule } from './modules/social/social-graph.module';

@Module({
  imports: [SocialGraphModule],
})
export class AppModule {}
