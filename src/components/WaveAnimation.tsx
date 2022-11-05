import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { ReactComponent as Wave3 } from '../assets/svg/wave3.svg';
import { ReactComponent as Wave2 } from '../assets/svg/wave2.svg';
import styles from '../assets/styles/WaveAnimation.module.css';

function WaveAnimation() {
  return (
    <Box className={styles.waveBox}>
      <Wave3 className={styles.wave} />
      <Wave2 className={styles.wave2} />
    </Box>
  );
}

export default WaveAnimation;
