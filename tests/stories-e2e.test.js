const http = require('http');

function request(method, path, body = null, token = null) {
  return new Promise((resolve, reject) => {
    const dataString = body ? JSON.stringify(body) : null;
    const headers = {
      'Content-Type': 'application/json',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    if (dataString) {
      headers['Content-Length'] = Buffer.byteLength(dataString);
    }

    const req = http.request(
      {
        hostname: 'localhost',
        port: 4000,
        path: `/api${path}`,
        method,
        headers,
      },
      (res) => {
        let responseBody = '';
        res.on('data', (chunk) => (responseBody += chunk));
        res.on('end', () => {
          try {
            const parsed = responseBody ? JSON.parse(responseBody) : {};
            resolve({ status: res.statusCode, body: parsed });
          } catch {
            resolve({ status: res.statusCode, body: responseBody });
          }
        });
      }
    );

    req.on('error', reject);
    if (dataString) req.write(dataString);
    req.end();
  });
}

async function runTests() {
  console.log('====================================================');
  console.log('BẮT ĐẦU KIỂM THỬ TOÀN DIỆN CHỨC NĂNG STORY (BACKEND)');
  console.log('====================================================');

  const ts = Date.now();
  const userAEmail = `story_a_${ts}@example.com`;
  const userBEmail = `story_b_${ts}@example.com`;
  const userCEmail = `story_c_${ts}@example.com`;
  const password = 'Password123!';

  // 1. Register & Login User A
  console.log('\n[1] Đăng ký & Đăng nhập User A (Tác giả Story)...');
  const regA = await request('POST', '/auth/register', {
    email: userAEmail,
    password,
    name: 'Nguyễn Tác Giả Story',
  });
  const userAId = regA.body.id;
  const loginA = await request('POST', '/auth/login', { email: userAEmail, password });
  const tokenA = loginA.body.accessToken;
  console.log(` -> User A ID: ${userAId}, Token: OK`);

  // 2. Register & Login User B
  console.log('\n[2] Đăng ký & Đăng nhập User B (Người xem Story)...');
  const regB = await request('POST', '/auth/register', {
    email: userBEmail,
    password,
    name: 'Trần Người Xem B',
  });
  const userBId = regB.body.id;
  const loginB = await request('POST', '/auth/login', { email: userBEmail, password });
  const tokenB = loginB.body.accessToken;
  console.log(` -> User B ID: ${userBId}, Token: OK`);

  // 3. Register & Login User C
  console.log('\n[3] Đăng ký & Đăng nhập User C (Người lạ / Không có quyền)...');
  const regC = await request('POST', '/auth/register', {
    email: userCEmail,
    password,
    name: 'Lê Người Lạ C',
  });
  const userCId = regC.body.id;
  const loginC = await request('POST', '/auth/login', { email: userCEmail, password });
  const tokenC = loginC.body.accessToken;
  console.log(` -> User C ID: ${userCId}, Token: OK`);

  // 4. Create Public Story (Image)
  console.log('\n[4] User A tạo Story Ảnh Công khai (PUBLIC)...');
  const createImgStory = await request(
    'POST',
    '/stories',
    {
      type: 'IMAGE',
      content: 'Một ngày nắng đẹp tại Cần Thơ! #cantho #story',
      mediaUrl: '/api/uploads/sample-story-img.jpg',
      visibility: 'PUBLIC',
    },
    tokenA
  );
  if (createImgStory.status !== 201) {
    throw new Error(`Tạo Story ảnh thất bại: ${JSON.stringify(createImgStory.body)}`);
  }
  const publicStoryId = createImgStory.body.id;
  console.log(` -> Tạo thành công Story ID: ${publicStoryId}`);

  // 5. Create Text Story
  console.log('\n[5] User A tạo Story Văn bản (TEXT) với nền tím...');
  const createTxtStory = await request(
    'POST',
    '/stories',
    {
      type: 'TEXT',
      content: 'Chào mừng các bạn đến với mạng xã hội MXH-K! Hãy kết nối cùng mình nhé!',
      backgroundColor: '#833AB4',
      visibility: 'PUBLIC',
    },
    tokenA
  );
  const textStoryId = createTxtStory.body.id;
  console.log(` -> Tạo thành công Story Text ID: ${textStoryId}`);

  // 6. Create Only Me Story
  console.log('\n[6] User A tạo Story Bí mật (ONLY_ME)...');
  const createPrivateStory = await request(
    'POST',
    '/stories',
    {
      type: 'TEXT',
      content: 'Kỷ niệm riêng tư chỉ mình tôi được xem!',
      backgroundColor: '#1E293B',
      visibility: 'ONLY_ME',
    },
    tokenA
  );
  const privateStoryId = createPrivateStory.body.id;
  console.log(` -> Tạo thành công Story Only Me ID: ${privateStoryId}`);

  // 7. Verify Feed for User B
  console.log('\n[7] User B lấy Story Feed...');
  const feedB = await request('GET', '/stories/feed', null, tokenB);
  const authorAGroup = feedB.body.groups.find((g) => g.authorId === userAId);
  if (!authorAGroup) {
    throw new Error('User B không thấy nhóm Story của User A trong Feed');
  }
  console.log(` -> User B thấy nhóm của A với ${authorAGroup.stories.length} stories`);
  const visibleIds = authorAGroup.stories.map((s) => s.id);
  if (!visibleIds.includes(publicStoryId) || !visibleIds.includes(textStoryId)) {
    throw new Error('Thiếu Story công khai trong Feed của B');
  }
  if (visibleIds.includes(privateStoryId)) {
    throw new Error('LỖI BẢO MẬT: Story ONLY_ME xuất hiện trong Feed của B!');
  }
  console.log(' -> Quyền riêng tư Feed: CHÍNH XÁC (Story ONLY_ME bị ẩn đối với B)');

  // 8. B attempts direct access to A's ONLY_ME story
  console.log('\n[8] B thử gọi trực tiếp API xem Story ONLY_ME của A...');
  const directPrivate = await request('GET', `/stories/${privateStoryId}`, null, tokenB);
  if (directPrivate.status !== 403) {
    throw new Error(`LỖI BẢO MẬT: B xem được story Only Me! Mã HTTP: ${directPrivate.status}`);
  }
  console.log(' -> Máy chủ từ chối với mã 403 Forbidden: BẢO MẬT TUYỆT ĐỐI');

  // 9. B views A's public story and marks viewed
  console.log('\n[9] B mở xem Story công khai và ghi nhận lượt xem...');
  const markView = await request('POST', `/stories/${publicStoryId}/view`, null, tokenB);
  if (markView.status !== 201 && markView.status !== 200) {
    throw new Error(`Ghi nhận lượt xem thất bại: ${JSON.stringify(markView.body)}`);
  }
  console.log(` -> Ghi nhận lượt xem thành công. Tổng lượt xem: ${markView.body.viewCount}`);

  // 10. B reacts to A's story
  console.log('\n[10] B thả cảm xúc LOVE trên Story của A...');
  const reactRes = await request('POST', `/stories/${publicStoryId}/reactions`, { reactionType: 'LOVE' }, tokenB);
  if (reactRes.status !== 201 && reactRes.status !== 200) {
    throw new Error(`Thả cảm xúc thất bại: ${JSON.stringify(reactRes.body)}`);
  }
  console.log(` -> B đã thả cảm xúc: ${reactRes.body.reactionType}`);

  // 11. A checks viewers list
  console.log('\n[11] Tác giả A kiểm tra danh sách người đã xem Story...');
  const viewersA = await request('GET', `/stories/${publicStoryId}/viewers`, null, tokenA);
  const viewerB = viewersA.body.viewers.find((v) => v.id === userBId);
  if (!viewerB) {
    throw new Error('A không thấy B trong danh sách người đã xem');
  }
  console.log(` -> A thấy B trong danh sách: ${viewerB.name}, Cảm xúc: ${viewerB.reaction}`);

  // 12. Non-owner C tries to check viewers list
  console.log('\n[12] Người lạ C thử xem trộm danh sách người xem Story của A...');
  const viewersC = await request('GET', `/stories/${publicStoryId}/viewers`, null, tokenC);
  if (viewersC.status !== 403) {
    throw new Error(`LỖI PHÂN QUYỀN: C xem được danh sách viewers! Mã: ${viewersC.status}`);
  }
  console.log(' -> Máy chủ chặn C với mã 403 Forbidden: CHÍNH XÁC');

  // 13. Close Friends test
  console.log('\n[13] Kiểm tra quyền riêng tư Bạn Thân (CLOSE_FRIENDS)...');
  console.log(' -> A thêm B vào danh sách Bạn thân...');
  await request('POST', `/stories/close-friends/${userBId}`, null, tokenA);

  const closeStory = await request(
    'POST',
    '/stories',
    {
      type: 'TEXT',
      content: 'Tin mật chỉ dành cho Bạn Thân!',
      backgroundColor: '#10B981',
      visibility: 'CLOSE_FRIENDS',
    },
    tokenA
  );
  const closeStoryId = closeStory.body.id;

  const accessB = await request('GET', `/stories/${closeStoryId}`, null, tokenB);
  if (accessB.status !== 200) {
    throw new Error('B là Bạn thân nhưng không xem được story');
  }
  console.log(' -> B (Bạn thân) xem được Story: THÀNH CÔNG');

  const accessC = await request('GET', `/stories/${closeStoryId}`, null, tokenC);
  if (accessC.status !== 403) {
    throw new Error('C không phải Bạn thân nhưng vẫn xem được story');
  }
  console.log(' -> C (Người ngoài) bị chặn với mã 403: CHÍNH XÁC');

  // 14. Delete Story test
  console.log('\n[14] Kiểm tra xóa Story và phân quyền...');
  // C tries to delete A's story
  const deleteC = await request('DELETE', `/stories/${publicStoryId}`, null, tokenC);
  if (deleteC.status !== 403) {
    throw new Error('C xóa được Story của A!');
  }
  console.log(' -> C thử xóa bài của A bị chặn 403: CHÍNH XÁC');

  // A deletes own story
  const deleteA = await request('DELETE', `/stories/${publicStoryId}`, null, tokenA);
  if (deleteA.status !== 200) {
    throw new Error('A không xóa được story của mình');
  }
  console.log(' -> A xóa story thành công: ĐẠT');

  // B tries to view deleted story
  const viewDeleted = await request('GET', `/stories/${publicStoryId}`, null, tokenB);
  if (viewDeleted.status !== 404) {
    throw new Error('Story đã xóa nhưng vẫn truy cập được');
  }
  console.log(' -> B truy cập Story đã xóa nhận mã 404 Not Found: CHÍNH XÁC');

  console.log('\n====================================================');
  console.log('TẤT CẢ 14/14 BÀI KIỂM THỬ BACKEND ĐỀU ĐẠT 100%!');
  console.log('====================================================');
}

runTests().catch((err) => {
  console.error('\nLỖI KIỂM THỬ:', err);
  process.exit(1);
});
