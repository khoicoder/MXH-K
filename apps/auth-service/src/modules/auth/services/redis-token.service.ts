import { Injectable, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisTokenService implements OnModuleDestroy {
  private client: Redis;

  constructor() {
    const redisHost = process.env.REDIS_HOST || 'localhost';
    const redisPort = parseInt(process.env.REDIS_PORT || '6380', 10);
    const redisPassword = process.env.REDIS_PASSWORD || 'redis_secure_pass';

    this.client = new Redis({
      host: redisHost,
      port: redisPort,
      password: redisPassword,
      lazyConnect: true,
      maxRetriesPerRequest: 3,
    });
    this.client.connect().catch((err) => {
      console.warn('Redis connection warning:', err.message);
    });
  }

  async blacklistSession(sessionId: string, ttlSeconds = 900): Promise<void> {
    try {
      await this.client.set(`blacklist:session:${sessionId}`, 'REVOKED', 'EX', ttlSeconds);
    } catch (e) {
      console.error('Failed to blacklist session in Redis:', e);
    }
  }

  async isSessionBlacklisted(sessionId: string): Promise<boolean> {
    try {
      const res = await this.client.get(`blacklist:session:${sessionId}`);
      return res === 'REVOKED';
    } catch {
      return false;
    }
  }

  async incrementUserVersion(userId: string): Promise<number> {
    try {
      return await this.client.incr(`auth:user_version:${userId}`);
    } catch {
      return 1;
    }
  }

  async getUserVersion(userId: string): Promise<number> {
    try {
      const ver = await this.client.get(`auth:user_version:${userId}`);
      return ver ? parseInt(ver, 10) : 0;
    } catch {
      return 0;
    }
  }

  onModuleDestroy() {
    this.client.disconnect();
  }
}
