import React, { useState } from 'react';
import styles from '../../assets/styles/Desktop.module.css';
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

interface TaskProps {
  title: string;
  icon?: ReactJSXElement;
  id: number;
  active: boolean;
  setActive: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ title, icon, id, active, setActive }) => {
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

          <IconButton size="small">
            <TuneIcon className={styles.icon} />
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
