import mongoose from 'mongoose';
import { IAchievement, AchievementCategory, AchievementLevel } from '../types/achievement.types';

const achievementSchema = new mongoose.Schema<IAchievement>(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: Object.values(AchievementCategory),
      required: true,
    },
    dateAchieved: {
      type: Date,
      required: true,
    },
    level: {
      type: String,
      enum: Object.values(AchievementLevel),
      required: true,
    },
    organizationName: {
      type: String,
      required: true,
    },
    certificateUrl: {
      type: String,
      required: true,
    },
    proofDocumentUrl: {
      type: String,
      required: true,
    },
    tags: [{
      type: String,
    }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IAchievement>('Achievement', achievementSchema); 