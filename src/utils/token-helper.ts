import moment from "moment";
import { encrypt, decrypt } from "./crypto-service";
import { IToken } from "../types/tokens.types";

export const generateAccessToken = async (user: any) => {
  try {
    user.expiresAt = moment().add(1, "days").toDate();
    return encrypt(user);
  } catch (error) {
    throw error;
  }
};

export const generateRefreshToken = async (user: any) => {
  try {
    user.expiresAt = moment().add(7, "days").toDate();
    return encrypt(user);
  } catch (error) {
    throw error;
  }
};

export const decryptToken = async (token: IToken) => {
  try {
    const decryptedToken = decrypt(token);
    if (moment().isAfter(moment(decryptedToken?.expiresAt))) {
      throw Error("Token expired.");
    }
    return decryptToken;
  } catch (error) {
    throw error;
  }
};
