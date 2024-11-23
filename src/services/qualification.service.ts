import educationModel from '../models/qualifications.model';
import { IQualification } from '../types/qualification.types';

export default class QualificationService {
  async removeById(educationId: string) {
    return await educationModel.findByIdAndDelete(educationId).lean();
  }
  async updateById(educationId: string, educationObj: IQualification) {
    return await educationModel.findByIdAndUpdate(educationId, educationObj, {
      new: true,
    });
  }
  async create(educationObj: IQualification) {
    return await educationModel.create(educationObj);
  }
  async getById(educationId: string) {
    return await educationModel.findById(educationId).lean();
  }
  async getAll(page: number, limit: number): Promise<IQualification[]> {
    const skip = (page - 1) * limit;
    const data = await educationModel.find({}).skip(skip).limit(limit).lean();
    return data;
  }
}
