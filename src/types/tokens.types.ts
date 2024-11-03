export interface IToken {
  iv: string;
  data: string;
}

export interface ITokenData {
  _id: string;
  fullName: string;
  email?: string;
  phoneNumber?: string;
  userName: string;
  expiresAt?: Date;
}
