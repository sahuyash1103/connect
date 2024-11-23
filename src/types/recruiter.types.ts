import mongoose from 'mongoose';

export interface IRecruiter {
  _id?: string;
  user?: mongoose.Types.ObjectId;
  companies?: mongoose.Types.ObjectId[];
  contactNumber?: string;
  email?: string;
  designation?: string;
  profilePicture?: string;
  socials?: mongoose.Types.ObjectId;
  jobPostings?: mongoose.Types.ObjectId[];
  recruitedYet?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
