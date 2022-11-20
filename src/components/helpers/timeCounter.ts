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

export const calculateDoneTime = (tasks) => {
  let minutes;
  let hours;
  let time;

  const taskHours = tasks.map((el) => el.hoursDone).reduce((a, b) => a + b, 0);
  const taskMinutes = tasks
    .map((el) => el.minutesDone)
    .reduce((a, b) => a + b, 0);

  if (taskHours == 0 && taskMinutes == 0) {
    return (time = `0m`);
  } else {
    hours = Math.floor(taskMinutes / 60) + taskHours;

    if (taskMinutes > 60) {
      minutes = taskMinutes % 60;
    } else {
      minutes = taskMinutes;
    }
  }

  time = `${hours}h ${minutes}m`;

  return time;
};

export const calculateTime = (task, time) => {
  const taskTime = task.minutes + task.hours * 60;
  const minutes = time + task.minutesDone + task.hoursDone * 60;
  const minutesLeft = taskTime - time;
  const taskLeftMinutes = minutes % 60;
  const taskLeftHours = Math.floor(minutes / 60);
  const taskCompletedMinutes = minutesLeft % 60;
  const taskCompletedHours = Math.floor(minutesLeft / 60);

  return {
    ...task,
    minutes: taskCompletedMinutes,
    hours: taskCompletedHours,
    minutesDone: taskLeftMinutes,
    hoursDone: taskLeftHours,
  };
};

// after every minu
