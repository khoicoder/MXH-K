export interface CurrentUserPayload {
    userId: string;
    sessionId: string;
    role?: string;
    email?: string;
}
export declare const CurrentUser: (...dataOrPipes: (import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>> | keyof CurrentUserPayload | undefined)[]) => ParameterDecorator;
