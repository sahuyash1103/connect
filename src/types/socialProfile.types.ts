import mongoose from 'mongoose';

export interface ISocialProfile {
  _id?: string;
  user?: mongoose.Types.ObjectId;
  institute?: mongoose.Types.ObjectId;
  company?: mongoose.Types.ObjectId;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
  portfolio?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
