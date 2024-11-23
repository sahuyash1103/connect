import mongoose from 'mongoose';

export interface IEducator {
  _id?: string;
  user?: mongoose.Types.ObjectId;
  institutes?: mongoose.Types.ObjectId[];
  department?: string;
  specializations?: string[];
  profilePicture?: string;
  contactNumber?: string;
  email?: string;
  officeLocation?: string;
  socials?: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}
