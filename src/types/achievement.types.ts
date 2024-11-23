export enum AchievementCategory {
  SPORTS = 'SPORTS',
  ACADEMICS = 'ACADEMICS',
  CULTURAL = 'CULTURAL',
  TECHNICAL = 'TECHNICAL',
  OTHER = 'OTHER'
}

export enum AchievementLevel {
  SCHOOL = 'SCHOOL',
  DISTRICT = 'DISTRICT',
  STATE = 'STATE',
  NATIONAL = 'NATIONAL',
  INTERNATIONAL = 'INTERNATIONAL'
}

export interface IAchievement {
  id: string;
  userId: string;
  title: string;
  description: string;
  category: AchievementCategory;
  dateAchieved: Date;
  level: AchievementLevel;
  organizationName: string;
  certificateUrl: string;
  proofDocumentUrl: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
} 