import moment from 'moment';
import { encrypt, decrypt } from './crypto-service';
import { IToken } from '../types/tokens.types';

export const generateAccessToken = async (user: any) => {
  user.expiresAt = moment().add(1, 'days').toDate();
  return encrypt(user);
};

export const generateRefreshToken = async (user: any) => {
  user.expiresAt = moment().add(7, 'days').toDate();
  return encrypt(user);
};

export const decryptToken = async (token: IToken) => {
  const decryptedToken = decrypt(token);
  if (moment().isAfter(moment(decryptedToken?.expiresAt))) {
    throw Error('Token expired.');
  }
  return decryptToken;
};
