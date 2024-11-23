import mongoose, { Schema } from 'mongoose';
import { IInstitute, InstituteType } from '../types/institute.types';

const instituteSchema = new Schema<IInstitute>(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    address: {
      type: String,
      required: true
    },
    contactNumber: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    website: {
      type: String,
      required: false
    },
    type: {
      type: String,
      enum: Object.values(InstituteType),
      required: true
    },
    affiliation: {
      type: String,
      required: false
    },
    establishedYear: {
      type: Date,
      required: true
    },
    accreditation: [{
      type: String
    }],
    logo: {
      type: String,
      required: false
    },
    gallery: [{
      type: String
    }],
    description: {
      type: String,
      required: false
    },
    notableAlumni: [{
      type: String
    }],
    events: [{
      type: String
    }],
    coursesOffered: [{
      type: String
    }],
    ratings: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    socialsId: {
      type: String,
      ref: 'SocialProfile'
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
);

export default mongoose.model<IInstitute>('Institute', instituteSchema); 