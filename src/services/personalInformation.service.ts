import personalInformationModel from '../models/personalInformation.model';
import { IPersonalInformation } from '../types/personalInformation.types';

export default class PersonalInformationService {
  async removeById(id: string): Promise<IPersonalInformation | null> {
    return await personalInformationModel.findByIdAndDelete(id).lean();
  }

  async updateById(id: string, personalInfo: IPersonalInformation): Promise<IPersonalInformation | null> {
    return await personalInformationModel.findByIdAndUpdate(id, personalInfo, {
      new: true,
    });
  }

  async create(personalInfo: IPersonalInformation): Promise<IPersonalInformation> {
    return await personalInformationModel.create(personalInfo);
  }

  async getById(id: string): Promise<IPersonalInformation | null> {
    return await personalInformationModel.findById(id).populate('user').lean();
  }

  async getAll(page: number, limit: number): Promise<IPersonalInformation[]> {
    const skip = (page - 1) * limit;
    return await personalInformationModel.find({}).skip(skip).limit(limit).lean();
  }
} 