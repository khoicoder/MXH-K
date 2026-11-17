const axios = require('axios');

const API_BASE = 'http://localhost:4000/api';

async function runTest() {
  console.log('--- STARTING NOTIFICATIONS, FRIENDS & SEARCH VERIFICATION ---');

  const stamp = Date.now();
  const userAData = {
    email: `alice_${stamp}@test.mxhk.vn`,
    password: 'Password123!@#',
    displayName: `Alice Tran ${stamp % 1000}`,
  };

  const userBData = {
    email: `bob_${stamp}@test.mxhk.vn`,
    password: 'Password123!@#',
    displayName: `Bob Nguyen ${stamp % 1000}`,
  };

  // 1. Register & Login Alice
  console.log('1. Registering Alice...');
  await axios.post(`${API_BASE}/auth/register`, userAData);
  const loginARes = await axios.post(`${API_BASE}/auth/login`, {
    email: userAData.email,
    password: userAData.password,
    fingerprint: 'fp_a',
  });
  const tokenA = loginARes.data.accessToken;
  const userA = loginARes.data.user;
  console.log(`   Alice logged in (ID: ${userA.id}, Name: ${userA.displayName})`);

  // 2. Register & Login Bob
  console.log('2. Registering Bob...');
  await axios.post(`${API_BASE}/auth/register`, userBData);
  const loginBRes = await axios.post(`${API_BASE}/auth/login`, {
    email: userBData.email,
    password: userBData.password,
    fingerprint: 'fp_b',
  });
  const tokenB = loginBRes.data.accessToken;
  const userB = loginBRes.data.user;
  console.log(`   Bob logged in (ID: ${userB.id}, Name: ${userB.displayName})`);

  // 3. Alice creates a post
  console.log('3. Alice creating a post...');
  const postRes = await axios.post(
    `${API_BASE}/posts`,
    { content: `Bài viết test thông báo và tương tác lúc ${new Date().toLocaleTimeString('vi-VN')}` },
    { headers: { Authorization: `Bearer ${tokenA}` } }
  );
  const post = postRes.data;
  console.log(`   Post created (ID: ${post.id})`);

  // 4. Bob reacts to Alice's post
  console.log('4. Bob reacting to Alice post...');
  await axios.post(
    `${API_BASE}/reactions`,
    { targetType: 'POST', targetId: post.id, reactionType: 'LOVE' },
    { headers: { Authorization: `Bearer ${tokenB}` } }
  );

  // 5. Verify Alice's notifications
  console.log('5. Checking Alice notifications for reaction...');
  const notifsARes = await axios.get(`${API_BASE}/notifications`, {
    headers: { Authorization: `Bearer ${tokenA}` },
  });
  console.log('   notifsARes.data:', JSON.stringify(notifsARes.data));
  const reactionNotif = notifsARes.data.items.find((n) => n.targetId === post.id);
  console.log(`   Notification found: "${reactionNotif?.actorName} ${reactionNotif?.summary}"`);
  if (!reactionNotif || reactionNotif.actorName !== userBData.displayName) {
    throw new Error('Reaction notification failed or actor displayName mismatch!');
  }

  // 6. Bob comments on Alice's post
  console.log('6. Bob commenting on Alice post...');
  const commentRes = await axios.post(
    `${API_BASE}/comments`,
    { targetId: post.id, content: 'Bài viết hay quá Alice ơi!' },
    { headers: { Authorization: `Bearer ${tokenB}` } }
  );
  const comment = commentRes.data;

  // 7. Verify Alice's notification for Bob's comment
  console.log('7. Checking Alice notifications for comment...');
  const notifsACommentRes = await axios.get(`${API_BASE}/notifications`, {
    headers: { Authorization: `Bearer ${tokenA}` },
  });
  const commentNotif = notifsACommentRes.data.items.find((n) => n.type === 'COMMENT');
  console.log(`   Comment notification found: "${commentNotif?.actorName} ${commentNotif?.summary}"`);
  if (!commentNotif || commentNotif.actorName !== userBData.displayName) {
    throw new Error('Comment notification failed or actor displayName mismatch!');
  }

  // 8. Bob sends friend request to Alice
  console.log('8. Bob sending friend request to Alice...');
  await axios.post(
    `${API_BASE}/friends/requests`,
    { targetUserId: userA.id },
    { headers: { Authorization: `Bearer ${tokenB}` } }
  );

  // 9. Alice checks pending friend requests
  console.log('9. Alice checking incoming friend requests...');
  const requestsRes = await axios.get(`${API_BASE}/friends/requests`, {
    headers: { Authorization: `Bearer ${tokenA}` },
  });
  const incomingReq = requestsRes.data.received.find((r) => r.senderId === userB.id);
  console.log(`   Incoming request from: ${incomingReq?.senderName} (Req ID: ${incomingReq?.id})`);
  if (!incomingReq || incomingReq.senderName !== userBData.displayName) {
    throw new Error('Friend request recipient did not see sender name!');
  }

  // 10. Alice accepts Bob's friend request
  console.log('10. Alice accepting friend request...');
  await axios.patch(
    `${API_BASE}/friends/requests/${incomingReq.id}/accept`,
    {},
    { headers: { Authorization: `Bearer ${tokenA}` } }
  );

  // 11. Verify Bob receives friend accept notification
  console.log('11. Bob checking friend accept notification...');
  const notifsBRes = await axios.get(`${API_BASE}/notifications`, {
    headers: { Authorization: `Bearer ${tokenB}` },
  });
  const acceptNotif = notifsBRes.data.items.find((n) => n.type === 'FRIEND_ACCEPT');
  console.log(`    Accept notification: "${acceptNotif?.actorName} ${acceptNotif?.summary}"`);
  if (!acceptNotif || acceptNotif.actorName !== userAData.displayName) {
    throw new Error('Friend accept notification failed!');
  }

  // 12. Both check friends list
  console.log('12. Checking friends list for both users...');
  const friendsA = await axios.get(`${API_BASE}/friends`, {
    headers: { Authorization: `Bearer ${tokenA}` },
  });
  const friendsB = await axios.get(`${API_BASE}/friends`, {
    headers: { Authorization: `Bearer ${tokenB}` },
  });
  console.log(`    Alice friends: ${JSON.stringify(friendsA.data.map((f) => f.name))}`);
  console.log(`    Bob friends: ${JSON.stringify(friendsB.data.map((f) => f.name))}`);
  if (!friendsA.data.some((f) => f.id === userB.id) || !friendsB.data.some((f) => f.id === userA.id)) {
    throw new Error('Friendship not established between Alice and Bob!');
  }

  // 13. Search for Bob by displayName
  console.log(`13. Searching for user with query "${userBData.displayName.substring(0, 5)}"...`);
  const searchRes = await axios.get(`${API_BASE}/search?q=${encodeURIComponent(userBData.displayName.substring(0, 5))}`);
  const userMatch = searchRes.data.items.find((i) => i.entityType === 'USER' && i.entityId === userB.id);
  console.log(`    Search match: "${userMatch?.title}" (Type: ${userMatch?.entityType})`);
  if (!userMatch) {
    throw new Error('User search did not find registered user in user_db!');
  }

  // 14. Friend suggestions for Alice
  console.log('14. Checking friend suggestions...');
  const sugRes = await axios.get(`${API_BASE}/friends/suggestions`, {
    headers: { Authorization: `Bearer ${tokenA}` },
  });
  console.log(`    Suggestions count: ${sugRes.data.length}`);

  console.log('\n=== ALL NOTIFICATIONS, FRIENDS & SEARCH TESTS PASSED 100%! ===');
}

runTest().catch((err) => {
  console.error('TEST FAILED:', err.response?.data || err.message);
  process.exit(1);
});
