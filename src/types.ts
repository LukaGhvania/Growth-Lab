export type GrowthStage = 'Seed' | 'Germination' | 'Seedling' | 'Young' | 'Adult' | 'Flowering' | 'Wilting' | 'Dead';

export interface PlantState {
  id: string;
  name: string;
  type: string;
  stage: GrowthStage;
  health: number; // 0 to 100
  height: number; // in cm
  leaves: number;
  waterLevel: number; // current water in soil (0-100)
  lightLevel: number; // current light exposure (0-100)
  day: number;
  photosynthesisEfficiency: number; // 0 to 100
}

export interface UserState {
  name: string;
  role: 'student' | 'teacher';
  points: number;
  badges: string[];
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: { id: string; text: string; isCorrect: boolean }[];
  explanation: string;
}

export interface ExperimentRecord {
  id: string;
  date: string;
  durationDays: number;
  finalHealth: number;
  finalHeight: number;
  waterCondition: string;
  lightCondition: string;
}
