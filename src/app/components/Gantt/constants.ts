export const TASK_STATUS = [
  'unstarted',
  'started',
  'stuck',
  'completed',
];

export const DAY_WIDTH = 24;
export const OUTLINE_WIDTH = 400;

export type Task = {
  id: string
  title: string
  startDate: Date
  dueDate: Date
  userId?: string | null
  status: typeof TASK_STATUS[number]
};

export type User = {
  id: string
  firstName: string
  lastName: string
  avatar: string
};

export type Users = { [key: string]: User };

export type Tasks = { [key: string]: Task };

export type GanttContextType = {
  users: Users,
  tasks: Tasks,
  dateScale?: () => {}
};

export type GanttActions =
 | { type: 'SET_INITIAL_DATE_SCALE', totalWidth: number };
