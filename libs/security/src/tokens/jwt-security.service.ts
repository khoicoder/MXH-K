import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';

export interface JwtAccessTokenPayload {
  sub: string;       // userId
  sid: string;       // sessionId
  ver: number;       // session version
  role?: string;
  email?: string;
}

export class JwtSecurityService {
  private static privateKey: string;
  private static publicKey: string;

  static initializeKeys(privKey?: string, pubKey?: string) {
    if (privKey && pubKey) {
      this.privateKey = privKey;
      this.publicKey = pubKey;
    } else {
      // Generate ephemeral 2048-bit RSA keypair if none provided in environment
      const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: { type: 'spki', format: 'pem' },
        privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
      });
      this.privateKey = privateKey;
      this.publicKey = publicKey;
    }
  }

  static signAccessToken(payload: JwtAccessTokenPayload, expiresIn = '15m'): string {
    if (!this.privateKey) {
      this.initializeKeys();
    }
    return jwt.sign(payload, this.privateKey, {
      algorithm: 'RS256',
      expiresIn: expiresIn as any,
    });
  }

  static verifyAccessToken(token: string): JwtAccessTokenPayload {
    if (!this.publicKey) {
      this.initializeKeys();
    }
    return jwt.verify(token, this.publicKey, {
      algorithms: ['RS256'],
    }) as JwtAccessTokenPayload;
  }

  static getPublicKey(): string {
    if (!this.publicKey) {
      this.initializeKeys();
    }
    return this.publicKey;
  }
}
