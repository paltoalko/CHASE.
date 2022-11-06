import React from 'react';
import styles from '../../assets/styles/NotificationsBox.module.css';
import { Box, Button, Typography } from '@mui/material';
import Notification1 from '../../assets/images/notification1.png';
import Notification2 from '../../assets/images/notification2.png';
import Notification3 from '../../assets/images/notification3.png';
import code from '../../assets/images/code.png';

const NotificationsBox: React.FC<{}> = ({}) => {
  return (
    <Box className={styles.container}>
      <Typography
        variant="h4"
        fontWeight="200"
        color="primary"
        className={styles.subheader2}
      >
        Aren't your eyes tired?
      </Typography>
      <Typography
        variant="h4"
        fontWeight="200"
        color="primary"
        className={styles.subheader2}
      >
        Maybe it's time to stand up and stretch?
      </Typography>
      <Typography
        variant="h4"
        fontWeight="500"
        color="primary"
        className={styles.subheader}
      >
        Be productive at all times.
      </Typography>
      <Box className={styles.notificationBox}>
        <img src={Notification2} />
        <img src={Notification1} />
        <img src={Notification3} />
      </Box>
      <img src={code} className={styles.background} />
    </Box>
  );
};

export default NotificationsBox;
