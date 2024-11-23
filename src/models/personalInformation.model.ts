import mongoose from 'mongoose';
import { IPersonalInformation, Gender } from '../types/personalInformation.types';

const personalInformationSchema = new mongoose.Schema<IPersonalInformation>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    dob: { type: Date },
    gender: { 
      type: String,
      enum: Object.values(Gender)
    },
    address: { type: String },
    profilePicture: { type: String },
    nationality: { type: String },
    languagesKnown: [{ type: String }]
  },
  { timestamps: true }
);

export default mongoose.model<IPersonalInformation>('PersonalInformation', personalInformationSchema); 