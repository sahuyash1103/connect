export interface IUser {
  _id?: string; // Optional for new documents
  firstName?: string;
  middleName?: string; // Optional field
  lastName?: string;
  userName?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  isOnboard?: boolean;
  isEmailVerified?: boolean;
  isPhoneNumberVerified?: boolean;
  provider?: 'EMAIL' | 'PHONE' | 'GOOGLE' | 'GITHUB' | 'APPLE';
  createdAt?: Date; // Optional, added by Mongoose
  updatedAt?: Date; // Optional, added by Mongoose
}
