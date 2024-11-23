import certificateModel from '../models/certificate.model';
import { ICertificate } from '../types/certificate.types';

export default class CertificateService {
  async removeById(id: string): Promise<ICertificate | null> {
    return await certificateModel.findByIdAndDelete(id).lean();
  }

  async updateById(id: string, certificate: ICertificate): Promise<ICertificate | null> {
    return await certificateModel.findByIdAndUpdate(id, certificate, {
      new: true,
    });
  }

  async create(certificate: ICertificate): Promise<ICertificate> {
    return await certificateModel.create(certificate);
  }

  async getById(id: string): Promise<ICertificate | null> {
    return await certificateModel.findById(id).lean();
  }

  async getAll(page: number, limit: number): Promise<ICertificate[]> {
    const skip = (page - 1) * limit;
    return await certificateModel.find({}).skip(skip).limit(limit).lean();
  }

  async getByUserId(userId: string): Promise<ICertificate[]> {
    return await certificateModel.find({ userId }).lean();
  }
} 