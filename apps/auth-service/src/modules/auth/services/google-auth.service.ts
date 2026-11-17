import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';
import { PrismaService } from '../../../prisma/prisma.service';
import { RedisTokenService } from './redis-token.service';
import { PasswordSecurityService } from '@libs/security';
import { JwtSecurityService } from '@libs/security';

export interface GoogleAuthPayload {
  googleId: string;
  email: string;
  displayName?: string;
  avatarUrl?: string;
  isEmailVerified: boolean;
}

@Injectable()
export class GoogleAuthService {
  private readonly logger = new Logger(GoogleAuthService.name);
  private oauthClient: OAuth2Client;
  private readonly clientId: string;
  private readonly clientSecret: string;
  private readonly callbackUrl: string;

  constructor(
    private readonly prisma: PrismaService,
    private readonly redisTokenService: RedisTokenService,
  ) {
    this.clientId = process.env.GOOGLE_CLIENT_ID || '';
    this.clientSecret = process.env.GOOGLE_CLIENT_SECRET || '';
    this.callbackUrl =
      process.env.GOOGLE_CALLBACK_URL || 'http://localhost:3000/auth/google/callback';

    this.oauthClient = new OAuth2Client(
      this.clientId,
      this.clientSecret,
      this.callbackUrl,
    );
  }

  getAuthorizationUrl(): string {
    return this.oauthClient.generateAuthUrl({
      access_type: 'offline',
      scope: ['openid', 'email', 'profile'],
      prompt: 'consent',
      redirect_uri: this.callbackUrl,
    });
  }

  async verifyAuthCode(code: string, redirectUri?: string): Promise<GoogleAuthPayload> {
    try {
      const client = new OAuth2Client(
        this.clientId,
        this.clientSecret,
        redirectUri || this.callbackUrl,
      );

      const { tokens } = await client.getToken(code);
      if (!tokens.id_token) {
        throw new UnauthorizedException('No ID token returned from Google authentication');
      }

      return this.verifyIdToken(tokens.id_token);
    } catch (err: any) {
      this.logger.error(`Google auth code exchange failed: ${err.message}`);
      throw new UnauthorizedException(`Google authentication failed: ${err.message}`);
    }
  }

  async verifyIdToken(idToken: string): Promise<GoogleAuthPayload> {
    try {
      const ticket = await this.oauthClient.verifyIdToken({
        idToken,
        audience: this.clientId,
      });

      const payload = ticket.getPayload();
      if (!payload || !payload.email) {
        throw new UnauthorizedException('Invalid Google token payload');
      }

      return {
        googleId: payload.sub,
        email: payload.email.toLowerCase(),
        displayName: payload.name || payload.email.split('@')[0],
        avatarUrl: payload.picture,
        isEmailVerified: payload.email_verified || false,
      };
    } catch (err: any) {
      this.logger.error(`Google ID token verification failed: ${err.message}`);
      throw new UnauthorizedException(`Failed to verify Google token: ${err.message}`);
    }
  }

  async authenticateWithGoogle(
    googleData: GoogleAuthPayload,
    deviceId?: string,
    deviceName?: string,
    ipAddress = '127.0.0.1',
    userAgent = 'Web Browser',
  ) {
    // 1. Check if account already exists with this googleId
    let account = await this.prisma.account.findUnique({
      where: { googleId: googleData.googleId },
    });

    if (!account) {
      // 2. Check if account exists with email
      account = await this.prisma.account.findUnique({
        where: { email: googleData.email },
      });

      if (account) {
        // Link Google ID to existing email account
        account = await this.prisma.account.update({
          where: { id: account.id },
          data: {
            googleId: googleData.googleId,
            isEmailVerified: true,
          },
        });
        this.logger.log(`Linked Google ID ${googleData.googleId} to existing user: ${account.id}`);
      } else {
        // 3. Register brand new account through Google
        account = await this.prisma.account.create({
          data: {
            email: googleData.email,
            googleId: googleData.googleId,
            isEmailVerified: true,
            status: 'ACTIVE',
          },
        });
        this.logger.log(`Created new account via Google OAuth: ${account.id} (${account.email})`);
      }
    }

    // Sync UserProfile in user_db
    try {
      const UserPrisma = require('../../../../../user-service/src/prisma/client').PrismaClient;
      const userPrisma = new UserPrisma({ datasources: { db: { url: process.env.USER_DATABASE_URL } } });
      await userPrisma.userProfile.upsert({
        where: { userId: account.id },
        create: {
          userId: account.id,
          username: `${googleData.email.split('@')[0]}_${account.id.substring(0, 4)}`,
          displayName: googleData.displayName || googleData.email.split('@')[0],
          avatarUrl: googleData.avatarUrl,
          settings: { create: {} },
        },
        update: {
          displayName: googleData.displayName || undefined,
          avatarUrl: googleData.avatarUrl || undefined,
        },
      });
      await userPrisma.$disconnect();
    } catch (e: any) {
      this.logger.warn(`Google auth user profile sync warning: ${e.message}`);
    }

    if (account.status !== 'ACTIVE') {
      throw new UnauthorizedException(`Account is ${account.status.toLowerCase()}`);
    }

    // 4. Create multi-device session
    const resolvedDeviceId = deviceId || `google_${Date.now()}`;
    const resolvedDeviceName = deviceName || 'Google Authenticated Device';

    const rawRefreshToken = PasswordSecurityService.generateSecureToken(32);
    const refreshTokenHash = PasswordSecurityService.hashToken(rawRefreshToken);
    const expiresAt = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);

    const session = await this.prisma.session.create({
      data: {
        userId: account.id,
        deviceId: resolvedDeviceId,
        deviceName: resolvedDeviceName,
        userAgent,
        ipAddress,
        expiresAt,
        refreshTokens: {
          create: {
            tokenFamilyId: resolvedDeviceId,
            tokenHash: refreshTokenHash,
            expiresAt,
          },
        },
      },
    });

    await this.prisma.session.update({
      where: { id: session.id },
      data: { tokenFamilyId: session.id },
    });
    await this.prisma.refreshToken.updateMany({
      where: { sessionId: session.id },
      data: { tokenFamilyId: session.id },
    });

    const userVersion = await this.redisTokenService.getUserVersion(account.id);

    const accessToken = JwtSecurityService.signAccessToken({
      sub: account.id,
      sid: session.id,
      ver: userVersion,
      email: account.email,
    }, '15m');

    return {
      accessToken,
      refreshToken: rawRefreshToken,
      user: {
        id: account.id,
        email: account.email,
        status: account.status,
        displayName: googleData.displayName,
        avatarUrl: googleData.avatarUrl,
      },
      session: {
        id: session.id,
        deviceId: session.deviceId,
        deviceName: session.deviceName,
        expiresAt: session.expiresAt,
      },
    };
  }
}
