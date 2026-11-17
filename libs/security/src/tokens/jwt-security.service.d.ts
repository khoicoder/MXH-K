export interface JwtAccessTokenPayload {
    sub: string;
    sid: string;
    ver: number;
    role?: string;
    email?: string;
}
export declare class JwtSecurityService {
    private static privateKey;
    private static publicKey;
    static initializeKeys(privKey?: string, pubKey?: string): void;
    static signAccessToken(payload: JwtAccessTokenPayload, expiresIn?: string): string;
    static verifyAccessToken(token: string): JwtAccessTokenPayload;
    static getPublicKey(): string;
}
