import mongoose from 'mongoose';
import { ISkill } from '../types/skill.types';

const skillSchema = new mongoose.Schema<ISkill>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    skillName: {
      type: String,
      required: true,
    },
    proficiency: {
      type: String,
      enum: ['BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT'],
      required: true,
    },
    category: {
      type: String,
      enum: ['TECHNICAL', 'SOFT_SKILLS', 'LANGUAGES', 'OTHER'],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ISkill>('Skill', skillSchema); 