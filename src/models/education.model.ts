import { IEducation } from '@/types/education.types';
import mongoose, { Schema } from 'mongoose';
const ObjectId = Schema.ObjectId;

const schema = new Schema<IEducation>(
  {
    studentId: {
      type: ObjectId,
      ref: 'students',
    },
    establishments: {
      type: String,
      enum: ['COLLEGE', 'DIPLOMA', 'SCHOOL'],
    },
    instituteName: {
      type: String,
    },
    discipline: {
      type: String,
    },
    affiliatedTo: {
      type: String,
    },
    addressOfInstitute: {
      type: String,
    },
    startingYear:{
      type: String,
    },
    passingYear: {
      type: String,
    },
    level: {
      type: String,
      enum: ['PHD', 'UG', 'PG', '12TH', '10TH'],
    },
    grade: {
      type: String,
    },
    stream: {
      type: String,
    },
    majorField: {
      type: String,
    },
    optionalSubject: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IEducation>('education', schema);
