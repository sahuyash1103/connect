import educationModel from '../models/education.model';
import { IEducation } from '../types/education.types';

export default class EducatoionService {
  async removeById(educationId: string) {
    return await educationModel.findByIdAndDelete(educationId).lean()
  }
  async updateById(educationId: string, educationObj: IEducation) {
    return await educationModel.findByIdAndUpdate(educationId, educationObj, {new:true})
  }
  async create(educationObj: IEducation) {
    return await educationModel.create(educationObj)
  }
  async getById(educationId: string) {
    return await educationModel.findById(educationId).lean()
  }
  async getAll(page: number ,limit: number):Promise<IEducation[]>{
    const skip = (page-1)*limit
    const data = await educationModel.find({}).skip(skip).limit(limit).lean()
    return data 
  }
}
