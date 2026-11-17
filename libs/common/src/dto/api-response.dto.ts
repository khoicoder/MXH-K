export class ApiResponseDto<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: {
    code: string;
    details?: any;
  };
  timestamp: string;
  correlationId?: string;

  constructor(success: boolean, data?: T, message?: string, error?: { code: string; details?: any }, correlationId?: string) {
    this.success = success;
    this.data = data;
    this.message = message;
    this.error = error;
    this.timestamp = new Date().toISOString();
    this.correlationId = correlationId;
  }

  static success<T>(data: T, message = 'Success', correlationId?: string): ApiResponseDto<T> {
    return new ApiResponseDto<T>(true, data, message, undefined, correlationId);
  }

  static failure(code: string, message: string, details?: any, correlationId?: string): ApiResponseDto<null> {
    return new ApiResponseDto<null>(false, undefined, message, { code, details }, correlationId);
  }
}
