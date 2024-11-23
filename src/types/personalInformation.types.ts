import mongoose from 'mongoose';

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER'
}

export interface IPersonalInformation {
  _id?: string;
  user?: mongoose.Types.ObjectId;
  dob?: Date;
  gender?: Gender;
  address?: string;
  profilePicture?: string;
  nationality?: string;
  languagesKnown?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
