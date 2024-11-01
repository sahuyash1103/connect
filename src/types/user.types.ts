export interface IUser {
  _id?: string; // Optional for new documents
  firstName: string;
  middleName?: string; // Optional field
  lastName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  password: string;
  isOnboarded: boolean;
  createdAt?: Date; // Optional, added by Mongoose
  updatedAt?: Date; // Optional, added by Mongoose
}
