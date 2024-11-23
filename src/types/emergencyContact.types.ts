import mongoose from 'mongoose';

export interface IEmergencyContact {
  _id?: string;
  user?: mongoose.Types.ObjectId;
  name?: string;
  phoneNumber?: string;
  relationship?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

