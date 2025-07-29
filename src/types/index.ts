export interface User {
  id: string;
  email: string;
  name: string;
  farmName?: string;
  location?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  farmName?: string;
  location?: string;
}

export interface Crop {
  id: string;
  name: string;
  variety?: string;
  plantingDate?: Date;
  expectedHarvestDate?: Date;
  area: number;
  status: 'planned' | 'planted' | 'growing' | 'harvested';
}

export interface Pest {
  id: string;
  name: string;
  type: 'pest' | 'disease' | 'weed';
  description: string;
  symptoms: string[];
  treatments: Treatment[];
}

export interface Treatment {
  id: string;
  name: string;
  type: 'pesticide' | 'herbicide' | 'fungicide' | 'organic';
  activeIngredient: string;
  dosage: string;
  applicationMethod: string;
  safetyPeriod: number;
}

export interface Activity {
  id: string;
  date: Date;
  type: 'planting' | 'irrigation' | 'fertilization' | 'pest_control' | 'harvesting' | 'other';
  description: string;
  cropId?: string;
  animalId?: string;
  cost?: number;
  notes?: string;
}

export interface Animal {
  id: string;
  type: 'cattle' | 'sheep' | 'goat' | 'pig' | 'chicken' | 'other';
  breed?: string;
  age?: number;
  weight?: number;
  healthStatus: 'healthy' | 'sick' | 'treatment' | 'quarantine';
  lastCheckup?: Date;
  vaccinations: Vaccination[];
}

export interface Vaccination {
  id: string;
  name: string;
  date: Date;
  nextDue?: Date;
  veterinarian?: string;
}

export interface Recommendation {
  id: string;
  type: 'planting' | 'harvesting' | 'treatment' | 'feeding' | 'vaccination';
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  dueDate?: Date;
  relatedId?: string;
}