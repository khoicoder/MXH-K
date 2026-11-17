import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  NotFoundException,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { RedisTokenService } from './redis-token.service';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';
import { PasswordSecurityService } from '@libs/security';
import { JwtSecurityService } from '@libs/security';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly redisTokenService: RedisTokenService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.prisma.account.findUnique({
      where: { email: dto.email.toLowerCase() },
    });
    if (existing) {
      throw new ConflictException('Email address is already registered');
    }

    const passwordHash = await PasswordSecurityService.hashPassword(dto.password);

    const account = await this.prisma.account.create({
      data: {
        email: dto.email.toLowerCase(),
        passwordHash,
      },
      select: {
        id: true,
        email: true,
        status: true,
        isEmailVerified: true,
        createdAt: true,
      },
    });

    this.logger.log(`Account registered successfully: ${account.id}`);

    // Sync default profile to user_db
    try {
      const UserPrisma = require('../../../../../user-service/src/prisma/client').PrismaClient;
      const userPrisma = new UserPrisma({ datasources: { db: { url: process.env.USER_DATABASE_URL } } });
      const rawName = (dto as any).displayName || dto.username || dto.email.split('@')[0];
      const username = dto.username || `${dto.email.split('@')[0]}_${account.id.substring(0, 4)}`;
      await userPrisma.userProfile.upsert({
        where: { userId: account.id },
        create: {
          userId: account.id,
          username,
          displayName: rawName,
          settings: { create: {} },
        },
        update: {},
      });
      await userPrisma.$disconnect();
    } catch (e: any) {
      this.logger.warn(`Could not sync UserProfile: ${e.message}`);
    }

    return account;
  }

  async login(dto: LoginDto, ipAddress: string, userAgent: string) {
    const account = await this.prisma.account.findUnique({
      where: { email: dto.email.toLowerCase() },
    });
    if (!account || !account.passwordHash) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isMatch = await PasswordSecurityService.verifyPassword(
      dto.password,
      account.passwordHash,
    );
    if (!isMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (account.status !== 'ACTIVE') {
      throw new ForbiddenException(`Account is ${account.status.toLowerCase()}`);
    }

    const deviceId = dto.deviceId || `device_${Date.now()}`;
    const deviceName = dto.deviceName || this.parseDeviceName(userAgent);

    // Generate tokens
    const rawRefreshToken = PasswordSecurityService.generateSecureToken(32);
    const refreshTokenHash = PasswordSecurityService.hashToken(rawRefreshToken);
    const expiresAt = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000); // 14 days

    // Get current user version from Redis
    const userVersion = await this.redisTokenService.getUserVersion(account.id);

    // Create session in database
    const session = await this.prisma.session.create({
      data: {
        userId: account.id,
        deviceId,
        deviceName,
        userAgent,
        ipAddress,
        expiresAt,
        refreshTokens: {
          create: {
            tokenFamilyId: deviceId, // Initially bind token family
            tokenHash: refreshTokenHash,
            expiresAt,
          },
        },
      },
    });

    // Sync token family ID with session ID
    await this.prisma.session.update({
      where: { id: session.id },
      data: { tokenFamilyId: session.id },
    });
    await this.prisma.refreshToken.updateMany({
      where: { sessionId: session.id },
      data: { tokenFamilyId: session.id },
    });

    // Issue RS256 Access Token
    const accessToken = JwtSecurityService.signAccessToken({
      sub: account.id,
      sid: session.id,
      ver: userVersion,
      email: account.email,
    }, '15m');

    // Fetch or create user profile from user_db
    let userProfile: any = null;
    try {
      const UserPrisma = require('../../../../../user-service/src/prisma/client').PrismaClient;
      const userPrisma = new UserPrisma({ datasources: { db: { url: process.env.USER_DATABASE_URL } } });
      userProfile = await userPrisma.userProfile.findUnique({ where: { userId: account.id } });
      if (!userProfile) {
        userProfile = await userPrisma.userProfile.create({
          data: {
            userId: account.id,
            username: `${account.email.split('@')[0]}_${account.id.substring(0, 4)}`,
            displayName: account.email.split('@')[0],
            settings: { create: {} },
          },
        });
      }
      await userPrisma.$disconnect();
    } catch {}

    return {
      accessToken,
      refreshToken: rawRefreshToken,
      user: {
        id: account.id,
        email: account.email,
        status: account.status,
        displayName: userProfile?.displayName || account.email.split('@')[0],
        username: userProfile?.username || account.email.split('@')[0],
        avatarUrl: userProfile?.avatarUrl || null,
        bio: userProfile?.bio || '',
      },
      session: {
        id: session.id,
        deviceId: session.deviceId,
        deviceName: session.deviceName,
        expiresAt: session.expiresAt,
      },
    };
  }

  /**
   * Scenario D: Token Theft & Replay Attack Detection via RFC 6819 Token Rotation
   */
  async refreshTokens(rawRefreshToken: string, ipAddress: string, userAgent: string) {
    if (!rawRefreshToken) {
      throw new UnauthorizedException('Refresh token is required');
    }

    const incomingHash = PasswordSecurityService.hashToken(rawRefreshToken);

    const storedToken = await this.prisma.refreshToken.findUnique({
      where: { tokenHash: incomingHash },
      include: {
        session: {
          include: { account: true },
        },
      },
    });

    if (!storedToken) {
      this.logger.warn(`Refresh token lookup failed. Unknown token hash from IP: ${ipAddress}`);
      throw new UnauthorizedException('Invalid refresh token');
    }

    const session = storedToken.session;

    // CHECK FOR THEFT: If this token was ALREADY REVOKED/ROTATED, this is a replay attack!
    if (storedToken.isRevoked || session.revokedAt) {
      this.logger.error(
        `[SECURITY ALERT - REPLAY ATTACK] Token ${storedToken.id} (family ${storedToken.tokenFamilyId}) was reused! Revoking entire token family!`,
      );

      // Invalidate all tokens in this family
      await this.prisma.refreshToken.updateMany({
        where: { tokenFamilyId: storedToken.tokenFamilyId },
        data: { isRevoked: true },
      });

      // Revoke the session
      await this.prisma.session.update({
        where: { id: session.id },
        data: {
          revokedAt: new Date(),
          revokeReason: 'TOKEN_FAMILY_THEFT_DETECTED',
        },
      });

      // Invalidate in Redis so active access tokens are rejected immediately
      await this.redisTokenService.incrementUserVersion(session.userId);
      await this.redisTokenService.blacklistSession(session.id, 900);

      throw new UnauthorizedException('Token theft detected. All active sessions have been invalidated.');
    }

    // Check expiry
    if (new Date() > storedToken.expiresAt) {
      await this.prisma.refreshToken.update({
        where: { id: storedToken.id },
        data: { isRevoked: true },
      });
      throw new UnauthorizedException('Refresh token expired. Please log in again.');
    }

    // Mark current token as rotated (revoked)
    await this.prisma.refreshToken.update({
      where: { id: storedToken.id },
      data: { isRevoked: true },
    });

    // Perform Token Rotation: Generate new Refresh Token
    const newRawRefreshToken = PasswordSecurityService.generateSecureToken(32);
    const newRefreshTokenHash = PasswordSecurityService.hashToken(newRawRefreshToken);
    const newExpiresAt = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);

    // Save new active token under the same tokenFamilyId
    await this.prisma.refreshToken.create({
      data: {
        sessionId: session.id,
        tokenFamilyId: storedToken.tokenFamilyId,
        tokenHash: newRefreshTokenHash,
        expiresAt: newExpiresAt,
      },
    });

    await this.prisma.session.update({
      where: { id: session.id },
      data: {
        lastUsedAt: new Date(),
        ipAddress,
        userAgent,
      },
    });

    const userVersion = await this.redisTokenService.getUserVersion(session.userId);

    const newAccessToken = JwtSecurityService.signAccessToken({
      sub: session.userId,
      sid: session.id,
      ver: userVersion,
      email: session.account.email,
    }, '15m');

    return {
      accessToken: newAccessToken,
      refreshToken: newRawRefreshToken,
    };
  }

  /**
   * Scenario A: Logout from current device
   */
  async logout(sessionId: string, userId: string) {
    const session = await this.prisma.session.findUnique({
      where: { id: sessionId },
    });

    if (session && session.userId === userId) {
      await this.prisma.session.update({
        where: { id: sessionId },
        data: {
          revokedAt: new Date(),
          revokeReason: 'USER_LOGOUT',
        },
      });

      await this.prisma.refreshToken.updateMany({
        where: { sessionId },
        data: { isRevoked: true },
      });

      // Push to Redis blacklist with 15m TTL
      await this.redisTokenService.blacklistSession(sessionId, 900);
    }

    return { success: true, message: 'Logged out successfully' };
  }

  /**
   * Scenario B: Logout from specific remote device
   */
  async revokeSession(targetSessionId: string, currentUserId: string) {
    const session = await this.prisma.session.findUnique({
      where: { id: targetSessionId },
    });

    if (!session) {
      throw new NotFoundException('Session not found');
    }

    if (session.userId !== currentUserId) {
      throw new ForbiddenException('Cannot revoke session belonging to another user');
    }

    await this.prisma.session.update({
      where: { id: targetSessionId },
      data: {
        revokedAt: new Date(),
        revokeReason: 'REMOTE_REVOCATION',
      },
    });

    await this.prisma.refreshToken.updateMany({
      where: { sessionId: targetSessionId },
      data: { isRevoked: true },
    });

    // Push remote session to Redis blacklist immediately
    await this.redisTokenService.blacklistSession(targetSessionId, 900);

    return { success: true, message: 'Device session revoked' };
  }

  /**
   * Scenario C: Logout all devices
   */
  async logoutAll(userId: string) {
    const userSessions = await this.prisma.session.findMany({
      where: { userId },
      select: { id: true },
    });

    const sessionIds = userSessions.map((s) => s.id);

    await this.prisma.session.updateMany({
      where: { userId },
      data: {
        revokedAt: new Date(),
        revokeReason: 'LOGOUT_ALL',
      },
    });

    await this.prisma.refreshToken.updateMany({
      where: { sessionId: { in: sessionIds } },
      data: { isRevoked: true },
    });

    // Increment user version in Redis to invalidate all issued JWTs instantly
    const newVersion = await this.redisTokenService.incrementUserVersion(userId);

    this.logger.log(`All sessions revoked for user ${userId}. New session version: ${newVersion}`);
    return { success: true, message: 'All devices logged out successfully' };
  }

  async getActiveSessions(userId: string) {
    return this.prisma.session.findMany({
      where: {
        userId,
        revokedAt: null,
        expiresAt: { gt: new Date() },
      },
      select: {
        id: true,
        deviceId: true,
        deviceName: true,
        ipAddress: true,
        userAgent: true,
        createdAt: true,
        lastUsedAt: true,
      },
      orderBy: { lastUsedAt: 'desc' },
    });
  }

  private parseDeviceName(userAgent: string): string {
    if (!userAgent) return 'Unknown Device';
    if (userAgent.includes('Windows')) return 'Windows PC';
    if (userAgent.includes('Macintosh')) return 'Macintosh';
    if (userAgent.includes('iPhone')) return 'iPhone';
    if (userAgent.includes('Android')) return 'Android Device';
    if (userAgent.includes('Linux')) return 'Linux Device';
    return 'Web Browser';
  }
}
