import instituteModel from '../models/institute.model';
import { IInstitute } from '../types/institute.types';

export default class InstituteService {
  async removeById(id: string): Promise<IInstitute | null> {
    return await instituteModel.findByIdAndDelete(id).lean();
  }

  async updateById(id: string, institute: IInstitute): Promise<IInstitute | null> {
    return await instituteModel.findByIdAndUpdate(id, institute, {
      new: true,
    });
  }

  async create(institute: IInstitute): Promise<IInstitute> {
    return await instituteModel.create(institute);
  }

  async getById(id: string): Promise<IInstitute | null> {
    return await instituteModel.findById(id).populate('socialsId').lean();
  }

  async getAll(page: number, limit: number): Promise<IInstitute[]> {
    const skip = (page - 1) * limit;
    return await instituteModel.find({}).skip(skip).limit(limit).lean();
  }
} 