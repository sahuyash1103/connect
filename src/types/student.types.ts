import mongoose from 'mongoose';

export interface IStudent {
  _id?: string;
  user?: mongoose.Types.ObjectId;
  socials?: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}
