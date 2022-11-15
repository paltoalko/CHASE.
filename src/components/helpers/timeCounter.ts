export const calculateTotalTime = (tasks) => {
  let hours;
  let minutes;

  // get time from all tasks
  const taskHours = tasks.map((el) => el.hours).reduce((a, b) => a + b, 0);
  const taskMinutes = tasks.map((el) => el.minutes).reduce((a, b) => a + b, 0);
  // minutes add together and then divide by 60 rest add to hours

  // add reminder of minutes % 60 to have hours, then add to amount of hours

  //hours add together

  // return string of total hours and minutes together
  console.log(tasks.map((el) => el.minutes));
  console.log(taskMinutes % 60);
  console.log(tasks.map((el) => el.hours));
  console.log(taskHours);
};
