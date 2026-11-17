import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Param,
  Req,
  Res,
  Headers,
  UseGuards,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from '../services/auth.service';
import { GoogleAuthService } from '../services/google-auth.service';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';
import { GoogleAuthDto } from '../dto/google-auth.dto';
import { JwtSecurityService } from '@libs/security';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly googleAuthService: GoogleAuthService,
  ) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user account' })
  @ApiResponse({ status: 201, description: 'Account registered successfully' })
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login with email, password, and device fingerprint' })
  async login(
    @Body() dto: LoginDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const ip = req.ip || (req.headers['x-forwarded-for'] as string) || '127.0.0.1';
    const userAgent = req.headers['user-agent'] || 'Unknown Agent';

    const result = await this.authService.login(dto, ip, userAgent);

    // Set Refresh Token in Secure HttpOnly Cookie
    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/api/auth',
      maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days
    });

    return {
      accessToken: result.accessToken,
      user: result.user,
      session: result.session,
    };
  }

  @Get('google/url')
  @ApiOperation({ summary: 'Get Google OAuth2 authorization URL' })
  getGoogleAuthUrl() {
    return { url: this.googleAuthService.getAuthorizationUrl() };
  }

  @Post('google')
  @ApiOperation({ summary: 'Login or Register with Google OAuth (authorization code or idToken)' })
  async googleAuth(
    @Body() dto: GoogleAuthDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    if (!dto.code && !dto.idToken) {
      throw new BadRequestException('Either code or idToken must be provided');
    }

    const ip = req.ip || (req.headers['x-forwarded-for'] as string) || '127.0.0.1';
    const userAgent = req.headers['user-agent'] || 'Unknown Agent';

    let googlePayload;
    if (dto.code) {
      googlePayload = await this.googleAuthService.verifyAuthCode(dto.code, dto.redirectUri);
    } else {
      googlePayload = await this.googleAuthService.verifyIdToken(dto.idToken!);
    }

    const result = await this.googleAuthService.authenticateWithGoogle(
      googlePayload,
      dto.deviceId,
      dto.deviceName,
      ip,
      userAgent,
    );

    // Set Refresh Token in Secure HttpOnly Cookie
    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/api/auth',
      maxAge: 14 * 24 * 60 * 60 * 1000,
    });

    return {
      accessToken: result.accessToken,
      user: result.user,
      session: result.session,
    };
  }

  @Post('refresh')
  @ApiOperation({ summary: 'Rotate refresh token and issue new short-lived access token' })
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const refreshToken = req.cookies?.['refreshToken'] || req.body?.refreshToken;
    const ip = req.ip || (req.headers['x-forwarded-for'] as string) || '127.0.0.1';
    const userAgent = req.headers['user-agent'] || 'Unknown Agent';

    const result = await this.authService.refreshTokens(refreshToken, ip, userAgent);

    // Rotate Cookie
    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/api/auth',
      maxAge: 14 * 24 * 60 * 60 * 1000,
    });

    return {
      accessToken: result.accessToken,
    };
  }

  @Post('logout')
  @ApiOperation({ summary: 'Scenario A: Logout current device session' })
  async logout(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      try {
        const payload = JwtSecurityService.verifyAccessToken(authHeader.substring(7));
        await this.authService.logout(payload.sid, payload.sub);
      } catch {
        // Ignored if token expired, still clear cookie
      }
    }

    res.clearCookie('refreshToken', { path: '/api/auth' });
    return { success: true, message: 'Logged out successfully' };
  }

  @Get('sessions')
  @ApiOperation({ summary: 'List all active device sessions for current user' })
  async getSessions(@Req() req: Request) {
    const payload = this.extractToken(req);
    return this.authService.getActiveSessions(payload.sub);
  }

  @Delete('sessions/:sessionId')
  @ApiOperation({ summary: 'Scenario B: Revoke a specific remote device session' })
  async revokeSession(
    @Param('sessionId') sessionId: string,
    @Req() req: Request,
  ) {
    const payload = this.extractToken(req);
    return this.authService.revokeSession(sessionId, payload.sub);
  }

  @Post('logout-all')
  @ApiOperation({ summary: 'Scenario C: Logout from all devices immediately' })
  async logoutAll(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const payload = this.extractToken(req);
    const result = await this.authService.logoutAll(payload.sub);
    res.clearCookie('refreshToken', { path: '/api/auth' });
    return result;
  }

  private extractToken(req: Request) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing or invalid Authorization header');
    }
    try {
      return JwtSecurityService.verifyAccessToken(authHeader.substring(7));
    } catch {
      throw new UnauthorizedException('Invalid or expired access token');
    }
  }
}
