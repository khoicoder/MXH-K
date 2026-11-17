export declare class PasswordSecurityService {
    static hashPassword(password: string): Promise<string>;
    static verifyPassword(password: string, storedHash: string): Promise<boolean>;
    static generateSecureToken(bytes?: number): string;
    static hashToken(token: string): string;
}
