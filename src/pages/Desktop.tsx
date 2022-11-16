import React, { useState, useEffect, useRef } from 'react';
import styles from '../assets/styles/Desktop.module.css';
import {
  Box,
  Button,
  Typography,
  Backdrop,
  Fade,
  Modal,
  ListItem,
} from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import TaskForm from 'components/Desktop/TaskForm';
import { iconData } from '../components/helpers/icons';
import { calculateTotalTime } from 'components/helpers/timeCounter';
import { Task, TaskActive } from 'components/Desktop/Task';

const Desktop: React.FC<{}> = () => {
  const [timeCompleted, setTimeCompleted] = useState(3);
  const [dateState, setDateState] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [preloadedTask, setPreloadedTask] = useState(null);
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });
  const [currentTask, setCurrentTask] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 60000);
    calculateTotalTime(tasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const setActive = (id: number) => {
    setCurrentTask(null);
    const updatedList = tasks.map((task) => {
      if (task.id == id) {
        if (task.active == false) {
          setCurrentTask({ ...task, active: !task.active });
        }
        return { ...task, active: !task.active };
      }
      return { ...task, active: false };
    });
    setTasks(updatedList);
  };

  const newTaskHandler = (data) => {
    const task = {
      id: Date.now(),
      title: data.title,
      hours: data.hours,
      minutes: data.minutes,
      active: false,
      icon: data.icon,
    };

    setTasks([...tasks, task]);
  };

  const changeTask = (data) => {
    console.log(data);
  };

  const displayIcon = (value) => {
    if (value) {
      const object = iconData.find((el) => el.id === value);
      const Svg = object.Image;
      return <Svg className={styles.svg} />;
    }
  };

  console.log(currentTask);

  return (
    <Box className={styles.container}>
      <Box className={styles.columnLeft}>
        <Box>
          {currentTask && (
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
                Time completed: <strong>{timeCompleted}h</strong>
              </Typography>
              <TaskActive
                title={currentTask.title}
                icon={displayIcon(currentTask.icon)}
                id={currentTask.id}
                setActive={setActive}
                active={currentTask.active}
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
            Total time left: <strong>{calculateTotalTime(tasks)}</strong>
          </Typography>
          <Typography
            color="primary"
            fontWeight={200}
            className={styles.totalTimeLeft}
          >
            Total time completed: <strong>{calculateTotalTime(tasks)}</strong>
          </Typography>
          {tasks.map((task) => (
            <Task
              title={task.title}
              icon={displayIcon(task.icon)}
              id={task.id}
              setActive={setActive}
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
                  changeTask={changeTask}
                  handleExit={handleClose}
                  preloadedValues={preloadedTask}
                />
              </Box>
            </Fade>
          </Modal>
        </Box>
        <Box className={styles.dateContainer}>
          <Typography fontWeight={600} className={styles.taskHeaderTime}>
            {/* {dateState.toLocaleString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
              hour12: false,
            })} */}
            12:22
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
