import { PrismaClient as FeedPrismaClient } from '../apps/feed-service/src/prisma/client';
import { PrismaClient as ReelsPrismaClient } from '../apps/reels-service/src/prisma/client';
import { PrismaClient as NotifPrismaClient } from '../apps/notification-service/src/prisma/client';
import { PrismaClient as SearchPrismaClient } from '../apps/search-service/src/prisma/client';

import { FeedService } from '../apps/feed-service/src/modules/feed/services/feed.service';
import { ReelsService } from '../apps/reels-service/src/modules/reels/services/reels.service';
import { NotificationService } from '../apps/notification-service/src/modules/notification/services/notification.service';
import { SearchService } from '../apps/search-service/src/modules/search/services/search.service';

process.env.FEED_DATABASE_URL = 'postgresql://postgres:postgres_secure_pass@localhost:5432/feed_db?schema=public';
process.env.REELS_DATABASE_URL = 'postgresql://postgres:postgres_secure_pass@localhost:5432/reels_db?schema=public';
process.env.NOTIF_DATABASE_URL = 'postgresql://postgres:postgres_secure_pass@localhost:5432/notif_db?schema=public';
process.env.SEARCH_DATABASE_URL = 'postgresql://postgres:postgres_secure_pass@localhost:5432/search_db?schema=public';

async function runTestSuite() {
  console.log('====================================================');
  console.log('🚀 RUNNING FEED, REELS, NOTIFICATION & SEARCH TEST SUITE');
  console.log('====================================================\n');

  const feedPrisma = new FeedPrismaClient({ datasources: { db: { url: process.env.FEED_DATABASE_URL } } });
  const reelsPrisma = new ReelsPrismaClient({ datasources: { db: { url: process.env.REELS_DATABASE_URL } } });
  const notifPrisma = new NotifPrismaClient({ datasources: { db: { url: process.env.NOTIF_DATABASE_URL } } });
  const searchPrisma = new SearchPrismaClient({ datasources: { db: { url: process.env.SEARCH_DATABASE_URL } } });

  await feedPrisma.$connect();
  await reelsPrisma.$connect();
  await notifPrisma.$connect();
  await searchPrisma.$connect();

  const feedService = new FeedService(feedPrisma as any);
  const reelsService = new ReelsService(reelsPrisma as any);
  const mockGateway = { sendToUser: () => {} };
  const notifService = new NotificationService(notifPrisma as any, mockGateway as any);
  const searchService = new SearchService(searchPrisma as any);

  let passedTests = 0;
  let totalTests = 0;

  function assert(condition: boolean, testName: string) {
    totalTests++;
    if (condition) {
      console.log(`✅ [PASS] Test ${totalTests}: ${testName}`);
      passedTests++;
    } else {
      console.error(`❌ [FAIL] Test ${totalTests}: ${testName}`);
      throw new Error(`Test failed: ${testName}`);
    }
  }

  try {
    // Clean test data
    await searchPrisma.searchIndex.deleteMany();
    await notifPrisma.notification.deleteMany();
    await reelsPrisma.reelBookmark.deleteMany();
    await reelsPrisma.reelView.deleteMany();
    await reelsPrisma.reel.deleteMany();
    await feedPrisma.hiddenPost.deleteMany();
    await feedPrisma.feedItem.deleteMany();

    const user1 = `user_feed_${Date.now()}_1`;
    const user2 = `user_feed_${Date.now()}_2`;

    // 1. FEED SERVICE TESTS
    console.log('--- 1. Testing Feed Service & Multi-Factor Ranking ---');
    // Ingest friend post vs recommended post
    const friendPost = await feedService.ingestFeedItem(user1, 'post-friend-1', user2, 'FRIEND');
    const trendingPost = await feedService.ingestFeedItem(user1, 'post-trend-2', 'creator-x', 'TRENDING');

    assert(friendPost.score > trendingPost.score, 'Friend publication achieves higher ranking score than Trending (50 > 10)');

    const userFeed = await feedService.getUserFeed(user1);
    assert(userFeed.items.length === 2, 'User feed contains both personalized items');
    assert(userFeed.items[0].postId === 'post-friend-1', 'Friend post is ranked first due to affinity score');

    // Hide post functionality
    await feedService.hidePost(user1, 'post-friend-1');
    const userFeedPostHide = await feedService.getUserFeed(user1);
    assert(userFeedPostHide.items.length === 1 && userFeedPostHide.items[0].postId === 'post-trend-2', 'Hidden post removed from timeline');

    // 2. REELS SERVICE TESTS
    console.log('\n--- 2. Testing Reels Short-Form Video & Watch Duration Tracking ---');
    const reel = await reelsService.createReel(user2, {
      caption: 'Incredible tech setup #reels #developer',
      videoUrl: 'https://cdn.example.com/reels/reel1.mp4',
      durationSec: 15,
    });
    assert(!!reel.id, 'Reel published successfully');
    assert(reel.viewsCount === 0, 'Initial viewsCount = 0');

    // Record view
    const viewRecord = await reelsService.recordView(reel.id, user1, {
      watchDurationSec: 15,
      completed: true,
    });
    assert(viewRecord.completed === true, 'View recorded with completion = true');

    const reelsFeed = await reelsService.getReelsFeed(10);
    assert(reelsFeed.items.length === 1 && reelsFeed.items[0].viewsCount === 1, 'Reels feed tracks updated viewsCount = 1');

    // Bookmark reel
    const bookmark = await reelsService.toggleBookmark(reel.id, user1);
    assert(bookmark.bookmarked === true, 'Reel bookmarked successfully');

    // 3. NOTIFICATION SERVICE TESTS
    console.log('\n--- 3. Testing Notification Center & Unread Counters ---');
    await notifService.createNotification({
      recipientId: user1,
      actorId: user2,
      type: 'POST_REACTION',
      targetType: 'POST',
      targetId: 'post-123',
      summary: 'Bob reacted LOVE to your post',
    });

    await notifService.createNotification({
      recipientId: user1,
      actorId: user2,
      type: 'COMMENT',
      targetType: 'POST',
      targetId: 'post-123',
      summary: 'Bob commented on your post',
    });

    const unreadCount1 = await notifService.getUnreadCount(user1);
    assert(unreadCount1.unreadCount === 2, 'Initial unread count = 2');

    const notifList = await notifService.getUserNotifications(user1);
    assert(notifList.items.length === 2, 'Retrieved 2 notifications');

    // Mark single notification read
    await notifService.markAsRead(notifList.items[0].id, user1);
    const unreadCount2 = await notifService.getUnreadCount(user1);
    assert(unreadCount2.unreadCount === 1, 'Unread count decremented to 1');

    // Mark all read
    await notifService.markAllAsRead(user1);
    const unreadCount3 = await notifService.getUnreadCount(user1);
    assert(unreadCount3.unreadCount === 0, 'All notifications marked as read (count = 0)');

    // 4. SEARCH SERVICE TESTS
    console.log('\n--- 4. Testing Search Index & Typeahead Suggestions ---');
    await searchService.indexEntity({
      entityType: 'USER',
      entityId: 'user-alice-uuid',
      title: 'Alice Smith',
      content: 'Senior Software Architect',
      tags: ['software', 'architecture'],
      popularity: 250,
    });

    await searchService.indexEntity({
      entityType: 'HASHTAG',
      entityId: 'tag-nestjs-uuid',
      title: '#nestjs',
      content: 'NestJS Framework',
      tags: ['nestjs', 'typescript', 'backend'],
      popularity: 500,
    });

    // Full-text search
    const searchResult = await searchService.search('Alice');
    assert(searchResult.items.length === 1 && searchResult.items[0].title === 'Alice Smith', "Search query 'Alice' matched user");

    // Typeahead suggestion
    const suggestions = await searchService.getSuggestions('Ali');
    assert(suggestions.length === 1 && suggestions[0].title === 'Alice Smith', "Prefix 'Ali' returns autocomplete suggestion 'Alice Smith'");

    console.log('\n====================================================');
    console.log(`🎉 ALL ${passedTests}/${totalTests} FEED, REELS, NOTIF & SEARCH TESTS PASSED SUCCESSFULLY!`);
    console.log('====================================================');
  } finally {
    await feedPrisma.$disconnect();
    await reelsPrisma.$disconnect();
    await notifPrisma.$disconnect();
    await searchPrisma.$disconnect();
  }
}

runTestSuite().catch((e) => {
  console.error('Test execution failed:', e);
  process.exit(1);
});
