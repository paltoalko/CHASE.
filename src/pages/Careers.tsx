import React from 'react';
import styles from '../assets/styles/Careers.module.css';
import { Box, Button, Typography } from '@mui/material';
import TopContainer from '../components/helpers/TopContainer';
import { ReactComponent as CareersSvg } from '../assets/svg/careers.svg';
import { ReactComponent as Waves } from '../assets/svg/waves-careers.svg';
import { ReactComponent as WavesHeader } from '../assets/svg/waves-header.svg';
import PerksContainer from '../components/careers/PerksContainer';
import OpenPositions from '../components/careers/OpenPositions';

const Careers: React.FC<{}> = ({}) => {
  return (
    <Box>
      <TopContainer
        title="CAREERS"
        text="Are you ready to work with us?"
        icon={<CareersSvg className={styles.svg} />}
      />
      <Box>
        <Box className={styles.wavesContainer}>
          <Typography
            variant="h4"
            fontWeight="400"
            color="primary"
            className={styles.subheader2}
          >
            As a company we can offer you many great things!
          </Typography>
          <Waves className={styles.svgWave} />
        </Box>
      </Box>
      <PerksContainer />
      <Typography
        variant="h3"
        fontWeight="700"
        color="primary"
        className={styles.subheaderWaveHeader}
      >
        Currently we are looking for
      </Typography>

      <OpenPositions />
    </Box>
  );
};

export default Careers;
