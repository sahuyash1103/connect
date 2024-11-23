import jobOpeningModel from '../models/jobOpening.model';
import { IJobOpening } from '../types/jobOpening.types';

export default class JobOpeningService {
  async removeById(id: string): Promise<IJobOpening | null> {
    return await jobOpeningModel.findByIdAndDelete(id).lean();
  }

  async updateById(id: string, jobOpening: IJobOpening): Promise<IJobOpening | null> {
    return await jobOpeningModel.findByIdAndUpdate(id, jobOpening, {
      new: true,
    });
  }

  async create(jobOpening: IJobOpening): Promise<IJobOpening> {
    return await jobOpeningModel.create(jobOpening);
  }

  async getById(id: string): Promise<IJobOpening | null> {
    return await jobOpeningModel.findById(id)
      .populate('companyId')
      .populate('recruiterId')
      .lean();
  }

  async getAll(page: number, limit: number): Promise<IJobOpening[]> {
    const skip = (page - 1) * limit;
    return await jobOpeningModel.find({}).skip(skip).limit(limit).lean();
  }

  async getByCompanyId(companyId: string): Promise<IJobOpening[]> {
    return await jobOpeningModel.find({ companyId }).lean();
  }
} 