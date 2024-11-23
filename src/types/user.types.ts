import { ObjectId } from 'mongoose';

export interface IUser {
  _id?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  userName?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  isOnboard?: boolean;
  isEmailVerified?: boolean;
  isPhoneNumberVerified?: boolean;
  provider?: 'EMAIL' | 'PHONE' | 'GOOGLE' | 'GITHUB' | 'APPLE';
  createdAt?: Date;
  updatedAt?: Date;
}
