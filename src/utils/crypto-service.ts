import crypto from "crypto";
import moment from "moment";
import { IToken } from "../types/tokens.types";

// Function to generate a random IV (initial vector)
function generateIV() {
  return crypto.randomBytes(16); // AES block size is 16 bytes
}

// Encryption and decryption key
const key = crypto.scryptSync(process.env.ENCRYPTION_KEY, "salt", 32);

// Function to encrypt an object
export const encrypt = (obj: any) => {
  const iv = generateIV();
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(JSON.stringify(obj), "utf8", "base64");
  encrypted += cipher.final("base64");
  return {
    iv: iv.toString("base64"),
    data: encrypted,
  };
};

// Function to decrypt an object
export const decrypt = (encryptedObj: IToken) => {
  const iv = Buffer.from(encryptedObj.iv, "base64");
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decrypted = decipher.update(encryptedObj.data, "base64", "utf8");
  decrypted += decipher.final("utf8");
  return JSON.parse(decrypted);
};
