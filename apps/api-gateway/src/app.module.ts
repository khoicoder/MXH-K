import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

// Import all domain modules for unified gateway & routing
import { AuthModule } from '../../auth-service/src/modules/auth/auth.module';
import { UserModule } from '../../user-service/src/modules/user/user.module';
import { SocialGraphModule } from '../../social-graph-service/src/modules/social/social-graph.module';
import { PostModule } from '../../post-service/src/modules/post/post.module';
import { StoryModule } from '../../post-service/src/modules/story/story.module';
import { InteractionModule } from '../../interaction-service/src/modules/interaction/interaction.module';
import { ChatModule } from '../../interaction-service/src/modules/chat/chat.module';
import { FeedModule } from '../../feed-service/src/modules/feed/feed.module';
import { MediaModule } from '../../media-service/src/modules/media/media.module';
import { ReelsModule } from '../../reels-service/src/modules/reels/reels.module';
import { NotificationModule } from '../../notification-service/src/modules/notification/notification.module';
import { SearchModule } from '../../search-service/src/modules/search/search.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    SocialGraphModule,
    PostModule,
    StoryModule,
    InteractionModule,
    ChatModule,
    FeedModule,
    MediaModule,
    ReelsModule,
    NotificationModule,
    SearchModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
