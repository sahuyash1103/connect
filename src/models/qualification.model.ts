import mongoose from 'mongoose';
import { IQualification, EstablishmentType, QualificationLevel } from '../types/qualification.types';

const qualificationSchema = new mongoose.Schema<IQualification>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    establishments: {
      type: String,
      enum: Object.values(EstablishmentType)
    },
    instituteName: { type: String },
    discipline: { type: String },
    affiliatedTo: { type: String },
    addressOfInstitute: { type: String },
    startingYear: { type: String },
    passingYear: { type: String },
    level: {
      type: String,
      enum: Object.values(QualificationLevel)
    },
    grade: { type: String },
    stream: { type: String },
    majorField: { type: String },
    optionalSubject: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model<IQualification>('Qualification', qualificationSchema); 