const axios = require('axios');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

const API_BASE = 'http://localhost:4000/api';

async function runUploadTest() {
  console.log('--- STARTING LOCAL IMAGE UPLOAD TEST ---');

  // 1. Create a dummy test image buffer (1x1 transparent PNG)
  const pngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
  const imgBuffer = Buffer.from(pngBase64, 'base64');
  const tempImgPath = path.join(__dirname, 'test-sample.png');
  fs.writeFileSync(tempImgPath, imgBuffer);

  // 2. Register & Login test user
  const stamp = Date.now();
  const userData = {
    email: `upload_user_${stamp}@test.mxhk.vn`,
    password: 'Password123!@#',
    displayName: `Upload Tester ${stamp % 1000}`,
  };

  console.log('1. Registering user...');
  await axios.post(`${API_BASE}/auth/register`, userData);
  const loginRes = await axios.post(`${API_BASE}/auth/login`, {
    email: userData.email,
    password: userData.password,
    fingerprint: 'fp_upload',
  });
  const token = loginRes.data.accessToken;
  console.log(`   User logged in (Token obtained)`);

  // 3. Test Single Image Upload (Avatar)
  console.log('2. Testing single image upload for Avatar (POST /api/media/upload)...');
  const singleForm = new FormData();
  singleForm.append('file', fs.createReadStream(tempImgPath), {
    filename: 'my-avatar.png',
    contentType: 'image/png',
  });

  const uploadSingleRes = await axios.post(`${API_BASE}/media/upload`, singleForm, {
    headers: {
      ...singleForm.getHeaders(),
      Authorization: `Bearer ${token}`,
    },
  });

  const avatarUrl = uploadSingleRes.data.url;
  console.log(`   Uploaded Avatar URL: ${avatarUrl}`);
  if (!avatarUrl || !avatarUrl.startsWith('/api/uploads/')) {
    throw new Error('Avatar upload failed or returned invalid URL!');
  }

  // 4. Test Public Static Access of uploaded avatar
  console.log('3. Verifying static serving of uploaded image...');
  const staticRes = await axios.get(`http://localhost:4000${avatarUrl}`, { responseType: 'arraybuffer' });
  console.log(`   Image fetched successfully, status: ${staticRes.status}, length: ${staticRes.data.length} bytes`);
  if (staticRes.status !== 200 || staticRes.data.length === 0) {
    throw new Error('Static image serving failed!');
  }

  // 5. Update user's avatar in profile
  console.log('4. Updating profile avatarUrl via PATCH /api/users/me...');
  await axios.patch(
    `${API_BASE}/users/me`,
    { avatarUrl },
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const meRes = await axios.get(`${API_BASE}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(`   Profile updated avatarUrl: ${meRes.data.avatarUrl}`);
  if (meRes.data.avatarUrl !== avatarUrl) {
    throw new Error('User profile avatarUrl mismatch!');
  }

  // 6. Test Multiple Images Upload for Post
  console.log('5. Testing multiple images upload (POST /api/media/upload-multiple)...');
  const multiForm = new FormData();
  multiForm.append('files', fs.createReadStream(tempImgPath), { filename: 'post-pic-1.png', contentType: 'image/png' });
  multiForm.append('files', fs.createReadStream(tempImgPath), { filename: 'post-pic-2.png', contentType: 'image/png' });

  const uploadMultiRes = await axios.post(`${API_BASE}/media/upload-multiple`, multiForm, {
    headers: {
      ...multiForm.getHeaders(),
      Authorization: `Bearer ${token}`,
    },
  });

  const postUrls = uploadMultiRes.data.urls;
  console.log(`   Uploaded ${postUrls.length} post photos:`, postUrls);
  if (!postUrls || postUrls.length !== 2) {
    throw new Error('Multiple upload failed!');
  }

  // 7. Create post with uploaded photos
  console.log('6. Creating post with uploaded photos...');
  const postRes = await axios.post(
    `${API_BASE}/posts`,
    {
      content: 'Bài viết đính kèm ảnh tải lên trực tiếp từ máy tính! #photo #upload',
      media: postUrls.map((url, i) => ({ mediaId: `m-${Date.now()}-${i}`, mediaType: 'IMAGE', url })),
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  console.log(`   Post created (ID: ${postRes.data.id}, mediaCount: ${postRes.data.mediaCount})`);

  // Clean up temp file
  if (fs.existsSync(tempImgPath)) fs.unlinkSync(tempImgPath);

  console.log('\n=== ALL LOCAL IMAGE UPLOAD TESTS PASSED 100%! ===');
}

runUploadTest().catch((err) => {
  console.error('TEST FAILED:', err.response?.data || err.message);
  process.exit(1);
});
