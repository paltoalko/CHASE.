import React from 'react';
import { Box, Typography } from '@mui/material';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { ReactComponent as Study } from '../../assets/svg/studying.svg';
import { ReactComponent as Work } from '../../assets/svg/working.svg';
import { ReactComponent as Programming } from '../../assets/svg/programming.svg';
import styles from '../../assets/styles/ActivityBox.module.css';

interface BoxProps {
  title: string;
  icon: ReactJSXElement;
}

const Activity: React.FC<BoxProps> = ({ title, icon }) => {
  return (
    <Box className={styles.activity}>
      {icon}
      <Typography
        variant="h6"
        fontWeight={300}
        color="primary"
        className={styles.title}
      >
        {title}
      </Typography>
    </Box>
  );
};

const ActivityBox: React.FC<{}> = () => {
  return (
    <Box className={styles.activities}>
      <Activity icon={<Work className={styles.svg} />} title="Working" />
      <Activity icon={<Study className={styles.svg} />} title="Studying" />
      <Activity
        icon={<Programming className={styles.svg} />}
        title="Programming"
      />
    </Box>
  );
};

export default ActivityBox;
