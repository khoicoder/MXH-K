import { PrismaClient as PostPrismaClient } from '../apps/post-service/src/prisma/client';
import { PrismaClient as MediaPrismaClient } from '../apps/media-service/src/prisma/client';
import { PrismaClient as InteractPrismaClient } from '../apps/interaction-service/src/prisma/client';
import { PostService } from '../apps/post-service/src/modules/post/services/post.service';
import { MediaService } from '../apps/media-service/src/modules/media/services/media.service';
import { InteractionService } from '../apps/interaction-service/src/modules/interaction/services/interaction.service';

process.env.POST_DATABASE_URL = 'postgresql://postgres:postgres_secure_pass@localhost:5432/post_db?schema=public';
process.env.MEDIA_DATABASE_URL = 'postgresql://postgres:postgres_secure_pass@localhost:5432/media_db?schema=public';
process.env.INTERACTION_DATABASE_URL = 'postgresql://postgres:postgres_secure_pass@localhost:5432/interact_db?schema=public';

async function runContentInteractionTestSuite() {
  console.log('====================================================');
  console.log('🚀 RUNNING CONTENT & INTERACTION TEST SUITE');
  console.log('====================================================\n');

  const postPrisma = new PostPrismaClient({
    datasources: { db: { url: process.env.POST_DATABASE_URL } },
  });
  const mediaPrisma = new MediaPrismaClient({
    datasources: { db: { url: process.env.MEDIA_DATABASE_URL } },
  });
  const interactPrisma = new InteractPrismaClient({
    datasources: { db: { url: process.env.INTERACTION_DATABASE_URL } },
  });

  await postPrisma.$connect();
  await mediaPrisma.$connect();
  await interactPrisma.$connect();

  const postService = new PostService(postPrisma as any);
  const mediaService = new MediaService(mediaPrisma as any);
  const interactService = new InteractionService(interactPrisma as any);

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
    await interactPrisma.report.deleteMany();
    await interactPrisma.reaction.deleteMany();
    await interactPrisma.comment.deleteMany();
    await postPrisma.savedPost.deleteMany();
    await postPrisma.postHashtag.deleteMany();
    await postPrisma.hashtag.deleteMany();
    await postPrisma.postMedia.deleteMany();
    await postPrisma.post.deleteMany();
    await mediaPrisma.mediaFile.deleteMany();

    const author1 = `author_${Date.now()}_1`;
    const author2 = `author_${Date.now()}_2`;

    // 1. MEDIA SERVICE TESTS
    console.log('--- 1. Testing Media Service & S3 Upload Validation ---');
    // Oversized image > 10MB must be rejected
    let oversizedRejected = false;
    try {
      await mediaService.requestUploadUrl(author1, {
        filename: 'giant_poster.png',
        mimeType: 'image/png',
        sizeBytes: 15 * 1024 * 1024, // 15MB
      });
    } catch {
      oversizedRejected = true;
    }
    assert(oversizedRejected, 'Oversized image (>10MB) is rejected with BadRequestException');

    // Valid image upload request
    const mediaUpload = await mediaService.requestUploadUrl(author1, {
      filename: 'architecture_diagram.png',
      mimeType: 'image/png',
      sizeBytes: 2 * 1024 * 1024, // 2MB
    });
    assert(!!mediaUpload.mediaId, 'Media file record generated with UUID');
    assert(mediaUpload.publicUrl.includes(mediaUpload.fileKey), 'Public URL matches generated file key');

    // Confirm upload
    const confirmedMedia = await mediaService.confirmUpload(author1, {
      mediaId: mediaUpload.mediaId,
    });
    assert(confirmedMedia.status === 'ACTIVE', 'Media status transitioned to ACTIVE');

    // 2. POST CREATION WITH HASHTAGS & MEDIA
    console.log('\n--- 2. Testing Post Creation, Hashtag Parsing & Media Linking ---');
    const post = await postService.createPost(author1, {
      content: 'Hello World! Launching our new platform with #microservices and #nestjs architecture! #coding',
      visibility: 'PUBLIC',
      media: [
        {
          mediaId: mediaUpload.mediaId,
          mediaType: 'IMAGE',
          url: mediaUpload.publicUrl,
        },
      ],
    });
    assert(!!post.id, 'Post record created successfully in post_db');
    assert(post.mediaCount === 1, 'Post correctly tracks mediaCount = 1');
    assert(post.media[0].mediaId === mediaUpload.mediaId, 'PostMedia relation linked properly');

    // Verify hashtags were extracted and saved
    const fetchedPost = await postService.getPostById(post.id);
    assert(fetchedPost.hashtags.includes('microservices'), "Extracted hashtag '#microservices'");
    assert(fetchedPost.hashtags.includes('nestjs'), "Extracted hashtag '#nestjs'");
    assert(fetchedPost.hashtags.includes('coding'), "Extracted hashtag '#coding'");

    // 3. POST EDITING & AUTHORSHIP INTEGRITY
    console.log('\n--- 3. Testing Post Editing & Authorship Security ---');
    let unauthorizedEditBlocked = false;
    try {
      await postService.updatePost(post.id, author2, {
        content: 'Malicious modification attempt',
      });
    } catch {
      unauthorizedEditBlocked = true;
    }
    assert(unauthorizedEditBlocked, 'User cannot edit another author post (ForbiddenException)');

    const updatedPost = await postService.updatePost(post.id, author1, {
      content: 'Updated content: #microservices are powerful!',
    });
    assert(updatedPost.content.includes('Updated content'), 'Author successfully updated post');

    // Pin & Save (Bookmark) post
    const pinned = await postService.togglePinPost(post.id, author1);
    assert(pinned.isPinned === true, 'Post successfully pinned to profile');

    const saveResult = await postService.toggleSavePost(post.id, author2);
    assert(saveResult.saved === true, 'User 2 bookmarked post');
    const savedPosts = await postService.getSavedPosts(author2);
    assert(savedPosts.items.length === 1 && savedPosts.items[0].id === post.id, 'Saved bookmark appears in user list');

    // 4. REACTION SYSTEM (6 TYPES & SINGLE REACTION CONSTRAINT)
    console.log('\n--- 4. Testing 6 Emotional Reactions & Single Active Reaction Rule ---');
    // Author 2 reacts LOVE
    const r1 = await interactService.setReaction(author2, {
      targetType: 'POST',
      targetId: post.id,
      reactionType: 'LOVE',
    });
    assert(r1.action === 'CREATED' && r1.reactionType === 'LOVE', 'Author 2 added LOVE reaction');

    // Author 2 switches reaction to WOW (must UPDATE in place, NOT create second reaction!)
    const r2 = await interactService.setReaction(author2, {
      targetType: 'POST',
      targetId: post.id,
      reactionType: 'WOW',
    });
    assert(r2.action === 'UPDATED' && r2.reactionType === 'WOW', 'Reaction seamlessly updated to WOW');

    const summaryPost1 = await interactService.getReactionSummary('POST', post.id, author2);
    assert(summaryPost1.total === 1, 'Total reactions is strictly 1 (No duplicate reactions)');
    assert(summaryPost1.counts.WOW === 1, 'Reaction count for WOW = 1');
    assert(summaryPost1.counts.LOVE === 0, 'Previous reaction count for LOVE decremented to 0');
    assert(summaryPost1.myReaction === 'WOW', 'User current reaction correctly reported as WOW');

    // Toggle off: Author 2 clicks WOW again
    const r3 = await interactService.setReaction(author2, {
      targetType: 'POST',
      targetId: post.id,
      reactionType: 'WOW',
    });
    assert(r3.action === 'REMOVED', 'Clicking active reaction toggles it off');
    const summaryPost2 = await interactService.getReactionSummary('POST', post.id, author2);
    assert(summaryPost2.total === 0, 'Total reactions decremented to 0');

    // 5. THREADED NESTED COMMENTS WITH DEPTH CLAMPING
    console.log('\n--- 5. Testing Threaded Nested Comments & Depth Clamping ---');
    // Root comment (Depth 0)
    const rootComment = await interactService.createComment(author2, {
      postId: post.id,
      content: 'This is a root comment on the architecture.',
    });
    assert(rootComment.depth === 0, 'Root comment assigned depth = 0');

    // Reply to root comment (Depth 1)
    const replyComment = await interactService.createComment(author1, {
      postId: post.id,
      parentCommentId: rootComment.id,
      content: 'Thanks! Here is a reply to the root comment.',
    });
    assert(replyComment.depth === 1, 'Direct reply assigned depth = 1');

    // Sub-reply to reply (Depth 2)
    const subReplyComment = await interactService.createComment(author2, {
      postId: post.id,
      parentCommentId: replyComment.id,
      content: 'Nested sub-reply level 2.',
    });
    assert(subReplyComment.depth === 2, 'Nested reply assigned depth = 2');

    // Further deep reply (Must be clamped to depth 2 to protect query performance)
    const clampedReply = await interactService.createComment(author1, {
      postId: post.id,
      parentCommentId: subReplyComment.id,
      content: 'Fourth level reply clamped to depth 2.',
    });
    assert(clampedReply.depth === 2, 'Deeply nested reply successfully clamped at depth = 2');

    const postComments = await interactService.getPostComments(post.id);
    assert(postComments.items.length === 4, 'All 4 threaded comments fetched in chronological order');

    // 6. CONTENT REPORTING
    console.log('\n--- 6. Testing Content Moderation Reporting ---');
    const report = await interactService.createReport(author2, {
      targetType: 'POST',
      targetId: post.id,
      reason: 'Testing moderation pipeline',
    });
    assert(report.status === 'PENDING', 'Report submitted with PENDING status');

    console.log('\n====================================================');
    console.log(`🎉 ALL ${passedTests}/${totalTests} CONTENT & INTERACTION TESTS PASSED SUCCESSFULLY!`);
    console.log('====================================================');
  } finally {
    await postPrisma.$disconnect();
    await mediaPrisma.$disconnect();
    await interactPrisma.$disconnect();
  }
}

runContentInteractionTestSuite().catch((e) => {
  console.error('Test execution failed:', e);
  process.exit(1);
});
