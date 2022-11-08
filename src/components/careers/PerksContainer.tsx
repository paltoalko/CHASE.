import React from 'react';
import styles from '../../assets/styles/helpers/PerksContainer.module.css';
import { Box, Button, Typography } from '@mui/material';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { ReactComponent as Transport } from '../../assets/svg/transport.svg';
import { ReactComponent as Bike } from '../../assets/svg/bike.svg';
import { ReactComponent as Doctors } from '../../assets/svg/doctors.svg';
import { ReactComponent as Education } from '../../assets/svg/education.svg';
import { ReactComponent as Fitness } from '../../assets/svg/fitness.svg';
import { ReactComponent as Walking } from '../../assets/svg/walking.svg';
import { ReactComponent as WorkingRemote } from '../../assets/svg/workingRemote.svg';

interface Iprops {
  title: string;
  svg: ReactJSXElement;
}

const ListItem: React.FC<Iprops> = ({ title, svg }) => {
  return (
    <Box className={styles.listItemMobile}>
      <Box className={styles.textBox}>
        <Typography
          variant="h6"
          fontWeight={300}
          color="primary"
          textAlign="center"
          className={styles.text}
        >
          {title}
        </Typography>
      </Box>

      {svg}
    </Box>
  );
};

const PerksContainer: React.FC<{}> = ({}) => {
  return (
    <Box className={styles.container}>
      {/* mobile view => list and browser view => reveal cursor */}
      <Box className={styles.listMobile}>
        <ListItem
          title="Transport Allowance"
          svg={<Transport className={styles.svg} />}
        />
        <ListItem
          title="1 USD for every mile on bike"
          svg={<Bike className={styles.svg} />}
        />
        <ListItem
          title="Full medical insurance"
          svg={<Doctors className={styles.svg} />}
        />
        <ListItem
          title="3000$ per annum for you education"
          svg={<Education className={styles.svg} />}
        />
        <ListItem
          title="Free access to various fitness centers"
          svg={<Fitness className={styles.svg} />}
        />
        <ListItem
          title="100USD for every 5k steps monthly"
          svg={<Walking className={styles.svg} />}
        />
        <ListItem
          title="Work from anywhere"
          svg={<WorkingRemote className={styles.svg} />}
        />
      </Box>
    </Box>
  );
};

export default PerksContainer;
