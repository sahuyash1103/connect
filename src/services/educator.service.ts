import educatorModel from '../models/educator.model';
import { IEducator } from '../types/educator.types';

export default class EducatorService {
  async removeById(id: string): Promise<IEducator | null> {
    return await educatorModel.findByIdAndDelete(id).lean();
  }

  async updateById(id: string, educator: IEducator): Promise<IEducator | null> {
    return await educatorModel.findByIdAndUpdate(id, educator, {
      new: true,
    });
  }

  async create(educator: IEducator): Promise<IEducator> {
    return await educatorModel.create(educator);
  }

  async getById(id: string): Promise<IEducator | null> {
    return await educatorModel.findById(id)
      .populate('user')
      .populate('institutes')
      .populate('socials')
      .lean();
  }

  async getAll(page: number, limit: number): Promise<IEducator[]> {
    const skip = (page - 1) * limit;
    return await educatorModel.find({}).skip(skip).limit(limit).lean();
  }
} 