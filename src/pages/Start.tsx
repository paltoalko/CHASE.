import React from 'react';
import { ReactComponent as Waves } from '../assets/svg/waves-mobile.svg';
import { ReactComponent as Iphone } from '../assets/svg/iphone-mobile.svg';

import styles from '../assets/styles/Start.module.css';
import { Box, Button, Typography } from '@mui/material';
import { LogoAppleAppstore, LogoGooglePlaystore } from 'react-ionicons';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import ActivityBox from '../components/start/ActivityBox';
import ReviewBox from '../components/start/ReviewsBox';
import NotificationsBox from '../components/start/NotificationsBox';

interface ButtonProps {
  store: string;
  title: string;
  icon: ReactJSXElement;
  onPress?(): void;
}

const StoreButton: React.FC<ButtonProps> = ({
  store,
  title,
  icon,
  onPress,
}) => {
  return (
    <Button onClick={onPress}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {icon}
        <Box
          sx={{
            ml: '1em',
            minWidth: '150px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography variant="subtitle2" fontWeight="light" lineHeight="1.5">
            {title}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold" lineHeight="1.5">
            {store}
          </Typography>
        </Box>
      </Box>
    </Button>
  );
};

const Start: React.FC<{}> = ({}) => {
  return (
    <Box className={styles.homeContainer}>
      <Box className={styles.topContainer}>
        <Box className={styles.buttonBox}>
          <Typography variant="h3" fontWeight="bold" color="primary">
            Be productive for once.
          </Typography>
          <Box className={styles.buttons}>
            <StoreButton
              store="AppStore"
              title="Download on the"
              onPress={() => console.log('lol')}
              icon={
                <LogoAppleAppstore color={'#ffffff'} height="3em" width="3em" />
              }
            />
            <StoreButton
              store="Google Play"
              title="Get it on"
              icon={
                <LogoGooglePlaystore
                  color={'#ffffff'}
                  height="3em"
                  width="3em"
                />
              }
            />
          </Box>
        </Box>
        <Box className={styles.iphone}>
          <Iphone className={styles.svgIphone} />
        </Box>
      </Box>
      <Box className={styles.wavesContainer}>
        <Typography
          variant="h4"
          fontWeight="400"
          color="primary"
          className={styles.subheader}
        >
          Be productive at all times.
        </Typography>
        <Typography
          variant="h4"
          fontWeight="200"
          color="primary"
          className={styles.subheader2}
        >
          Designed for programmers from programmers.
        </Typography>
        <Waves className={styles.svg} />
      </Box>
      <ActivityBox />
      <ReviewBox />
      <NotificationsBox />
    </Box>
  );
};

export default Start;
