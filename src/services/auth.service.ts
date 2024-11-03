import { IToken, ITokenData } from '@/types/tokens.types';
import { IUser } from '@/types/user.types';
import bcrypt from 'bcryptjs';
import moment from 'moment';
import EncryptionService from './encryption.service';

const encryptionService = new EncryptionService();

export default class AuthService {
  async comparePassword(password: string, password1: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(password, password1);

    return isMatch;
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  }

  async generateTokens(user: IUser) {
    const tokenData: ITokenData = {
      _id: user._id!,
      fullName: `${user.firstName} ${user.middleName} ${user.lastName}`,
      email: user.email,
      phoneNumber: user.phoneNumber,
      userName: user.userName!,
    };

    const accessToken = await this.generateAccessToken(tokenData);
    const refreshToken = await this.generateRefreshToken(tokenData);

    return { accessToken, refreshToken };
  }

  async generateAccessToken(user: ITokenData) {
    user.expiresAt = moment().add(1, 'days').toDate();
    return encryptionService.encrypt(user);
  }

  async generateRefreshToken(user: ITokenData) {
    user.expiresAt = moment().add(7, 'days').toDate();
    return encryptionService.encrypt(user);
  }

  async decryptToken(token: IToken): Promise<ITokenData> {
    const decryptedToken: ITokenData = encryptionService.decrypt(token);

    if (moment().isAfter(moment(decryptedToken?.expiresAt))) {
      throw Error('Token expired.');
    }
    return decryptedToken;
  }
}
