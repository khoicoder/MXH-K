import { PrismaClient } from '@prisma/client';
import { GoogleAuthService } from '../apps/auth-service/src/modules/auth/services/google-auth.service';
import { AuthService } from '../apps/auth-service/src/modules/auth/services/auth.service';
import { RedisTokenService } from '../apps/auth-service/src/modules/auth/services/redis-token.service';
import { JwtSecurityService } from '@libs/security';

process.env.AUTH_DATABASE_URL = 'postgresql://postgres:postgres_secure_pass@localhost:5432/auth_db?schema=public';
process.env.REDIS_HOST = 'localhost';
process.env.REDIS_PORT = '6380';
process.env.REDIS_PASSWORD = 'redis_secure_pass';
process.env.GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || 'your-google-client-id.apps.googleusercontent.com';
process.env.GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || 'your-google-client-secret';
process.env.GOOGLE_CALLBACK_URL = 'http://localhost:3000/auth/google/callback';

async function runGoogleAuthTestSuite() {
  console.log('====================================================');
  console.log('🚀 RUNNING GOOGLE OAUTH PLATFORM VERIFICATION TEST SUITE');
  console.log('====================================================\n');

  const prisma = new PrismaClient({
    datasources: { db: { url: process.env.AUTH_DATABASE_URL } },
  });
  await prisma.$connect();

  const redisService = new RedisTokenService();
  const googleAuthService = new GoogleAuthService(prisma as any, redisService);
  const authService = new AuthService(prisma as any, redisService);

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
    // 1. Google OAuth URL Generation
    console.log('\n--- 1. Testing Google OAuth URL Generation ---');
    const authUrl = googleAuthService.getAuthorizationUrl();
    assert(
      authUrl.includes('accounts.google.com/o/oauth2/v2/auth') || authUrl.includes('accounts.google.com'),
      'Generated URL points to Google OAuth endpoint',
    );
    assert(
      authUrl.includes(process.env.GOOGLE_CLIENT_ID || 'your-google-client-id'),
      'URL contains correct Google Client ID',
    );
    assert(
      authUrl.includes(encodeURIComponent('http://localhost:3000/auth/google/callback')),
      'URL contains configured Redirect URI callback',
    );
    assert(
      authUrl.includes('scope=openid') && authUrl.includes('email') && authUrl.includes('profile'),
      'URL requests openid, email, and profile scopes',
    );

    // 2. Google OAuth Registration (New User)
    console.log('\n--- 2. Testing Google OAuth Registration (New Account) ---');
    const testGoogleId1 = `google_sub_${Date.now()}`;
    const testEmail1 = `google_user_${Date.now()}@gmail.com`;

    const registerResult = await googleAuthService.authenticateWithGoogle(
      {
        googleId: testGoogleId1,
        email: testEmail1,
        displayName: 'Google Dev User',
        avatarUrl: 'https://lh3.googleusercontent.com/a/test-avatar',
        isEmailVerified: true,
      },
      'device_chrome_1',
      'Google Chrome on Windows 11',
      '192.168.1.50',
      'Mozilla/5.0 Chrome/120',
    );

    assert(!!registerResult.accessToken, 'Access token is issued on Google registration');
    assert(!!registerResult.refreshToken, 'Refresh token is issued on Google registration');
    assert(registerResult.user.email === testEmail1, 'Created user email matches Google email');
    assert(registerResult.session.deviceId === 'device_chrome_1', 'Session stores device fingerprint');

    // Verify token validity with RS256
    const payload = JwtSecurityService.verifyAccessToken(registerResult.accessToken);
    assert(payload.sub === registerResult.user.id, 'RS256 JWT sub matches account ID');
    assert(payload.email === testEmail1, 'RS256 JWT contains email');
    assert(payload.sid === registerResult.session.id, 'RS256 JWT contains session ID');

    // Verify database state
    const createdAccount = await prisma.account.findUnique({
      where: { id: registerResult.user.id },
    });
    assert(!!createdAccount, 'Account record exists in PostgreSQL');
    assert(createdAccount?.googleId === testGoogleId1, 'Account has associated googleId');
    assert(createdAccount?.isEmailVerified === true, 'Email is marked verified from Google OAuth');
    assert(createdAccount?.passwordHash === null, 'Password hash is null for direct Google signup');

    // 3. Existing Google User Login (Idempotency)
    console.log('\n--- 3. Testing Google User Subsequent Login ---');
    const loginResult = await googleAuthService.authenticateWithGoogle(
      {
        googleId: testGoogleId1,
        email: testEmail1,
        displayName: 'Google Dev User',
        avatarUrl: 'https://lh3.googleusercontent.com/a/test-avatar',
        isEmailVerified: true,
      },
      'device_mac_2',
      'Safari on macOS Sonoma',
      '192.168.1.51',
      'Mozilla/5.0 Safari/605',
    );

    assert(loginResult.user.id === registerResult.user.id, 'Existing account ID reused (no duplicate user created)');
    assert(loginResult.session.id !== registerResult.session.id, 'New distinct session created for second device');

    const totalAccounts = await prisma.account.count({ where: { googleId: testGoogleId1 } });
    assert(totalAccounts === 1, 'Strict uniqueness constraint on googleId maintained');

    // 4. Account Linking (Existing Email User Links Google)
    console.log('\n--- 4. Testing Account Linking (Email User signs in with Google) ---');
    const emailOnlyUser = `regular_user_${Date.now()}@gmail.com`;
    const standardReg = await authService.register({
      email: emailOnlyUser,
      password: 'OriginalPassword123!',
    });
    assert(!!standardReg.id, 'Standard email account registered');

    const testGoogleId2 = `google_sub_linked_${Date.now()}`;
    const linkResult = await googleAuthService.authenticateWithGoogle({
      googleId: testGoogleId2,
      email: emailOnlyUser,
      displayName: 'Linked Account User',
      isEmailVerified: true,
    });

    assert(linkResult.user.id === standardReg.id, 'Google auth linked to existing user ID');

    const linkedAccount = await prisma.account.findUnique({
      where: { id: standardReg.id },
    });
    assert(linkedAccount?.googleId === testGoogleId2, 'Account updated with googleId');
    assert(!!linkedAccount?.passwordHash, 'Existing password remains preserved after linking');

    // Verify the user can still log in with their original password
    const passwordLoginResult = await authService.login(
      { email: emailOnlyUser, password: 'OriginalPassword123!' },
      '127.0.0.1',
      'Test Agent',
    );
    assert(passwordLoginResult.user.id === standardReg.id, 'User can still login via password after linking Google');

    // 5. Google Session Refresh Token Rotation
    console.log('\n--- 5. Testing RFC 6819 Refresh Token Rotation on Google Session ---');
    const rotateResult = await authService.refreshTokens(
      loginResult.refreshToken,
      '192.168.1.51',
      'Mozilla/5.0 Safari/605',
    );
    assert(!!rotateResult.accessToken, 'Access token refreshed successfully');
    assert(!!rotateResult.refreshToken, 'New refresh token issued');
    assert(rotateResult.refreshToken !== loginResult.refreshToken, 'Refresh token rotated');

    // 6. Suspended Account Block
    console.log('\n--- 6. Testing Suspended Account Block with Google OAuth ---');
    await prisma.account.update({
      where: { id: registerResult.user.id },
      data: { status: 'SUSPENDED' },
    });

    let suspendedBlocked = false;
    try {
      await googleAuthService.authenticateWithGoogle({
        googleId: testGoogleId1,
        email: testEmail1,
        isEmailVerified: true,
      });
    } catch (err: any) {
      suspendedBlocked = true;
      assert(err.message.includes('suspended'), 'Suspended Google account rejected');
    }
    assert(suspendedBlocked, 'Suspended user rejected from Google authentication');

    console.log('\n====================================================');
    console.log(`🎉 ALL ${passedTests}/${totalTests} GOOGLE OAUTH TESTS PASSED PERFECTLY!`);
    console.log('====================================================\n');
  } finally {
    await prisma.$disconnect();
    redisService.onModuleDestroy();
  }
}

runGoogleAuthTestSuite().catch((err) => {
  console.error('Test suite failed:', err);
  process.exit(1);
});
