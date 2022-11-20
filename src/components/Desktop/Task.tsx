import React from 'react';
import styles from '../../assets/styles/Desktop.module.css';
import { Box, Typography, IconButton } from '@mui/material';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import StopRoundedIcon from '@mui/icons-material/StopRounded';
import TuneIcon from '@mui/icons-material/Tune';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface TaskProps {
  title: string;
  icon?: ReactJSXElement;
  id: number;
  active?: boolean;
  setActive: (id: number) => void;
  deleteTask?: (id: number) => void;
  changeTask?: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({
  title,
  icon,
  id,
  active,
  setActive,
  deleteTask,
  changeTask,
}) => {
  return (
    !active && (
      <Box className={styles.taskContainer}>
        <Box className={styles.task} boxShadow={10}>
          {icon}
          <Box className={styles.taskText}>
            <Typography fontWeight={300} className={styles.title}>
              {title}
            </Typography>
          </Box>

          <IconButton
            size="small"
            onClick={() => {
              changeTask(id);
            }}
          >
            <TuneIcon className={styles.icon} />
          </IconButton>
          <IconButton
            size="small"
            onClick={() => {
              deleteTask(id);
            }}
          >
            <DeleteForeverIcon className={styles.icon} />
          </IconButton>
        </Box>

        <IconButton
          onClick={() => {
            setActive(id);
          }}
          key={id}
        >
          <PlayArrowRoundedIcon className={styles.iconPlay} />
        </IconButton>
      </Box>
    )
  );
};

const TaskActive: React.FC<TaskProps> = ({ title, icon, id, setActive }) => {
  return (
    <Box className={styles.taskContainer}>
      <Box className={styles.taskActive} boxShadow={10}>
        {icon}
        <Box className={styles.taskText}>
          <Typography fontWeight={300} className={styles.title}>
            {title}
          </Typography>
        </Box>
      </Box>

      <IconButton
        onClick={() => {
          setActive(id);
        }}
        key={id}
      >
        <StopRoundedIcon className={styles.iconStop} />
      </IconButton>
    </Box>
  );
};

export { Task, TaskActive };
