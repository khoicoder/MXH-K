import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cookieParser = require('cookie-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for any frontend origin (localhost or LAN/Radmin VPN IP)
  app.enableCors({
    origin: true,
    credentials: true,
  });

  app.use(cookieParser());
  app.setGlobalPrefix('api');

  const port = process.env.GATEWAY_PORT || 4000;
  await app.listen(port);
  console.log(`MXH-K API Gateway is actively running on http://localhost:${port}/api`);
}

bootstrap();
