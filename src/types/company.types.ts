import mongoose from 'mongoose';

export interface ICompany {
  _id?: string;
  name?: string;
  address?: string;
  contactNumber?: string;
  email?: string;
  website?: string;
  logo?: string;
  industry?: string;
  description?: string;
  establishedYear?: Date;
  employeeCount?: number;
  ratings?: number;
  headquarters?: string;
  branches?: string[];
  socials?: mongoose.Types.ObjectId;
  jobOpenings?: mongoose.Types.ObjectId[];
  recruitedYet?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
