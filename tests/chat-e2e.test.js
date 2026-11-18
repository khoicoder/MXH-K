const axios = require('axios');
const { io } = require('socket.io-client');

const API_BASE = 'http://localhost:4000/api';
const SOCKET_BASE = 'http://localhost:4000/chat';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function registerOrLogin(email, password, displayName, username) {
  try {
    await axios.post(`${API_BASE}/auth/register`, {
      email,
      password,
      displayName,
      username,
    });
  } catch (err) {
    // Already registered, proceed to login
  }
  const res = await axios.post(`${API_BASE}/auth/login`, { email, password });
  return res.data.accessToken;
}

async function main() {
  console.log('--- STARTING REALTIME CHAT E2E INTEGRATION TEST ---');
  const timestamp = Date.now();

  // 1. Authenticate User A and User B
  console.log('1. Authenticating test users...');
  const userAEmail = `chattest_a_${timestamp}@test.com`;
  const userBEmail = `chattest_b_${timestamp}@test.com`;
  const userCEmail = `chattest_c_${timestamp}@test.com`;

  const tokenA = await registerOrLogin(userAEmail, 'Password123!', 'User A Chat', `usera_${timestamp}`);
  const tokenB = await registerOrLogin(userBEmail, 'Password123!', 'User B Chat', `userb_${timestamp}`);
  const tokenC = await registerOrLogin(userCEmail, 'Password123!', 'User C Spy', `userc_${timestamp}`);

  // Fetch profiles to get user IDs
  const resProfileA = await axios.get(`${API_BASE}/users/me`, {
    headers: { Authorization: `Bearer ${tokenA}` },
  });
  const resProfileB = await axios.get(`${API_BASE}/users/me`, {
    headers: { Authorization: `Bearer ${tokenB}` },
  });
  const resProfileC = await axios.get(`${API_BASE}/users/me`, {
    headers: { Authorization: `Bearer ${tokenC}` },
  });

  const userAId = resProfileA.data.id || resProfileA.data.userId;
  const userBId = resProfileB.data.id || resProfileB.data.userId;
  const userCId = resProfileC.data.id || resProfileC.data.userId;

  console.log(`User A: ${userAId} (${resProfileA.data.displayName})`);
  console.log(`User B: ${userBId} (${resProfileB.data.displayName})`);
  console.log(`User C: ${userCId} (${resProfileC.data.displayName})`);

  // 2. User A creates or gets direct conversation with User B
  console.log('2. User A initializing 1-1 conversation with User B...');
  const directConvRes = await axios.post(
    `${API_BASE}/conversations/direct`,
    { targetUserId: userBId },
    { headers: { Authorization: `Bearer ${tokenA}` } },
  );

  const conversation = directConvRes.data;
  console.log(`Direct Conversation created/retrieved: ID = ${conversation.id}`);
  if (!conversation.id || conversation.type !== 'DIRECT') {
    throw new Error('Failed to create direct conversation');
  }

  // 3. User B also checks conversations list
  console.log('3. Checking User B conversations list...');
  const listBRes = await axios.get(`${API_BASE}/conversations`, {
    headers: { Authorization: `Bearer ${tokenB}` },
  });
  const bConv = listBRes.data.find((c) => c.id === conversation.id);
  if (!bConv) {
    throw new Error('User B conversation list does not include the conversation');
  }
  console.log(`User B sees conversation with peer: ${bConv.peerUser.displayName}`);

  // 4. Connect Socket.IO for both User A and User B
  console.log('4. Connecting Socket.IO clients for User A and User B to existing WebSocket server...');
  const socketA = io(SOCKET_BASE, {
    auth: { token: tokenA, userId: userAId },
    transports: ['websocket', 'polling'],
  });

  const socketB = io(SOCKET_BASE, {
    auth: { token: tokenB, userId: userBId },
    transports: ['websocket', 'polling'],
  });

  await new Promise((resolve, reject) => {
    let aConnected = false;
    let bConnected = false;
    const check = () => {
      if (aConnected && bConnected) resolve();
    };
    socketA.on('connect', () => {
      console.log('-> Socket A connected:', socketA.id);
      aConnected = true;
      check();
    });
    socketB.on('connect', () => {
      console.log('-> Socket B connected:', socketB.id);
      bConnected = true;
      check();
    });
    socketA.on('connect_error', (err) => reject(new Error('Socket A connection error: ' + err.message)));
    socketB.on('connect_error', (err) => reject(new Error('Socket B connection error: ' + err.message)));
    setTimeout(() => reject(new Error('Socket connection timed out')), 6000);
  });

  // 5. Join conversation room
  console.log('5. Both users joining conversation room conv_' + conversation.id);
  socketA.emit('conversation:join', { conversationId: conversation.id });
  socketB.emit('conversation:join', { conversationId: conversation.id });
  await sleep(500);

  // 6. Realtime Message Sending Test: User A -> User B
  console.log('6. User A sends message to User B via realtime WebSocket...');
  let messageReceivedByB = null;
  socketB.on('message:new', (msg) => {
    console.log(`[Socket B received message:new]: "${msg.content}" from ${msg.senderId}`);
    messageReceivedByB = msg;
  });

  const clientMsgId = 'client_msg_' + Date.now();
  const sendPromise = new Promise((resolve, reject) => {
    socketA.emit(
      'message:send',
      {
        conversationId: conversation.id,
        clientMessageId: clientMsgId,
        content: 'Xin chào B! Đây là tin nhắn realtime kiểm thử tự động.',
        type: 'TEXT',
      },
      (ack) => {
        if (ack && ack.status === 'ok') {
          resolve(ack.data);
        } else {
          reject(new Error(ack?.message || 'Send message ack failed'));
        }
      },
    );
  });

  const sentMessage = await sendPromise;
  console.log(`Message sent successfully, ID: ${sentMessage.id}`);

  // Wait for B to receive via socket
  let waitCount = 0;
  while (!messageReceivedByB && waitCount < 10) {
    await sleep(300);
    waitCount++;
  }

  if (!messageReceivedByB || messageReceivedByB.id !== sentMessage.id) {
    throw new Error('User B did not receive the realtime message');
  }
  console.log('SUCCESS: User B received message realtime!');

  // 7. Typing Indicator Test
  console.log('7. Testing typing indicator...');
  let typingReceivedByB = false;
  socketB.on('typing:start', (data) => {
    if (data.userId === userAId) {
      typingReceivedByB = true;
      console.log(`[Socket B received typing:start from User A]`);
    }
  });

  socketA.emit('typing:start', { conversationId: conversation.id });
  await sleep(500);
  if (!typingReceivedByB) {
    throw new Error('Typing indicator not received by User B');
  }
  socketA.emit('typing:stop', { conversationId: conversation.id });
  console.log('SUCCESS: Typing indicator verified!');

  // 8. Read Receipt Test
  console.log('8. Testing read receipt...');
  let readReceiptReceivedByA = false;
  socketA.on('message:read', (data) => {
    if (data.readerId === userBId) {
      readReceiptReceivedByA = true;
      console.log(`[Socket A received message:read from User B]`);
    }
  });

  socketB.emit('message:read', { conversationId: conversation.id });
  await sleep(500);
  if (!readReceiptReceivedByA) {
    throw new Error('Read receipt not received by User A');
  }
  console.log('SUCCESS: Read receipt verified!');

  // 9. Offline / Persistence Test: User B disconnects, User A sends message, User B reconnects & fetches DB
  console.log('9. Testing offline message delivery & database persistence...');
  socketB.disconnect();
  console.log('Socket B disconnected.');

  // User A sends message while B is offline
  const offlineMsgRes = await axios.post(
    `${API_BASE}/conversations/${conversation.id}/messages`,
    {
      content: 'Tin nhắn gửi khi B đang offline - phải lưu vào database!',
    },
    { headers: { Authorization: `Bearer ${tokenA}` } },
  );
  console.log(`Sent message to offline user: ${offlineMsgRes.data.id}`);

  // User B fetches conversation messages via REST
  const historyRes = await axios.get(
    `${API_BASE}/conversations/${conversation.id}/messages`,
    { headers: { Authorization: `Bearer ${tokenB}` } },
  );
  const foundInHistory = historyRes.data.some((m) => m.id === offlineMsgRes.data.id);
  if (!foundInHistory) {
    throw new Error('Offline message not persisted in database history');
  }
  console.log('SUCCESS: Offline message persisted and restored from PostgreSQL database!');

  // 10. Security & Authorization Test: User C (unauthorized) tries to access conversation
  console.log('10. Testing Security: User C attempts to access conversation...');
  try {
    await axios.get(`${API_BASE}/conversations/${conversation.id}/messages`, {
      headers: { Authorization: `Bearer ${tokenC}` },
    });
    throw new Error('SECURITY VIOLATION: User C was allowed to access private conversation!');
  } catch (err) {
    if (err.response && err.response.status === 403) {
      console.log('SUCCESS: User C received 403 Forbidden as expected!');
    } else {
      throw err;
    }
  }

  // 11. Message Recall Test
  console.log('11. Testing message recall...');
  const recallRes = await axios.delete(
    `${API_BASE}/messages/${sentMessage.id}/recall`,
    { headers: { Authorization: `Bearer ${tokenA}` } },
  );
  console.log('Recalled message:', recallRes.data);

  // Check updated message content in history
  const refreshedHistory = await axios.get(
    `${API_BASE}/conversations/${conversation.id}/messages`,
    { headers: { Authorization: `Bearer ${tokenA}` } },
  );
  const recalledMsg = refreshedHistory.data.find((m) => m.id === sentMessage.id);
  if (!recalledMsg || !recalledMsg.recalled) {
    throw new Error('Recalled message did not update to recalled status');
  }
  console.log(`SUCCESS: Recalled message shows content: "${recalledMsg.content}"`);

  socketA.disconnect();
  console.log('\n========================================');
  console.log('🎉 ALL REALTIME CHAT E2E TESTS PASSED 100%!');
  console.log('========================================');
}

main().catch((err) => {
  console.error('\n❌ E2E TEST FAILED:', err.message, err.response?.data || '');
  process.exit(1);
});
