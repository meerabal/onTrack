export interface Task {
  name: string;
  color: string;
  startDate: Date;  // also stores time
  endDate: Date;
  complete: boolean;
}

export interface User { 
  username: string;
  password: string;
  events: Task [];
}
