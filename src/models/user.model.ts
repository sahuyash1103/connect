import mongoose, { Schema } from 'mongoose';
import { IUser } from '../types/user.types';
const ObjectId = Schema.ObjectId;

const schema = new Schema<IUser>(
  {
    firstName: {
      type: String,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    userName: {
      type: String,
      unique: true,
    },
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      select: false,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    isPhoneNumberVerified: {
      type: Boolean,
      default: false,
    },
    isOnboard: {
      type: Boolean,
    },
    provider: {
      type: String,
      enum: ['EMAIL', 'PHONE', 'GOOGLE', 'GITHUB', 'APPLE'],
    },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('users', schema);
