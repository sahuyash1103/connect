import mongoose from 'mongoose';

export interface ISkill {
  _id?: string;
  user?: mongoose.Types.ObjectId;
  skillName?: string;
  proficiency?: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT';
  category?: 'TECHNICAL' | 'SOFT_SKILLS' | 'LANGUAGES' | 'OTHER';
  createdAt?: Date;
  updatedAt?: Date;
}
