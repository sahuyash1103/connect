import mongoose from 'mongoose';

export interface IHealthInformation {
  _id?: string;
  user?: mongoose.Types.ObjectId;
  bloodGroup?: string;
  medicalConditions?: string[];
  allergies?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
