import experienceModel from '../models/experience.model';
import { IExperience } from '../types/experience.types';

export default class ExperienceService {
  async removeById(id: string): Promise<IExperience | null> {
    return await experienceModel.findByIdAndDelete(id).lean();
  }

  async updateById(id: string, experience: IExperience): Promise<IExperience | null> {
    return await experienceModel.findByIdAndUpdate(id, experience, {
      new: true,
    });
  }

  async create(experience: IExperience): Promise<IExperience> {
    return await experienceModel.create(experience);
  }

  async getById(id: string): Promise<IExperience | null> {
    return await experienceModel.findById(id).populate('user').lean();
  }

  async getAll(page: number, limit: number): Promise<IExperience[]> {
    const skip = (page - 1) * limit;
    return await experienceModel.find({}).skip(skip).limit(limit).lean();
  }

  async getByUserId(userId: string): Promise<IExperience[]> {
    return await experienceModel.find({ user: userId }).lean();
  }
} 