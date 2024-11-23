import mongoose from 'mongoose';

export enum ExperienceType {
  INTERNSHIP = 'INTERNSHIP',
  VOLUNTEERING = 'VOLUNTEERING',
  PART_TIME = 'PART_TIME',
  PROJECT = 'PROJECT',
  OTHER = 'OTHER'
}

export interface IExperience {
  _id?: string;
  user?: mongoose.Types.ObjectId;
  title?: string;
  description?: string;
  organizationName?: string;
  startDate?: Date;
  endDate?: Date | null;
  type?: ExperienceType;
  location?: string;
  skillsUsed?: string[];
  achievements?: string[];
  certificateUrl?: string | null;
  referenceContact?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}
