import skillModel from '../models/skill.model';
import { ISkill } from '../types/skill.types';

export default class SkillService {
  async removeById(id: string): Promise<ISkill | null> {
    return await skillModel.findByIdAndDelete(id).lean();
  }

  async updateById(id: string, skill: ISkill): Promise<ISkill | null> {
    return await skillModel.findByIdAndUpdate(id, skill, {
      new: true,
    });
  }

  async create(skill: ISkill): Promise<ISkill> {
    return await skillModel.create(skill);
  }

  async getById(id: string): Promise<ISkill | null> {
    return await skillModel.findById(id).populate('user').lean();
  }

  async getAll(page: number, limit: number): Promise<ISkill[]> {
    const skip = (page - 1) * limit;
    return await skillModel.find({}).skip(skip).limit(limit).lean();
  }

  async getByUserId(userId: string): Promise<ISkill[]> {
    return await skillModel.find({ user: userId }).lean();
  }
} 