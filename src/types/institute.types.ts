export enum InstituteType {
  COLLEGE = 'COLLEGE',
  UNIVERSITY = 'UNIVERSITY',
  SCHOOL = 'SCHOOL',
  OTHER = 'OTHER'
}

export interface IInstitute {
  id: string;
  name: string;
  address: string;
  contactNumber: string;
  email: string;
  website: string;
  type: InstituteType;
  affiliation: string;
  establishedYear: Date;
  accreditation: string[];
  logo: string;
  gallery: string[];
  description: string;
  notableAlumni: string[];
  events: string[];
  coursesOffered: string[];
  ratings: number;
  socialsId: string;
  createdAt: Date;
  updatedAt: Date;
} 