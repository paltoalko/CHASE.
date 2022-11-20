export type FormValues = {
  title: string;
  hours: number;
  minutes: number;
  message: string;
  icon: string;
  active: boolean;
  id: number;
};

export type TaskType = {
  id: number;
  title: string;
  hours: number;
  minutes: number;
  hoursDone: number;
  minutesDone: number;
  active: boolean;
  icon: string;
};
