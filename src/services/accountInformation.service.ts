import accountInformationModel from '../models/accountInformation.model';
import { IAccountInformation } from '../types/accountInformation.types';

export default class AccountInformationService {
  async removeById(id: string): Promise<IAccountInformation | null> {
    return await accountInformationModel.findByIdAndDelete(id).lean();
  }

  async updateById(id: string, accountInfo: IAccountInformation): Promise<IAccountInformation | null> {
    return await accountInformationModel.findByIdAndUpdate(id, accountInfo, {
      new: true,
    });
  }

  async create(accountInfo: IAccountInformation): Promise<IAccountInformation> {
    return await accountInformationModel.create(accountInfo);
  }

  async getById(id: string): Promise<IAccountInformation | null> {
    return await accountInformationModel.findById(id).lean();
  }

  async getAll(page: number, limit: number): Promise<IAccountInformation[]> {
    const skip = (page - 1) * limit;
    return await accountInformationModel.find({}).skip(skip).limit(limit).lean();
  }
} 