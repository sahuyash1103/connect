import achievementModel from '../models/achievement.model';
import { IAchievement } from '../types/achievement.types';

export default class AchievementService {
  async removeById(id: string): Promise<IAchievement | null> {
    return await achievementModel.findByIdAndDelete(id).lean();
  }

  async updateById(id: string, achievement: IAchievement): Promise<IAchievement | null> {
    return await achievementModel.findByIdAndUpdate(id, achievement, {
      new: true,
    });
  }

  async create(achievement: IAchievement): Promise<IAchievement> {
    return await achievementModel.create(achievement);
  }

  async getById(id: string): Promise<IAchievement | null> {
    return await achievementModel.findById(id).lean();
  }

  async getAll(page: number, limit: number): Promise<IAchievement[]> {
    const skip = (page - 1) * limit;
    return await achievementModel.find({}).skip(skip).limit(limit).lean();
  }

  async getByUserId(userId: string): Promise<IAchievement[]> {
    return await achievementModel.find({ userId }).lean();
  }
} 