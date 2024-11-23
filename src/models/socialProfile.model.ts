import mongoose from 'mongoose';
import { ISocialProfile } from '../types/socialProfile.types';

const socialProfileSchema = new mongoose.Schema<ISocialProfile>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    institute: { type: mongoose.Schema.Types.ObjectId, ref: 'Institute' },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    facebook: { type: String },
    twitter: { type: String },
    linkedin: { type: String },
    instagram: { type: String },
    github: { type: String },
    portfolio: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model<ISocialProfile>('SocialProfile', socialProfileSchema); 