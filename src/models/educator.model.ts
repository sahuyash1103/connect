import mongoose from 'mongoose';
import { IEducator } from '../types/educator.types';

const educatorSchema = new mongoose.Schema<IEducator>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    institutes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Institute',
    }],
    department: {
      type: String,
    },
    specializations: [{
      type: String,
    }],
    profilePicture: {
      type: String,
    },
    contactNumber: {
      type: String,
    },
    email: {
      type: String,
    },
    officeLocation: {
      type: String,
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

export default mongoose.model<IEducator>('Educator', educatorSchema); 