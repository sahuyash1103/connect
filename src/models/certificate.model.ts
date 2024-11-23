import mongoose from 'mongoose';
import { ICertificate } from '../types/certificate.types';

const certificateSchema = new mongoose.Schema<ICertificate>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    certificateName: {
      type: String,
      required: true,
    },
    issuedBy: {
      type: String,
      required: true,
    },
    issueDate: {
      type: Date,
      required: true,
    },
    expirationDate: {
      type: Date,
    },
    certificateUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ICertificate>('Certificate', certificateSchema); 