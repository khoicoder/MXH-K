"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponseDto = void 0;
class ApiResponseDto {
    success;
    message;
    data;
    error;
    timestamp;
    correlationId;
    constructor(success, data, message, error, correlationId) {
        this.success = success;
        this.data = data;
        this.message = message;
        this.error = error;
        this.timestamp = new Date().toISOString();
        this.correlationId = correlationId;
    }
    static success(data, message = 'Success', correlationId) {
        return new ApiResponseDto(true, data, message, undefined, correlationId);
    }
    static failure(code, message, details, correlationId) {
        return new ApiResponseDto(false, undefined, message, { code, details }, correlationId);
    }
}
exports.ApiResponseDto = ApiResponseDto;
//# sourceMappingURL=api-response.dto.js.map