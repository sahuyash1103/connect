import mongoose from 'mongoose';
import { IHealthInformation } from '../types/healthInformation.types';

const healthInformationSchema = new mongoose.Schema<IHealthInformation>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    bloodGroup: { type: String },
    medicalConditions: [{ type: String }],
    allergies: [{ type: String }]
  },
  { timestamps: true }
);

export default mongoose.model<IHealthInformation>('HealthInformation', healthInformationSchema); 