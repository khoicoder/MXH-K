import {
  Controller,
  All,
  Req,
  Res,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import axios, { AxiosRequestConfig, Method } from 'axios';
import { v4 as uuidv4 } from 'uuid';

const SERVICE_REGISTRY: Record<string, string> = {
  auth: process.env.AUTH_SERVICE_URL || 'http://localhost:3001',
  users: process.env.USER_SERVICE_URL || 'http://localhost:3002',
  friends: process.env.SOCIAL_SERVICE_URL || 'http://localhost:3003',
  follows: process.env.SOCIAL_SERVICE_URL || 'http://localhost:3003',
  blocks: process.env.SOCIAL_SERVICE_URL || 'http://localhost:3003',
  posts: process.env.POST_SERVICE_URL || 'http://localhost:3004',
  reactions: process.env.INTERACTION_SERVICE_URL || 'http://localhost:3005',
  comments: process.env.INTERACTION_SERVICE_URL || 'http://localhost:3005',
  feed: process.env.FEED_SERVICE_URL || 'http://localhost:3006',
  media: process.env.MEDIA_SERVICE_URL || 'http://localhost:3007',
  reels: process.env.REELS_SERVICE_URL || 'http://localhost:3008',
  notifications: process.env.NOTIF_SERVICE_URL || 'http://localhost:3009',
  search: process.env.SEARCH_SERVICE_URL || 'http://localhost:3010',
};

@Controller()
export class GatewayRouterController {
  private readonly logger = new Logger(GatewayRouterController.name);

  @All('api/:service*')
  async routeRequest(@Req() req: Request, @Res() res: Response) {
    const rawPath = req.originalUrl || req.url;
    const parts = rawPath.replace(/^\/api\//, '').split('/');
    const serviceKey = parts[0]?.split('?')[0];

    const targetBaseUrl = SERVICE_REGISTRY[serviceKey];
    if (!targetBaseUrl) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: `No service registered for prefix '/api/${serviceKey}'`,
      });
    }

    const correlationId = (req.headers['x-correlation-id'] as string) || uuidv4();
    const targetUrl = `${targetBaseUrl}${rawPath}`;

    try {
      const axiosConfig: AxiosRequestConfig = {
        method: req.method as Method,
        url: targetUrl,
        headers: {
          ...req.headers,
          host: new URL(targetBaseUrl).host,
          'x-correlation-id': correlationId,
        },
        params: req.query,
        data: req.body,
        timeout: 5000,
        validateStatus: () => true, // Forward all status codes directly
      };

      delete axiosConfig.headers?.['content-length'];

      const response = await axios(axiosConfig);

      // Forward Set-Cookie headers if present
      if (response.headers['set-cookie']) {
        res.setHeader('set-cookie', response.headers['set-cookie']);
      }

      res.setHeader('x-correlation-id', correlationId);
      return res.status(response.status).json(response.data);
    } catch (error: any) {
      this.logger.error(
        `[Gateway Proxy Error] Target: ${targetUrl} - Correlation: ${correlationId} - ${error.message}`,
      );

      return res.status(HttpStatus.BAD_GATEWAY).json({
        success: false,
        message: `Downstream service '${serviceKey}' is temporarily unavailable`,
        correlationId,
      });
    }
  }
}
