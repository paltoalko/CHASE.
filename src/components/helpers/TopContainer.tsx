import React from 'react';
import styles from '../../assets/styles/helpers/TopContainer.module.css';
import { Box, Button, Typography } from '@mui/material';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

interface Iprops {
  title: string;
  text: string;
  icon: ReactJSXElement;
}

const TopContainer: React.FC<Iprops> = ({ title, text, icon }) => {
  return (
    <Box className={styles.topContainer}>
      <Box className={styles.headers}>
        <Typography
          variant="h3"
          fontWeight="bold"
          color="primary"
          sx={{ opacity: '0.5' }}
        >
          {title}
        </Typography>
        <Typography variant="h4" fontWeight={400} color="primary">
          {text}
        </Typography>
      </Box>
      {icon}
    </Box>
  );
};

export default TopContainer;
