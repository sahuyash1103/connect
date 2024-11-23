import emergencyContactModel from '../models/emergencyContact.model';
import { IEmergencyContact } from '../types/emergencyContact.types';

export default class EmergencyContactService {
  async removeById(id: string): Promise<IEmergencyContact | null> {
    return await emergencyContactModel.findByIdAndDelete(id).lean();
  }

  async updateById(id: string, contact: IEmergencyContact): Promise<IEmergencyContact | null> {
    return await emergencyContactModel.findByIdAndUpdate(id, contact, {
      new: true,
    });
  }

  async create(contact: IEmergencyContact): Promise<IEmergencyContact> {
    return await emergencyContactModel.create(contact);
  }

  async getById(id: string): Promise<IEmergencyContact | null> {
    return await emergencyContactModel.findById(id).populate('user').lean();
  }

  async getAll(page: number, limit: number): Promise<IEmergencyContact[]> {
    const skip = (page - 1) * limit;
    return await emergencyContactModel.find({}).skip(skip).limit(limit).lean();
  }
} 