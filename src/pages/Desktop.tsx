import React, { useState, useEffect, useRef } from 'react';
import styles from '../assets/styles/Desktop.module.css';
import {
  Box,
  Button,
  Typography,
  Backdrop,
  Fade,
  Modal,
  Alert,
  Collapse,
  IconButton,
} from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import TaskForm from 'components/Desktop/TaskForm';
import { iconData } from '../components/helpers/icons';
import {
  calculateTotalTime,
  calculateDoneTime,
  calculateTime,
} from 'components/helpers/timeCounter';
import { Task, TaskActive } from 'components/Desktop/Task';
import TaskFinished from 'components/Desktop/TaskFinished';
import CloseIcon from '@mui/icons-material/Close';

const Desktop: React.FC<{}> = () => {
  const [dateState, setDateState] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [taskFinished, setTaskFinished] = useState();
  const [finishedAlert, setFinishedAlert] = useState(false);
  const [activeAlert, setActiveAlert] = useState(false);
  const [preloadedTask, setPreloadedTask] = useState({} || null);
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks != undefined) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });
  const [currentTask, setCurrentTask] = useState(() => {
    const savedTasks = localStorage.getItem('currentTask');

    if (savedTasks != undefined) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });

  const interval = useRef(null);
  const handleOpen = () => {
    setPreloadedTask(null), setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const closeTaskFinished = () => setFinishedAlert(false);

  useEffect(() => {
    currentTask && currentTask.length != 0 && startTimer(currentTask);
  }, []);

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  useEffect(() => {
    if (currentTask && currentTask.minutes + currentTask.hours == 0) {
      setTaskFinished(currentTask);
      setFinishedAlert(true);
      setActive(currentTask.id);
    }
  }, [currentTask]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('currentTask', JSON.stringify(currentTask));
  }, [tasks]);

  const setActive = (id: number) => {
    const updatedList = tasks.map((task) => {
      if (task.id == id) {
        if (task.active == false) {
          currentTask &&
            ((currentTask.active = false), startTimer(currentTask));
          const taskActive = { ...task, active: !task.active };
          setCurrentTask(taskActive);
          startTimer(taskActive);
        } else if (task.active == true) {
          const taskActive = { ...task, active: !task.active };
          setCurrentTask(null);
          startTimer(taskActive);
        }
        return { ...task, active: !task.active };
      }
      return { ...task, active: false };
    });

    setTasks(updatedList);
  };

  const startTimer = (task) => {
    let displayedTime = 0;
    console.log('display time', task);

    if (task.active == true) {
      interval.current = setInterval(() => {
        const updatedList =
          tasks &&
          tasks.map((el) => {
            if (el.id == task.id) {
              displayedTime++;
              const updatedTask = calculateTime(task, displayedTime);
              setCurrentTask(updatedTask);
              return updatedTask;
            } else return el;
          });

        setTasks(updatedList);
      }, 100);
    } else if (task.active == false) {
      clearInterval(interval.current);
    }
  };

  const newTaskHandler = (data) => {
    const task = {
      id: Date.now(),
      title: data.title,
      hours: data.hours,
      minutes: data.minutes,
      hoursDone: 0,
      minutesDone: 0,
      active: false,
      icon: data.icon,
    };

    setTasks([...tasks, task]);
  };

  const changedTaskHandler = (data, id) => {
    const updatedList = tasks.map((el) => {
      if (el.id == id) {
        const task = {
          ...el,
          title: data.title,
          icon: data.icon,
          hours: data.hours,
          minutes: data.minutes,
        };
        return task;
      } else return el;
    });
    setTasks(updatedList);
  };

  const changeTask = (id) => {
    const obj = tasks.find((el) => el.id == id);
    const values = {
      ...obj,
      minutes: obj.minutes,
      hours: obj.hours,
    };
    console.log(obj.hours);
    setPreloadedTask(values);
    setOpen(true);
  };

  const deleteTask = (id) => {
    if (currentTask) {
      setActiveAlert(true);
      return;
    } else {
      const updatedList = tasks.filter((task) => task.id != id);
      setTasks(updatedList);
    }
  };

  const displayIcon = (value) => {
    if (value) {
      const object = iconData.find((el) => el.id === value);
      const Svg = object.Image;
      return <Svg className={styles.svg} />;
    }
  };

  return (
    <Box className={styles.container}>
      {finishedAlert && (
        <TaskFinished
          title={taskFinished.title}
          id={taskFinished.id}
          handleClose={closeTaskFinished}
          deleteTask={deleteTask}
          open={finishedAlert}
        />
      )}
      <Box className={styles.columnLeft}>
        <Box>
          <Box sx={{ width: '100%' }}>
            <Collapse in={activeAlert}>
              <Alert
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setActiveAlert(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Please stop current task before deleting other tasks.
              </Alert>
            </Collapse>
          </Box>
          {currentTask && currentTask.length != 0 && (
            <Box>
              <Typography
                variant="body1"
                fontWeight={700}
                className={styles.taskHeader}
              >
                Task active
              </Typography>

              <Typography
                color="primary"
                fontWeight={200}
                className={styles.timeLeft}
              >
                Time left:{' '}
                <strong>
                  {currentTask.hours}h {currentTask.minutes}m
                </strong>
              </Typography>
              <Typography
                color="primary"
                fontWeight={200}
                className={styles.timeLeft}
              >
                Time completed:{' '}
                <strong>
                  {currentTask.hoursDone}h {currentTask.minutesDone}m
                </strong>
              </Typography>

              <TaskActive
                title={currentTask.title}
                icon={displayIcon(currentTask.icon)}
                id={currentTask.id}
                setActive={setActive}
                key={currentTask.id}
              />
            </Box>
          )}
          <Typography
            variant="body1"
            fontWeight={700}
            className={styles.taskHeader}
          >
            Tasks
          </Typography>
          <Typography
            color="primary"
            fontWeight={200}
            className={styles.totalTimeLeft}
          >
            Total time left:
            <strong>{tasks ? calculateTotalTime(tasks) : '0h 0m'}</strong>
          </Typography>
          <Typography
            color="primary"
            fontWeight={200}
            className={styles.totalTimeLeft}
          >
            Total time completed:
            <strong>{tasks ? calculateDoneTime(tasks) : '0h 0m'}</strong>
          </Typography>
          {tasks &&
            tasks.map((task) => (
              <Task
                title={task.title}
                icon={displayIcon(task.icon)}
                id={task.id}
                setActive={setActive}
                deleteTask={deleteTask}
                changeTask={changeTask}
                active={task.active}
                key={task.id}
              />
            ))}
        </Box>
      </Box>
      <Box className={styles.columnRight}>
        <Box>
          {' '}
          <Button title="Add Task" onClick={handleOpen}>
            <AddRoundedIcon className={styles.addIcon} />
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box className={styles.modal}>
                <TaskForm
                  newTaskHandler={newTaskHandler}
                  changedTaskHandler={changedTaskHandler}
                  handleExit={handleClose}
                  preloadedValues={preloadedTask}
                />
              </Box>
            </Fade>
          </Modal>
        </Box>
        <Box className={styles.dateContainer}>
          <Typography fontWeight={600} className={styles.taskHeaderTime}>
            {dateState.toLocaleString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
              hour12: false,
            })}
          </Typography>
          <Typography fontWeight={600} className={styles.taskHeaderDay}>
            {dateState.toLocaleDateString('en-GB', {
              weekday: 'long',
            })}
          </Typography>
          <Typography fontWeight={600} className={styles.taskHeaderDate}>
            {dateState.toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Desktop;
