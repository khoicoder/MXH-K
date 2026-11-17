export declare class ApiResponseDto<T> {
    success: boolean;
    message?: string;
    data?: T;
    error?: {
        code: string;
        details?: any;
    };
    timestamp: string;
    correlationId?: string;
    constructor(success: boolean, data?: T, message?: string, error?: {
        code: string;
        details?: any;
    }, correlationId?: string);
    static success<T>(data: T, message?: string, correlationId?: string): ApiResponseDto<T>;
    static failure(code: string, message: string, details?: any, correlationId?: string): ApiResponseDto<null>;
}
