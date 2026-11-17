import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import Redis from 'ioredis';
import { JwtSecurityService } from '@libs/security';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  private redis: Redis;

  constructor() {
    const redisHost = process.env.REDIS_HOST || 'localhost';
    const redisPort = parseInt(process.env.REDIS_PORT || '6380', 10);
    const redisPassword = process.env.REDIS_PASSWORD || 'redis_secure_pass';

    this.redis = new Redis({
      host: redisHost,
      port: redisPort,
      password: redisPassword,
      lazyConnect: true,
      maxRetriesPerRequest: 2,
    });
    this.redis.connect().catch(() => {});
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const path = request.path;

    // Public routes that do not require an active access token
    const isPublicRoute =
      path.startsWith('/api/auth/register') ||
      path.startsWith('/api/auth/login') ||
      path.startsWith('/api/auth/refresh') ||
      path.startsWith('/api/auth/google') ||
      path.startsWith('/api/docs') ||
      path.startsWith('/api/uploads') ||
      path.startsWith('/api/search') ||
      (path.startsWith('/api/users') && request.method === 'GET' && !path.startsWith('/api/users/me')) ||
      (path.startsWith('/api/feed/explore') && request.method === 'GET') ||
      (path.startsWith('/api/reels/feed') && request.method === 'GET') ||
      (path.startsWith('/api/comments') && request.method === 'GET') ||
      (path.startsWith('/api/reactions') && request.method === 'GET') ||
      (path.startsWith('/api/posts') && request.method === 'GET' && !path.startsWith('/api/posts/saved'));

    const authHeader = request.headers.authorization;

    if (isPublicRoute) {
      if (authHeader && authHeader.startsWith('Bearer ')) {
        try {
          const token = authHeader.substring(7);
          const payload = JwtSecurityService.verifyAccessToken(token);
          request.headers['x-user-id'] = payload.sub;
          request.headers['x-session-id'] = payload.sid;
          request.headers['x-user-role'] = payload.role || 'USER';
        } catch {
          // Ignore invalid token on public routes
        }
      }
      return true;
    }

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Authentication token missing or invalid format');
    }

    const token = authHeader.substring(7);

    try {
      const payload = JwtSecurityService.verifyAccessToken(token);

      // Check 1: Is this specific sessionId blacklisted in Redis?
      const isBlacklisted = await this.redis.get(`blacklist:session:${payload.sid}`);
      if (isBlacklisted === 'REVOKED') {
        throw new UnauthorizedException('This session has been revoked. Please log in again.');
      }

      // Check 2: Has the user performed a logout-all or theft reset (version mismatch)?
      const currentVersion = await this.redis.get(`auth:user_version:${payload.sub}`);
      if (currentVersion && parseInt(currentVersion, 10) > payload.ver) {
        throw new UnauthorizedException('Token invalidated by security event or global logout.');
      }

      // Inject parsed user info into headers for downstream microservices
      request.headers['x-user-id'] = payload.sub;
      request.headers['x-session-id'] = payload.sid;
      request.headers['x-user-role'] = payload.role || 'USER';

      return true;
    } catch (err: any) {
      if (err instanceof UnauthorizedException) {
        throw err;
      }
      throw new UnauthorizedException('Invalid or expired authentication token');
    }
  }
}
