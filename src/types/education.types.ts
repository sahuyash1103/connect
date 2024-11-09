import { ObjectId } from 'mongoose';

export interface IEducation {
  _id?: string;
  studentId?: string; // Reference to the student document
  establishments?: 'COLLEGE' | 'DIPLOMA' | 'SCHOOL'; // Type of establishment
  instituteName?: string; // Name of the institute
  discipline?: string; // Discipline or field of study
  affiliatedTo?: string; // Affiliated university or board
  addressOfInstitute?: string; // Address of the institute
  startingYear?: string; // Starting year of the program
  passingYear?: string; // Passing year of the program
  level?: 'PHD' | 'UG' | 'PG' | '12TH' | '10TH'; // Level of education
  grade?: string; // Grade or percentage obtained
  stream?: string; // Specific subject studied, if applicable
  majorField?: string; // Major field of study
  optionalSubject?: string; // Minor field of study
  createdAt?: Date; // Timestamp for document creation
  updatedAt?: Date; // Timestamp for last update
}
