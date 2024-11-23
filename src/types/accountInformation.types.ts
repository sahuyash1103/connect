import mongoose from 'mongoose';

export enum AccountStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  BANNED = 'BANNED',
  SUSPENDED = 'SUSPENDED'
}

export interface IAccountInformation {
  _id?: string;
  user?: mongoose.Types.ObjectId;
  isVerified?: boolean;
  lastLogin?: Date;
  status?: AccountStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
