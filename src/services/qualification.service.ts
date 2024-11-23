import qualificationModel from '../models/qualification.model';
import { IQualification } from '../types/qualification.types';

export default class QualificationService {
  async removeById(qualificationId: string): Promise<IQualification | null> {
    return await qualificationModel.findByIdAndDelete(qualificationId).lean();
  }

  async updateById(qualificationId: string, qualificationObj: IQualification): Promise<IQualification | null> {
    return await qualificationModel.findByIdAndUpdate(qualificationId, qualificationObj, {
      new: true,
    });
  }

  async create(qualificationObj: IQualification): Promise<IQualification> {
    return await qualificationModel.create(qualificationObj);
  }

  async getById(qualificationId: string): Promise<IQualification | null> {
    return await qualificationModel.findById(qualificationId).lean();
  }

  async getAll(page: number, limit: number): Promise<IQualification[]> {
    const skip = (page - 1) * limit;
    return await qualificationModel.find({}).skip(skip).limit(limit).lean();
  }
}
