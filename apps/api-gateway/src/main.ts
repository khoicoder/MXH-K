import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as path from 'path';
import * as fs from 'fs';
const cookieParser = require('cookie-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for any frontend origin (localhost or LAN/Radmin VPN IP)
  app.enableCors({
    origin: true,
    credentials: true,
  });

  app.use(cookieParser());

  // Static uploads directory for media files
  const uploadsDir = path.join(process.cwd(), 'uploads');
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }
  app.use('/api/uploads', express.static(uploadsDir));

  app.setGlobalPrefix('api');

  const port = process.env.GATEWAY_PORT || 4000;
  await app.listen(port);
  console.log(`MXH-K API Gateway is actively running on http://localhost:${port}/api`);
}

bootstrap();
