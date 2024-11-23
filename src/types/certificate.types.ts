export interface ICertificate {
  id: string;
  userId: string;
  certificateName: string;
  issuedBy: string;
  issueDate: Date;
  expirationDate: Date;
  certificateUrl: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
} 