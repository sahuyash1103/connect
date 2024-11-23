import companyModel from '../models/company.model';
import { ICompany } from '../types/company.types';

export default class CompanyService {
  async removeById(id: string): Promise<ICompany | null> {
    return await companyModel.findByIdAndDelete(id).lean();
  }

  async updateById(id: string, company: ICompany): Promise<ICompany | null> {
    return await companyModel.findByIdAndUpdate(id, company, {
      new: true,
    });
  }

  async create(company: ICompany): Promise<ICompany> {
    return await companyModel.create(company);
  }

  async getById(id: string): Promise<ICompany | null> {
    return await companyModel.findById(id).populate('jobOpenings').populate('socials').lean();
  }

  async getAll(page: number, limit: number): Promise<ICompany[]> {
    const skip = (page - 1) * limit;
    return await companyModel.find({}).skip(skip).limit(limit).lean();
  }
} 