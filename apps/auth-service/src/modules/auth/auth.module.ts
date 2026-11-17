import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { GoogleAuthService } from './services/google-auth.service';
import { RedisTokenService } from './services/redis-token.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, GoogleAuthService, RedisTokenService, PrismaService],
  exports: [AuthService, GoogleAuthService, RedisTokenService],
})
export class AuthModule {}
