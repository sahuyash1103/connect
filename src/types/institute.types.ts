import mongoose from "mongoose";

export enum InstituteType {
  COLLEGE = 'COLLEGE',
  UNIVERSITY = 'UNIVERSITY',
  SCHOOL = 'SCHOOL',
  OTHER = 'OTHER',
}

export interface IInstitute {
  _id?: string;
  name?: string;
  address?: string;
  contactNumber?: string;
  email?: string;
  website?: string;
  type?: InstituteType;
  affiliation: string;
  establishedYear?: Date;
  accreditation?: string[];
  logo?: string;
  gallery?: string[];
  description?: string;
  notableAlumni?: string[];
  events?: string[];
  coursesOffered?: string[];
  ratings?: number;
  socialProfiles?: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}
