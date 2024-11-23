import mongoose from 'mongoose';

export enum EstablishmentType {
  COLLEGE = 'COLLEGE',
  DIPLOMA = 'DIPLOMA',
  SCHOOL = 'SCHOOL'
}

export enum QualificationLevel {
  PHD = 'PHD',
  UG = 'UG',
  PG = 'PG',
  TWELFTH = '12TH',
  TENTH = '10TH'
}

export interface IQualification {
  _id?: string;
  user?: mongoose.Types.ObjectId;
  establishments?: EstablishmentType;
  instituteName?: string;
  discipline?: string;
  affiliatedTo?: string;
  addressOfInstitute?: string;
  startingYear?: string;
  passingYear?: string;
  level?: QualificationLevel;
  grade?: string;
  stream?: string;
  majorField?: string;
  optionalSubject?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
