import mongoose from 'mongoose';

export interface ICertificate {
  _id?: string;
  user?: mongoose.Schema.Types.ObjectId;
  certificateName?: string;
  issuedBy?: string;
  issueDate?: Date;
  expirationDate?: Date;
  certificateUrl?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
} 