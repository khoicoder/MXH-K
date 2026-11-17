import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponseDto } from '../dto/api-response.dto';
import { Request } from 'express';

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, ApiResponseDto<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ApiResponseDto<T>> {
    const request = context.switchToHttp().getRequest<Request>();
    const correlationId = (request?.headers?.['x-correlation-id'] as string) || undefined;

    return next.handle().pipe(
      map((data) => {
        // If data is already an instance of ApiResponseDto, return it directly
        if (data && typeof data === 'object' && 'success' in data && 'timestamp' in data) {
          return data;
        }
        return ApiResponseDto.success(data, 'Success', correlationId);
      }),
    );
  }
}
