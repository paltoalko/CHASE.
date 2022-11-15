import React, { useState, useEffect } from 'react';
import styles from '../assets/styles/Desktop.module.css';
import {
  Box,
  Button,
  Typography,
  IconButton,
  Backdrop,
  Fade,
  Modal,
} from '@mui/material';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MoreTimeOutlinedIcon from '@mui/icons-material/MoreTimeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import StopRoundedIcon from '@mui/icons-material/StopRounded';
import TuneIcon from '@mui/icons-material/Tune';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { ReactComponent as Fitness } from '../assets/svg/fitness.svg';
import TaskForm from 'components/Desktop/TaskForm';
import { iconData } from '../components/helpers/icons';
import { calculateTotalTime } from 'components/helpers/timeCounter';

interface TaskProps {
  title: string;
  icon?: ReactJSXElement;
  iconRight?: ReactJSXElement;
  timeCompleted: string;
  timeLeft: string;
  active: boolean;
  setActive: () => void;
}

const task = { name: '', timeComplete: '', timeLeft: '', icon: '' };

const Task: React.FC<TaskProps> = ({
  title,
  icon,
  iconRight,
  timeCompleted,
  timeLeft,
  active,
  setActive,
}) => {
  return (
    <Box className={styles.taskContainer}>
      <Box className={styles.task}>
        {icon}
        <Box className={styles.taskText}>
          <Typography fontWeight={300} className={styles.title}>
            {title}
          </Typography>
        </Box>
        <Box>
          {/* <Typography
            variant="body2"
            fontWeight={200}
            className={styles.timeText}
          >
            Time left: {timeLeft}h
          </Typography>
          <Typography
            variant="body2"
            fontWeight={200}
            className={styles.timeText}
          >
            Time Completed: {timeCompleted}h
          </Typography> */}
        </Box>
        {/* <Box className={styles.options}>
            <EditOutlinedIcon color="primary" />
            <MoreTimeOutlinedIcon color="primary" />
            <DeleteOutlineOutlinedIcon color="primary" />
          </Box> */}
        <IconButton size="small">
          <TuneIcon className={styles.icon} />
        </IconButton>
      </Box>

      {active ? (
        <PlayArrowRoundedIcon className={styles.iconPlay} onClick={setActive} />
      ) : (
        <StopRoundedIcon className={styles.iconPlay} onClick={setActive} />
      )}
    </Box>
  );
};

const Desktop: React.FC<{}> = () => {
  const [timeLeft, setTimeLeft] = useState(9);
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 60000);
    calculateTotalTime(tasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleActive = (id) => {
    console.log(id, 'start');
  };

  const newTaskHandler = (data) => {
    console.log(data);

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

  return (
    <Box className={styles.container}>
      <Box className={styles.columnLeft}>
        <Box className={styles.timeContainer}>
          <Typography
            color="primary"
            fontWeight={200}
            className={styles.timeLeft}
          >
            Time left: <strong>{timeLeft}h</strong>
          </Typography>
          <Typography
            color="primary"
            fontWeight={200}
            className={styles.totalTimeLeft}
          >
            Total time left: <strong>{timeLeft}h</strong>
          </Typography>
          <Typography
            color="primary"
            fontWeight={200}
            className={styles.timeLeft}
          >
            Time completed: <strong>{timeCompleted}h</strong>
          </Typography>
          <Typography
            color="primary"
            fontWeight={200}
            className={styles.totalTimeLeft}
          >
            Total time completed: <strong>{timeLeft}h</strong>
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="body1"
            fontWeight={700}
            className={styles.taskHeader}
          >
            Tasks
          </Typography>
          {tasks.map((task) => (
            <Task
              title={task.title}
              active={task.active}
              icon={displayIcon(task.icon)}
              timeCompleted="2:33"
              timeLeft="2:07"
              setActive={handleActive(task.id)}
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
