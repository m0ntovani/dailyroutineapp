export interface Task {
  id: string;
  title: string;
  description?: string;
  category: TaskCategory;
  priority: TaskPriority;
  completed: boolean;
  createdAt: Date;
  completedAt?: Date;
  estimatedTime?: number; // in minutes
}

export type TaskCategory = 'trabalho' | 'pessoal' | 'saude' | 'estudo' | 'casa' | 'outros';

export type TaskPriority = 'baixa' | 'media' | 'alta' | 'urgente';

export interface DayStats {
  total: number;
  completed: number;
  percentage: number;
  timeSpent: number;
}