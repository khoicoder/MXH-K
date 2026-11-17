import { PrismaClient as UserPrismaClient } from '../apps/user-service/src/prisma/client';
import { PrismaClient as SocialPrismaClient } from '../apps/social-graph-service/src/prisma/client';
import { UserService } from '../apps/user-service/src/modules/user/services/user.service';
import { SocialGraphService } from '../apps/social-graph-service/src/modules/social/services/social-graph.service';

process.env.USER_DATABASE_URL = 'postgresql://postgres:postgres_secure_pass@localhost:5432/user_db?schema=public';
process.env.SOCIAL_DATABASE_URL = 'postgresql://postgres:postgres_secure_pass@localhost:5432/social_db?schema=public';

async function runUserSocialTestSuite() {
  console.log('====================================================');
  console.log('🚀 RUNNING USER PROFILE & SOCIAL GRAPH TEST SUITE');
  console.log('====================================================\n');

  const userPrisma = new UserPrismaClient({
    datasources: { db: { url: process.env.USER_DATABASE_URL } },
  });
  const socialPrisma = new SocialPrismaClient({
    datasources: { db: { url: process.env.SOCIAL_DATABASE_URL } },
  });

  await userPrisma.$connect();
  await socialPrisma.$connect();

  const userService = new UserService(userPrisma as any);
  const socialService = new SocialGraphService(socialPrisma as any);

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
    await socialPrisma.block.deleteMany();
    await socialPrisma.follow.deleteMany();
    await socialPrisma.friendship.deleteMany();
    await socialPrisma.friendRequest.deleteMany();
    await userPrisma.userSettings.deleteMany();
    await userPrisma.userProfile.deleteMany();

    const userA = `user_alice_${Date.now()}`;
    const userB = `user_bob_${Date.now()}`;
    const userC = `user_charlie_${Date.now()}`;

    // 1. USER PROFILE TESTS
    console.log('--- 1. Testing User Profile & Settings ---');
    const profileA = await userService.getOrCreateProfile(userA, 'alice_smith');
    assert(profileA.userId === userA, 'User profile auto-initializes with unique userId');
    assert(profileA.displayName === 'alice_smith', 'Display name initialized properly');
    assert(!!profileA.settings, 'User settings record automatically provisioned');

    const updatedA = await userService.updateProfile(userA, {
      displayName: 'Alice In Tech',
      bio: 'Distributed Systems & Cloud Engineer',
      avatarUrl: 'https://cdn.example.com/alice.png',
      gender: 'FEMALE',
    });
    assert(updatedA.displayName === 'Alice In Tech', 'Profile display name updated');
    assert(updatedA.bio === 'Distributed Systems & Cloud Engineer', 'Bio updated');

    const updatedSettingsA = await userService.updateSettings(userA, {
      postVisibilityDefault: 'FRIENDS_ONLY',
      allowFriendRequests: true,
      isPrivateAccount: true,
    });
    assert(updatedSettingsA.isPrivateAccount === true, 'Settings privacy toggled to private');

    // Initialize Bob and Charlie
    await userService.getOrCreateProfile(userB, 'bob_jones');
    await userService.getOrCreateProfile(userC, 'charlie_brown');

    // 2. BIDIRECTIONAL FRIEND REQUEST WORKFLOW
    console.log('\n--- 2. Testing Bidirectional Friend Request & Acceptance ---');
    // Alice sends friend request to Bob
    const friendReq: any = await socialService.sendFriendRequest(userA, userB);
    assert(friendReq.status === 'PENDING', 'Friend request created with PENDING status');
    assert(friendReq.senderId === userA && friendReq.receiverId === userB, 'Sender and receiver correctly bound');

    // Duplicate request must fail
    let duplicateReqFailed = false;
    try {
      await socialService.sendFriendRequest(userA, userB);
    } catch {
      duplicateReqFailed = true;
    }
    assert(duplicateReqFailed, 'Cannot send duplicate pending friend request');

    // Bob accepts friend request
    const acceptedFriendship = await socialService.acceptFriendRequest(friendReq.id, userB);
    assert(!!acceptedFriendship.id, 'Friendship created upon acceptance');

    // Both users see each other in their friends list
    const aliceFriends = await socialService.getFriendsList(userA);
    const bobFriends = await socialService.getFriendsList(userB);
    assert(aliceFriends.includes(userB), "Bob is present in Alice's friend list");
    assert(bobFriends.includes(userA), "Alice is present in Bob's friend list (Bidirectional)");

    // 3. UNIDIRECTIONAL FOLLOW WORKFLOW
    console.log('\n--- 3. Testing Unidirectional Follow Architecture ---');
    // Charlie follows Alice
    await socialService.followUser(userC, userA);
    const aliceFollowers = await socialService.getFollowers(userA);
    const charlieFollowing = await socialService.getFollowing(userC);
    assert(aliceFollowers.includes(userC), "Charlie appears in Alice's followers list");
    assert(charlieFollowing.includes(userA), "Alice appears in Charlie's following list");

    // Alice does NOT automatically follow Charlie (unidirectional check)
    const charlieFollowers = await socialService.getFollowers(userC);
    assert(!charlieFollowers.includes(userA), 'Following is strictly unidirectional (Alice does not follow Charlie)');

    // 4. RELATIONSHIP EVALUATION
    console.log('\n--- 4. Testing Real-Time Relationship Evaluator ---');
    const relAliceCharlie = await socialService.getRelationship(userA, userC);
    assert(relAliceCharlie.isFollowedBy === true, 'Evaluator correctly identifies followedBy');
    assert(relAliceCharlie.isFollowing === false, 'Evaluator correctly identifies not following');
    assert(relAliceCharlie.isFriend === false, 'Evaluator correctly identifies not friends');

    const relAliceBob = await socialService.getRelationship(userA, userB);
    assert(relAliceBob.isFriend === true, 'Evaluator correctly identifies confirmed friendship');

    // 5. BLOCKING ARCHITECTURE & PRIVACY ENFORCEMENT
    console.log('\n--- 5. Testing Strict Privacy Blocking & Cascade Enforcement ---');
    // Alice blocks Bob!
    await socialService.blockUser(userA, userB);

    // 5.1. Friendship must be automatically severed
    const aliceFriendsPostBlock = await socialService.getFriendsList(userA);
    const bobFriendsPostBlock = await socialService.getFriendsList(userB);
    assert(!aliceFriendsPostBlock.includes(userB), 'Friendship severed: Bob removed from Alice friends');
    assert(!bobFriendsPostBlock.includes(userA), 'Friendship severed: Alice removed from Bob friends');

    // 5.2. Blocked user cannot interact with blocker
    let blockedFollowFailed = false;
    try {
      await socialService.followUser(userB, userA);
    } catch {
      blockedFollowFailed = true;
    }
    assert(blockedFollowFailed, 'Blocked user cannot follow the blocker (ForbiddenException)');

    let blockedFriendReqFailed = false;
    try {
      await socialService.sendFriendRequest(userB, userA);
    } catch {
      blockedFriendReqFailed = true;
    }
    assert(blockedFriendReqFailed, 'Blocked user cannot send friend requests (ForbiddenException)');

    // 5.3. Relationship evaluator identifies two-way blocking barrier
    const relAliceBobBlocked = await socialService.getRelationship(userA, userB);
    assert(relAliceBobBlocked.isBlockedByMe === true, 'Evaluator confirms Alice blocked Bob');

    const relBobAliceBlocked = await socialService.getRelationship(userB, userA);
    assert(relBobAliceBlocked.isBlockedByThem === true, 'Evaluator confirms Bob is blocked by Alice');

    console.log('\n====================================================');
    console.log(`🎉 ALL ${passedTests}/${totalTests} USER & SOCIAL TESTS PASSED SUCCESSFULLY!`);
    console.log('====================================================');
  } finally {
    await userPrisma.$disconnect();
    await socialPrisma.$disconnect();
  }
}

runUserSocialTestSuite().catch((e) => {
  console.error('Test execution failed:', e);
  process.exit(1);
});
