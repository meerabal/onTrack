export interface Course {
  name: string;
  color?: string;
}

export interface Task {
  name: string;
  course: string;
  date: Date;  // also stores time
  priority?: 'high' | 'medium' | 'low',
  workPeriods?: number;
  complete: boolean;
  color?: string;
}

export interface User { 
  username: string;
  password: string;
  events: Task [];
  courses: Course [];
}
