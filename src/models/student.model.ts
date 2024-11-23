import mongoose from 'mongoose';
import { IStudent } from '../types/student.types';

const studentSchema = new mongoose.Schema<IStudent>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    socials: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SocialProfile',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IStudent>('Student', studentSchema);
