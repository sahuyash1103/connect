import studentModel from '../models/student.model';
import { IStudent } from '../types/student.types';

export default class StudentService {
  async removeById(id: string): Promise<IStudent | null> {
    return await studentModel.findByIdAndDelete(id).lean();
  }

  async updateById(id: string, student: IStudent): Promise<IStudent | null> {
    return await studentModel.findByIdAndUpdate(id, student, {
      new: true,
    });
  }

  async create(student: IStudent): Promise<IStudent> {
    return await studentModel.create(student);
  }

  async getById(id: string): Promise<IStudent | null> {
    return await studentModel.findById(id)
      .populate('user')
      .populate('socials')
      .lean();
  }

  async getAll(page: number, limit: number): Promise<IStudent[]> {
    const skip = (page - 1) * limit;
    return await studentModel.find({}).skip(skip).limit(limit).lean();
  }
} 