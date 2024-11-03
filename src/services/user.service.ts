import { ObjectId, Types } from 'mongoose';
import User from '../models/user.model';
import { IUser } from '@/types/user.types';

export default class UserService {
  async updatePassword(_id: string | undefined, password: any) {
   
  }
  
  async createUser(newUser: IUser): Promise<IUser> {
    const user = await User.create(newUser);
    return user;
  }
  async findByUserName(userName: string): Promise<IUser | null> {
    const user = await User.findOne({ userName: userName }).lean();

    return user;
  }

  async findByUserNameWithPassword(userName: string): Promise<IUser | null> {
    const user = await User.findOne({ userName: userName })
      .select(['+password'])
      .lean();

    return user;
  }
}
