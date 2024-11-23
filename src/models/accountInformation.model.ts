import mongoose from 'mongoose';
import { IAccountInformation, AccountStatus } from '../types/accountInformation.types';

const accountInformationSchema = new mongoose.Schema<IAccountInformation>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    lastLogin: {
      type: Date,
    },
    status: {
      type: String,
      enum: Object.values(AccountStatus),
      default: AccountStatus.ACTIVE,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IAccountInformation>('AccountInformation', accountInformationSchema); 