"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordSecurityService = void 0;
const crypto = require("crypto");
class PasswordSecurityService {
    static async hashPassword(password) {
        return new Promise((resolve, reject) => {
            const salt = crypto.randomBytes(16).toString('hex');
            crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, derivedKey) => {
                if (err)
                    reject(err);
                resolve(`${salt}:${derivedKey.toString('hex')}`);
            });
        });
    }
    static async verifyPassword(password, storedHash) {
        return new Promise((resolve, reject) => {
            const [salt, key] = storedHash.split(':');
            if (!salt || !key) {
                return resolve(false);
            }
            crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, derivedKey) => {
                if (err)
                    reject(err);
                resolve(crypto.timingSafeEqual(Buffer.from(key, 'hex'), derivedKey));
            });
        });
    }
    static generateSecureToken(bytes = 32) {
        return crypto.randomBytes(bytes).toString('hex');
    }
    static hashToken(token) {
        return crypto.createHash('sha256').update(token).digest('hex');
    }
}
exports.PasswordSecurityService = PasswordSecurityService;
//# sourceMappingURL=password-security.service.js.map