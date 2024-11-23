import socialProfileModel from '../models/socialProfile.model';
import { ISocialProfile } from '../types/socialProfile.types';

export default class SocialProfileService {
  async removeById(id: string): Promise<ISocialProfile | null> {
    return await socialProfileModel.findByIdAndDelete(id).lean();
  }

  async updateById(id: string, socialProfile: ISocialProfile): Promise<ISocialProfile | null> {
    return await socialProfileModel.findByIdAndUpdate(id, socialProfile, {
      new: true,
    });
  }

  async create(socialProfile: ISocialProfile): Promise<ISocialProfile> {
    return await socialProfileModel.create(socialProfile);
  }

  async getById(id: string): Promise<ISocialProfile | null> {
    return await socialProfileModel.findById(id)
      .populate('user')
      .populate('institute')
      .populate('company')
      .lean();
  }

  async getAll(page: number, limit: number): Promise<ISocialProfile[]> {
    const skip = (page - 1) * limit;
    return await socialProfileModel.find({}).skip(skip).limit(limit).lean();
  }
} 