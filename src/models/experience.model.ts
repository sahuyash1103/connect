import mongoose from 'mongoose';
import { IExperience, ExperienceType } from '../types/experience.types';

const experienceSchema = new mongoose.Schema<IExperience>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String },
    description: { type: String },
    organizationName: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    type: {
      type: String,
      enum: Object.values(ExperienceType)
    },
    location: { type: String },
    skillsUsed: [{ type: String }],
    achievements: [{ type: String }],
    certificateUrl: { type: String },
    referenceContact: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model<IExperience>('Experience', experienceSchema);
