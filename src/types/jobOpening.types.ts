import mongoose from 'mongoose';

export enum JobType {
  FULL_TIME = 'FULL_TIME',
  PART_TIME = 'PART_TIME',
  INTERNSHIP = 'INTERNSHIP',
  CONTRACT = 'CONTRACT',
  FREELANCE = 'FREELANCE'
}

export enum JobStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  DRAFT = 'DRAFT'
}

export interface IJobOpening {
  _id?: string;
  companyId?: mongoose.Types.ObjectId;
  recruiterId?: mongoose.Types.ObjectId;
  title?: string;
  description?: string;
  jobType?: JobType;
  location?: string;
  isRemote?: boolean;
  salaryMin?: number;
  salaryMax?: number;
  experienceMin?: number;
  experienceMax?: number;
  qualifications?: string[];
  skillsRequired?: string[];
  industry?: string;
  postedDate?: Date;
  applicationDeadline?: Date;
  numberOfVacancies?: number;
  benefits?: string[];
  status?: JobStatus;
  applicationUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
