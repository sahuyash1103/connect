import recruiterModel from '../models/recruiter.model';
import { IRecruiter } from '../types/recruiter.types';

export default class RecruiterService {
  async removeById(id: string): Promise<IRecruiter | null> {
    return await recruiterModel.findByIdAndDelete(id).lean();
  }

  async updateById(id: string, recruiter: IRecruiter): Promise<IRecruiter | null> {
    return await recruiterModel.findByIdAndUpdate(id, recruiter, {
      new: true,
    });
  }

  async create(recruiter: IRecruiter): Promise<IRecruiter> {
    return await recruiterModel.create(recruiter);
  }

  async getById(id: string): Promise<IRecruiter | null> {
    return await recruiterModel.findById(id)
      .populate('user')
      .populate('companies')
      .populate('socials')
      .populate('jobPostings')
      .lean();
  }

  async getAll(page: number, limit: number): Promise<IRecruiter[]> {
    const skip = (page - 1) * limit;
    return await recruiterModel.find({}).skip(skip).limit(limit).lean();
  }
} 