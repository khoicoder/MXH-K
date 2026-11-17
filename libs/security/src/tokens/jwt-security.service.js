"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtSecurityService = void 0;
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
class JwtSecurityService {
    static privateKey;
    static publicKey;
    static initializeKeys(privKey, pubKey) {
        if (privKey && pubKey) {
            this.privateKey = privKey;
            this.publicKey = pubKey;
        }
        else {
            const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
                modulusLength: 2048,
                publicKeyEncoding: { type: 'spki', format: 'pem' },
                privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
            });
            this.privateKey = privateKey;
            this.publicKey = publicKey;
        }
    }
    static signAccessToken(payload, expiresIn = '15m') {
        if (!this.privateKey) {
            this.initializeKeys();
        }
        return jwt.sign(payload, this.privateKey, {
            algorithm: 'RS256',
            expiresIn: expiresIn,
        });
    }
    static verifyAccessToken(token) {
        if (!this.publicKey) {
            this.initializeKeys();
        }
        return jwt.verify(token, this.publicKey, {
            algorithms: ['RS256'],
        });
    }
    static getPublicKey() {
        if (!this.publicKey) {
            this.initializeKeys();
        }
        return this.publicKey;
    }
}
exports.JwtSecurityService = JwtSecurityService;
//# sourceMappingURL=jwt-security.service.js.map