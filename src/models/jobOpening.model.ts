import mongoose from 'mongoose';
import { IJobOpening, JobType, JobStatus } from '../types/jobOpening.types';

const jobOpeningSchema = new mongoose.Schema<IJobOpening>(
  {
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    recruiterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Recruiter' },
    title: { type: String },
    description: { type: String },
    jobType: {
      type: String,
      enum: Object.values(JobType)
    },
    location: { type: String },
    isRemote: { type: Boolean },
    salaryMin: { type: Number },
    salaryMax: { type: Number },
    experienceMin: { type: Number },
    experienceMax: { type: Number },
    qualifications: [{ type: String }],
    skillsRequired: [{ type: String }],
    industry: { type: String },
    postedDate: { type: Date },
    applicationDeadline: { type: Date },
    numberOfVacancies: { type: Number },
    benefits: [{ type: String }],
    status: {
      type: String,
      enum: Object.values(JobStatus)
    },
    applicationUrl: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model<IJobOpening>('JobOpening', jobOpeningSchema); 