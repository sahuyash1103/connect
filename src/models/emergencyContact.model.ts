import mongoose from 'mongoose';
import { IEmergencyContact } from '../types/emergencyContact.types';

const emergencyContactSchema = new mongoose.Schema<IEmergencyContact>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String },
    phoneNumber: { type: String },
    relationship: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model<IEmergencyContact>('EmergencyContact', emergencyContactSchema); 