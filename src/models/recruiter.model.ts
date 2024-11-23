import mongoose from 'mongoose';
import { IRecruiter } from '../types/recruiter.types';

const recruiterSchema = new mongoose.Schema<IRecruiter>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    companies: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
    }],
    contactNumber: {
      type: String,
    },
    email: {
      type: String,
    },
    designation: {
      type: String,
    },
    profilePicture: {
      type: String,
    },
    socials: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SocialProfile',
    },
    jobPostings: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'JobOpening',
    }],
    recruitedYet: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IRecruiter>('Recruiter', recruiterSchema); 