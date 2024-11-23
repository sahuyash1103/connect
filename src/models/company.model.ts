import mongoose from 'mongoose';
import { ICompany } from '../types/company.types';

const companySchema = new mongoose.Schema<ICompany>(
  {
    name: { type: String },
    address: { type: String },
    contactNumber: { type: String },
    email: { type: String },
    website: { type: String },
    logo: { type: String },
    industry: { type: String },
    description: { type: String },
    establishedYear: { type: Date },
    employeeCount: { type: Number },
    ratings: { type: Number },
    headquarters: { type: String },
    branches: [{ type: String }],
    socials: { type: mongoose.Schema.Types.ObjectId, ref: 'SocialProfile' },
    jobOpenings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'JobOpening' }],
    recruitedYet: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model<ICompany>('Company', companySchema);
