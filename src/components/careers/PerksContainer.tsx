import React from 'react';
import styles from '../../assets/styles/helpers/PerksContainer.module.css';
import { Box, Typography } from '@mui/material';
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
  description?: string;
  svg: ReactJSXElement;
}

const ListItem: React.FC<Iprops> = ({ title, description, svg }) => {
  return (
    <Box className={styles.listItemMobile}>
      <Box className={styles.textBox}>
        <Box className={styles.text}>
          <Typography
            variant="h4"
            fontWeight={600}
            color="secondary"
            textAlign="center"
            className={styles.header}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            fontWeight={100}
            color="primary"
            textAlign="center"
            className={styles.description}
          >
            {description}
          </Typography>
        </Box>
      </Box>

      {svg}
    </Box>
  );
};

const PerksContainer: React.FC<{}> = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.listMobile}>
        <ListItem
          title="Remote Work"
          description="You can work remotely anywhere from the world, we are remote first company."
          svg={<WorkingRemote className={styles.svg} />}
        />
        <ListItem
          title="Insurance"
          description="We will cover all of your medical expenses, with us you are safe."
          svg={<Doctors className={styles.svg} />}
        />

        <ListItem
          title="Fitness"
          description="We will give you allowance so you can spend up to 5k per annum for sports!"
          svg={<Fitness className={styles.svg} />}
        />
        <ListItem
          title="Education"
          description="We value education and your constant progress, per annum everyone have 3000$ to spend on their education."
          svg={<Education className={styles.svg} />}
        />
        <ListItem
          title="Biking"
          description="You like riding bike? Great! Now you'll be getting 1$ for every mile."
          svg={<Bike className={styles.svg} />}
        />
        <ListItem
          title="Steps"
          description="We know that it is important to move, so for every 5k steps/month you'll get additional 100$."
          svg={<Walking className={styles.svg} />}
        />
        <ListItem
          title="Transport"
          description="We care about our enviroment, so should you. All public transport expenses are covered by us."
          svg={<Transport className={styles.svg} />}
        />
      </Box>
    </Box>
  );
};

export default PerksContainer;
