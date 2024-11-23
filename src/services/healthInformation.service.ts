import healthInformationModel from '../models/healthInformation.model';
import { IHealthInformation } from '../types/healthInformation.types';

export default class HealthInformationService {
  async removeById(id: string): Promise<IHealthInformation | null> {
    return await healthInformationModel.findByIdAndDelete(id).lean();
  }

  async updateById(id: string, healthInfo: IHealthInformation): Promise<IHealthInformation | null> {
    return await healthInformationModel.findByIdAndUpdate(id, healthInfo, {
      new: true,
    });
  }

  async create(healthInfo: IHealthInformation): Promise<IHealthInformation> {
    return await healthInformationModel.create(healthInfo);
  }

  async getById(id: string): Promise<IHealthInformation | null> {
    return await healthInformationModel.findById(id).populate('user').lean();
  }

  async getAll(page: number, limit: number): Promise<IHealthInformation[]> {
    const skip = (page - 1) * limit;
    return await healthInformationModel.find({}).skip(skip).limit(limit).lean();
  }
} 