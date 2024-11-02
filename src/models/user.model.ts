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
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    password: {
      type: String,
    },
    isOnboarded: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('users', schema);
