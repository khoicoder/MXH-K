const axios = require('axios');

async function testMultiUserInteraction() {
  console.log('=== TEST MULTI-USER REAL-TIME INTERACTION & PERSISTENCE ===');

  // 1. Register User 1 (Author)
  const u1 = 'tacgia_' + Date.now();
  await axios.post('http://localhost:4000/api/auth/register', {
    email: u1 + '@mxh-k.vn',
    password: 'Password123!',
    displayName: 'Nguyễn Tác Giả',
  });
  const l1 = await axios.post('http://localhost:4000/api/auth/login', {
    email: u1 + '@mxh-k.vn',
    password: 'Password123!',
    fingerprint: 'fp1',
  });
  const t1 = l1.data.accessToken;

  // Post by User 1
  const post = await axios.post(
    'http://localhost:4000/api/posts',
    {
      content: 'Bài viết kiểm tra tương tác nhiều người dùng thời gian thực! #realtime #vietnam',
      visibility: 'PUBLIC',
    },
    { headers: { Authorization: 'Bearer ' + t1 } },
  );
  const postId = post.data.id;
  console.log('1. Tác giả đăng bài viết:', postId);

  // 2. Register User 2 (Viewer 1)
  const u2 = 'nguoi2_' + Date.now();
  await axios.post('http://localhost:4000/api/auth/register', {
    email: u2 + '@mxh-k.vn',
    password: 'Password123!',
    displayName: 'Trần Bạn Bè',
  });
  const l2 = await axios.post('http://localhost:4000/api/auth/login', {
    email: u2 + '@mxh-k.vn',
    password: 'Password123!',
    fingerprint: 'fp2',
  });
  const t2 = l2.data.accessToken;

  // User 2 reacts LOVE and comments
  await axios.post(
    'http://localhost:4000/api/reactions',
    {
      targetType: 'POST',
      targetId: postId,
      reactionType: 'LOVE',
    },
    { headers: { Authorization: 'Bearer ' + t2 } },
  );

  const cmt2 = await axios.post(
    'http://localhost:4000/api/comments',
    {
      postId,
      content: 'Chào tác giả! Mình là Trần Bạn Bè, thả tim bài viết nhé ❤️',
    },
    { headers: { Authorization: 'Bearer ' + t2 } },
  );
  console.log('2. Trần Bạn Bè thả tim & bình luận. Comment ID:', cmt2.data.id);

  // 3. Register User 3 (Viewer 2)
  const u3 = 'nguoi3_' + Date.now();
  await axios.post('http://localhost:4000/api/auth/register', {
    email: u3 + '@mxh-k.vn',
    password: 'Password123!',
    displayName: 'Lê Khách Mời',
  });
  const l3 = await axios.post('http://localhost:4000/api/auth/login', {
    email: u3 + '@mxh-k.vn',
    password: 'Password123!',
    fingerprint: 'fp3',
  });
  const t3 = l3.data.accessToken;

  // User 3 reacts WOW and replies to cmt2
  await axios.post(
    'http://localhost:4000/api/reactions',
    {
      targetType: 'POST',
      targetId: postId,
      reactionType: 'WOW',
    },
    { headers: { Authorization: 'Bearer ' + t3 } },
  );

  await axios.post(
    'http://localhost:4000/api/comments',
    {
      postId,
      parentCommentId: cmt2.data.id,
      content: 'Mình là Lê Khách Mời, trả lời bình luận của bạn Bè nè!',
    },
    { headers: { Authorization: 'Bearer ' + t3 } },
  );
  console.log('3. Lê Khách Mời thả Wow & phản hồi bình luận!');

  // 4. Verify what User 1 sees on Feed:
  const feed1 = await axios.get('http://localhost:4000/api/feed', {
    headers: { Authorization: 'Bearer ' + t1 },
  });
  const postOnFeed = feed1.data.items.find((p) => p.id === postId || p.postId === postId);
  console.log('\n4. KẾT QUẢ HIỂN THỊ TRÊN FEED CỦA TÁC GIẢ:');
  console.log('   - Tổng lượt tương tác:', postOnFeed.reactionsCount, '(Kỳ vọng: 2)');
  console.log('   - Tổng bình luận:', postOnFeed.commentsCount, '(Kỳ vọng: 2)');
  console.log('   - Phản ứng của chính tác giả:', postOnFeed.myReaction, '(Kỳ vọng: null)');

  // 5. Verify what User 2 sees on Feed:
  const feed2 = await axios.get('http://localhost:4000/api/feed', {
    headers: { Authorization: 'Bearer ' + t2 },
  });
  const postOnFeed2 = feed2.data.items.find((p) => p.id === postId || p.postId === postId);
  console.log('\n5. KẾT QUẢ HIỂN THỊ TRÊN FEED CỦA TRẦN BẠN BÈ:');
  console.log('   - Tổng tương tác:', postOnFeed2.reactionsCount, '(Kỳ vọng: 2)');
  console.log('   - Phản ứng của Bạn Bè:', postOnFeed2.myReaction, '(Kỳ vọng: LOVE)');

  // 6. Verify comments list
  const commentsRes = await axios.get('http://localhost:4000/api/comments/post/' + postId);
  console.log('\n6. DANH SÁCH BÌNH LUẬN LƯU TRỮ THÀNH CÔNG:');
  for (const c of commentsRes.data.items) {
    console.log('   - [' + c.authorName + '] (depth=' + c.depth + '): "' + c.content + '"');
  }
}

testMultiUserInteraction().catch((err) => {
  console.error('Lỗi:', err.response?.data || err.message);
  process.exit(1);
});
