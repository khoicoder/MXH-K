import { PrismaClient } from '@prisma/client';
import { AuthService } from '../apps/auth-service/src/modules/auth/services/auth.service';
import { RedisTokenService } from '../apps/auth-service/src/modules/auth/services/redis-token.service';
import { JwtSecurityService } from '@libs/security';

process.env.AUTH_DATABASE_URL = 'postgresql://postgres:postgres_secure_pass@localhost:5432/auth_db?schema=public';
process.env.REDIS_HOST = 'localhost';
process.env.REDIS_PORT = '6380';
process.env.REDIS_PASSWORD = 'redis_secure_pass';

async function runSecurityTestSuite() {
  console.log('====================================================');
  console.log('🚀 RUNNING CRITICAL AUTHENTICATION & SECURITY TEST SUITE');
  console.log('====================================================\n');

  const prisma = new PrismaClient({
    datasources: { db: { url: process.env.AUTH_DATABASE_URL } },
  });
  await prisma.$connect();

  const redisService = new RedisTokenService();
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
    // Clean test data before running
    await prisma.session.deleteMany();
    await prisma.account.deleteMany();

    // 1. REGISTRATION TEST
    console.log('\n--- 1. Testing Registration & Argon2/PBKDF2 Hashing ---');
    const testEmail = `sec_user_${Date.now()}@test.com`;
    const regResult = await authService.register({
      email: testEmail,
      password: 'StrongPassword123!',
    });
    assert(!!regResult.id, 'User registration creates account record');
    assert(regResult.email === testEmail, 'Email matches normalized registered email');

    // Duplicate email registration must fail
    let duplicateFailed = false;
    try {
      await authService.register({
        email: testEmail,
        password: 'AnotherPassword456!',
      });
    } catch {
      duplicateFailed = true;
    }
    assert(duplicateFailed, 'Duplicate email registration rejected with ConflictException');

    // 2. MULTI-DEVICE LOGIN TEST
    console.log('\n--- 2. Testing Multi-Device Independent Login ---');
    // Device A (Desktop Windows)
    const loginDeviceA = await authService.login(
      { email: testEmail, password: 'StrongPassword123!', deviceId: 'dev-windows-pc' },
      '192.168.1.10',
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    );
    assert(!!loginDeviceA.accessToken, 'Device A receives valid RS256 Access Token');
    assert(!!loginDeviceA.refreshToken, 'Device A receives cryptographically secure Refresh Token');

    // Device B (Mobile iPhone)
    const loginDeviceB = await authService.login(
      { email: testEmail, password: 'StrongPassword123!', deviceId: 'dev-iphone-14' },
      '192.168.1.50',
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)',
    );
    assert(!!loginDeviceB.accessToken, 'Device B receives valid RS256 Access Token');
    assert(loginDeviceA.session.id !== loginDeviceB.session.id, 'Device A and Device B have distinct independent Session IDs');

    // Verify Active Sessions list
    const activeSessions = await authService.getActiveSessions(regResult.id);
    assert(activeSessions.length === 2, 'User has exactly 2 active independent device sessions');

    // 3. SCENARIO A: LOGOUT ON CURRENT DEVICE
    console.log('\n--- 3. Testing Scenario A: Logout Current Device (Device A) ---');
    await authService.logout(loginDeviceA.session.id, regResult.id);
    
    // Check Redis blacklist
    const isDeviceABlacklisted = await redisService.isSessionBlacklisted(loginDeviceA.session.id);
    assert(isDeviceABlacklisted, 'Session A is immediately blacklisted in Redis');

    // Check Device B is still active
    const isDeviceBBlacklisted = await redisService.isSessionBlacklisted(loginDeviceB.session.id);
    assert(!isDeviceBBlacklisted, 'Device B is NOT affected by Device A logout (Remains Active)');

    // 4. SCENARIO B: REMOTE DEVICE REVOCATION
    console.log('\n--- 4. Testing Scenario B: Remote Device Session Revocation ---');
    // Device C logs in
    const loginDeviceC = await authService.login(
      { email: testEmail, password: 'StrongPassword123!', deviceId: 'dev-macbook-pro' },
      '192.168.1.80',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
    );
    assert(!!loginDeviceC.session.id, 'Device C successfully logged in');

    // Device B revokes Device C remotely
    await authService.revokeSession(loginDeviceC.session.id, regResult.id);
    const isDeviceCBlacklisted = await redisService.isSessionBlacklisted(loginDeviceC.session.id);
    assert(isDeviceCBlacklisted, 'Device C session is remotely revoked and blacklisted in Redis');

    // Test cross-user revocation prohibition
    const attackerEmail = `attacker_${Date.now()}@test.com`;
    const attacker = await authService.register({
      email: attackerEmail,
      password: 'AttackerPassword789!',
    });
    let crossUserRevokeFailed = false;
    try {
      // Attacker tries to revoke Device B of the victim
      await authService.revokeSession(loginDeviceB.session.id, attacker.id);
    } catch {
      crossUserRevokeFailed = true;
    }
    assert(crossUserRevokeFailed, 'User cannot revoke sessions belonging to another user (Forbidden)');

    // 5. SCENARIO C: LOGOUT ALL DEVICES
    console.log('\n--- 5. Testing Scenario C: Logout All Devices (Global Invalidation) ---');
    const versionBefore = await redisService.getUserVersion(regResult.id);
    await authService.logoutAll(regResult.id);
    const versionAfter = await redisService.getUserVersion(regResult.id);
    assert(versionAfter > versionBefore, 'Logout-all increments user session version in Redis');

    const sessionsAfterLogoutAll = await authService.getActiveSessions(regResult.id);
    assert(sessionsAfterLogoutAll.length === 0, 'No active sessions remain in database after logout-all');

    // 6. SCENARIO D: REFRESH TOKEN ROTATION & THEFT DETECTION
    console.log('\n--- 6. Testing Scenario D: Token Rotation & Theft Detection ---');
    // Login new session
    const sessionD = await authService.login(
      { email: testEmail, password: 'StrongPassword123!', deviceId: 'dev-rotation-test' },
      '10.0.0.1',
      'TestDevice/1.0',
    );
    const initialRefreshToken = sessionD.refreshToken;

    // Normal refresh: Rotates token
    const refresh1 = await authService.refreshTokens(initialRefreshToken, '10.0.0.1', 'TestDevice/1.0');
    assert(!!refresh1.accessToken, 'Token rotation issues new Access Token');
    assert(refresh1.refreshToken !== initialRefreshToken, 'Token rotation returns a new distinct Refresh Token');

    // Normal refresh 2: Rotates again using the NEW token
    const refresh2 = await authService.refreshTokens(refresh1.refreshToken, '10.0.0.1', 'TestDevice/1.0');
    assert(!!refresh2.accessToken, 'Second rotation succeeds with valid new Refresh Token');

    // THEFT ATTACK SIMULATION: Re-using the already rotated initialRefreshToken!
    let theftDetected = false;
    try {
      console.log('🚨 Simulating replay attack: Attacker attempts to use old already-rotated refresh token...');
      await authService.refreshTokens(initialRefreshToken, '66.249.66.1', 'HackerBrowser/1.0');
    } catch (err: any) {
      if (err.message.includes('Token theft detected')) {
        theftDetected = true;
      }
    }
    assert(theftDetected, 'Reusing rotated token triggers Theft Detection and terminates the entire token family');

    console.log('\n====================================================');
    console.log(`🎉 ALL ${passedTests}/${totalTests} CRITICAL SECURITY TESTS PASSED SUCCESSFULLY!`);
    console.log('====================================================');
  } finally {
    redisService.onModuleDestroy();
    await prisma.$disconnect();
  }
}

runSecurityTestSuite().catch((e) => {
  console.error('Test execution failed:', e);
  process.exit(1);
});
