import crypto from 'crypto';
import { IToken } from '../types/tokens.types';
import { ENCRYPTION_KEY } from '../configs/env.config';

export default class EncryptionService {
  private key = crypto.scryptSync(ENCRYPTION_KEY, 'salt', 32);
  
  generateIV() {
    return crypto.randomBytes(16);
  }

  encrypt(obj: any): IToken {
    const iv = this.generateIV();
    const cipher = crypto.createCipheriv('aes-256-cbc', this.key, iv);
    let encrypted = cipher.update(JSON.stringify(obj), 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return {
      iv: iv.toString('base64'),
      data: encrypted,
    };
  }

  decrypt(encryptedObj: IToken): any {
    const iv = Buffer.from(encryptedObj.iv, 'base64');
    const decipher = crypto.createDecipheriv('aes-256-cbc', this.key, iv);
    let decrypted = decipher.update(encryptedObj.data, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return JSON.parse(decrypted);
  }
}
