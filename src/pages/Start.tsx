import React from 'react';
import { ReactComponent as Waves } from '../assets/svg/wavesStart.svg';
import styles from '../assets/styles/Start.module.css';
import { Box, Button, Typography } from '@mui/material';

const Start: React.FC<{}> = ({}) => {
  return (
    <Box className={styles.homeContainer}>
      <Box className={styles.topContainer}>
        <Typography variant="h3" fontWeight="bold" color="primary">
          Be productive for once.
        </Typography>
        <Button>App Store</Button>
        <Button>Google Play</Button>
      </Box>
      <Waves className={styles.wave} />;
    </Box>
  );
};

export default Start;
