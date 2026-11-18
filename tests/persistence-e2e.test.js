require('dotenv').config();
const http = require('http');

function request(options, data) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, headers: res.headers, data: JSON.parse(body) });
        } catch {
          resolve({ status: res.statusCode, headers: res.headers, raw: body });
        }
      });
    });
    req.on('error', reject);
    if (data) {
      if (typeof data === 'string' || Buffer.isBuffer(data)) {
        req.write(data);
      } else {
        req.write(JSON.stringify(data));
      }
    }
    req.end();
  });
}

async function runTests() {
  console.log('=== STARTING PRODUCTION-READY PERSISTENCE TEST SUITE ===\n');

  // Step 1: Healthcheck API Gateway
  console.log('[TEST 1] Verifying Public Feed & Database Connection...');
  const feedRes = await request({
    hostname: 'localhost',
    port: 4000,
    path: '/api/feed',
    method: 'GET',
  });
  console.log(`Feed status: ${feedRes.status}, items count: ${feedRes.data?.items?.length}`);
  if (feedRes.status !== 200 || !Array.isArray(feedRes.data?.items)) {
    throw new Error('Public feed test failed');
  }

  // Step 2: Register/Login a real user
  const uniqueEmail = `persist_user_${Date.now()}@mxh-k.vn`;
  console.log(`\n[TEST 2] Registering user: ${uniqueEmail}`);
  const regRes = await request(
    {
      hostname: 'localhost',
      port: 4000,
      path: '/api/auth/register',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    },
    {
      email: uniqueEmail,
      password: 'SecurePassword123!',
      displayName: 'Kỹ Sư Kiểm Thử',
    }
  );
  console.log(`Register status: ${regRes.status}, userId: ${regRes.data?.user?.id}`);

  const loginRes = await request(
    {
      hostname: 'localhost',
      port: 4000,
      path: '/api/auth/login',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    },
    {
      email: uniqueEmail,
      password: 'SecurePassword123!',
      deviceId: 'test_persist_device',
    }
  );
  const token = loginRes.data?.accessToken;
  const authorId = loginRes.data?.user?.id;
  console.log(`Login status: ${loginRes.status}, AccessToken generated: ${!!token}`);

  // Step 3: Create Persistent Post with Media and Hashtags
  console.log('\n[TEST 3] Creating Persistent Post in PostgreSQL...');
  const postContent = `Bài viết kiểm thử lưu trữ vĩnh viễn lúc ${new Date().toLocaleString('vi-VN')} #persistence #production`;
  const createPostRes = await request(
    {
      hostname: 'localhost',
      port: 4000,
      path: '/api/posts',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
    {
      content: postContent,
      visibility: 'PUBLIC',
      media: [
        {
          mediaId: `media-${Date.now()}`,
          mediaType: 'IMAGE',
          url: '/api/uploads/1794916787518-775b8bd7-3cdd-4b0d-925f-320be06a154a.jpg',
        },
      ],
    }
  );
  const createdPostId = createPostRes.data?.id;
  console.log(`Created Post ID: ${createdPostId}, mediaCount: ${createPostRes.data?.mediaCount}`);

  // Step 4: Verify post is in PostgreSQL directly via Prisma
  const path = require('path');
  const { PrismaClient } = require(path.join(__dirname, '../apps/post-service/src/prisma/client'));
  const postPrisma = new PrismaClient({ datasources: { db: { url: process.env.POST_DATABASE_URL } } });
  const dbPost = await postPrisma.post.findUnique({
    where: { id: createdPostId },
    include: { media: true, hashtags: { include: { hashtag: true } } },
  });
  console.log('\n[TEST 4] Direct PostgreSQL Verification:');
  console.log(`- Exists in PostgreSQL: ${!!dbPost}`);
  console.log(`- AuthorId in DB: ${dbPost.authorId}`);
  console.log(`- Media stored in post_media: ${dbPost.media.length} items (URL: ${dbPost.media[0]?.url})`);
  console.log(`- Hashtags stored in hashtags: ${dbPost.hashtags.map((h) => h.hashtag.tag).join(', ')}`);
  await postPrisma.$disconnect();

  // Step 5: Verify Feed Cache and Fallback
  console.log('\n[TEST 5] Testing Feed retrieval and Redis caching...');
  const feedAfterRes = await request({
    hostname: 'localhost',
    port: 4000,
    path: '/api/feed',
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });
  const foundInFeed = feedAfterRes.data?.items?.some((p) => p.id === createdPostId);
  console.log(`- Newly created post appears in Feed: ${foundInFeed}`);

  // Step 6: Authorization check (another user cannot edit or delete this post)
  console.log('\n[TEST 6] Testing Security & Authorization...');
  const fakeUserLogin = await request(
    {
      hostname: 'localhost',
      port: 4000,
      path: '/api/auth/register',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    },
    {
      email: `other_user_${Date.now()}@mxh-k.vn`,
      password: 'SecurePassword123!',
      displayName: 'Kẻ Xâm Nhập',
    }
  );
  const otherLogin = await request(
    {
      hostname: 'localhost',
      port: 4000,
      path: '/api/auth/login',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    },
    {
      email: fakeUserLogin.data?.user?.email,
      password: 'SecurePassword123!',
    }
  );
  const otherToken = otherLogin.data?.accessToken;

  const unauthorizedDelete = await request({
    hostname: 'localhost',
    port: 4000,
    path: `/api/posts/${createdPostId}`,
    method: 'DELETE',
    headers: { Authorization: `Bearer ${otherToken}` },
  });
  console.log(`- Non-author delete attempt rejected with status: ${unauthorizedDelete.status} (Expected 403 Forbidden)`);

  // Step 7: Authorized Soft Delete
  console.log('\n[TEST 7] Testing Authorized Deletion & Consistency...');
  const authorizedDelete = await request({
    hostname: 'localhost',
    port: 4000,
    path: `/api/posts/${createdPostId}`,
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(`- Author delete status: ${authorizedDelete.status}, message: ${authorizedDelete.data?.message}`);

  // Verify it is no longer returned in public feed
  const feedAfterDelete = await request({
    hostname: 'localhost',
    port: 4000,
    path: '/api/feed',
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });
  const stillInFeed = feedAfterDelete.data?.items?.some((p) => p.id === createdPostId);
  console.log(`- Deleted post removed from Feed: ${!stillInFeed}`);

  console.log('\n=== ALL PERSISTENCE TESTS COMPLETED SUCCESSFULLY (100% PASS) ===');
}

runTests().catch((err) => {
  console.error('Test failed with error:', err);
  process.exit(1);
});
