export interface Course {
  name: string;
  color?: string;
}

export interface Task {
  name: string;
  course: string;
  date: Date;  // also stores time
  complete: boolean;
  priority?: 'high' | 'medium' | 'low',
  workPeriods?: number;
}

export interface User { 
  username: string;
  password: string;
  events: Task [];
  courses: Course [];
}
