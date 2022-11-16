export const calculateTotalTime = (tasks) => {
  let minutes;

  const taskHours = tasks.map((el) => el.hours).reduce((a, b) => a + b, 0);
  const taskMinutes = tasks.map((el) => el.minutes).reduce((a, b) => a + b, 0);

  const hours = Math.floor(taskMinutes / 60) + taskHours;
  if (taskMinutes > 60) {
    minutes = taskMinutes % 60;
  } else {
    minutes = taskMinutes;
  }

  const time = `${hours}h ${minutes}m`;

  return time;
};
