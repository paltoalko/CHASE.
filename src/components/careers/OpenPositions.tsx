import React from 'react';
import styles from '../../assets/styles/helpers/OpenPositions.module.css';
import { Box, Typography, Button } from '@mui/material';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { ReactComponent as ReactSvg } from '../../assets/svg/react.svg';
import { ReactComponent as Node } from '../../assets/svg/node.svg';

interface Iprops {
  position: string;
  salary: string;
  level: string;
  businessModel: string;
  onPress?(): void;
  icon: ReactJSXElement;
}

const Card: React.FC<Iprops> = ({
  position,
  salary,
  onPress,
  level,
  businessModel,
  icon,
}) => {
  return (
    <Box className={styles.card}>
      <Typography color="primary" variant="h6" sx={{ minHeight: '60px' }}>
        {position}
      </Typography>
      <Typography color="primary" variant="subtitle1">
        {salary} per annum
      </Typography>
      <Button onClick={onPress} variant="contained" color="secondary">
        Apply now
      </Button>
      <Typography color="primary" variant="body2">
        {level}
      </Typography>
      <Typography color="primary" variant="body2">
        {businessModel}
      </Typography>
      <Typography color="primary" variant="body2">
        Fully remote
      </Typography>
      {icon}
    </Box>
  );
};

const OpenPositions: React.FC<{}> = () => {
  const handlePress = () => {
    console.log('Write a message');
  };
  return (
    <Box className={styles.wrapper3}>
      <Box className={styles.wrapper2}>
        {' '}
        <Box className={styles.wrapper}>
          <Card
            position="React Developer"
            salary="50-70k"
            onPress={() => handlePress()}
            level="Junior"
            businessModel="B2B"
            icon={<ReactSvg className={styles.icon} />}
          />
          <Card
            position="React Native Developer"
            salary="80-120k"
            onPress={() => handlePress()}
            level="Senior"
            businessModel="B2B"
            icon={<ReactSvg className={styles.icon} />}
          />
          <Card
            position="NodeJS Developer"
            salary="80-120k"
            onPress={() => handlePress()}
            level="Senior"
            businessModel="B2B"
            icon={<Node className={styles.icon} />}
          />
          <Card
            position="NodeJS Developer"
            salary="50-70k"
            onPress={() => handlePress()}
            level="Junior"
            businessModel="B2B"
            icon={<Node className={styles.icon} />}
          />

          <Card
            position="UI Designer"
            salary="60-80k"
            onPress={() => handlePress()}
            level="Junior"
            businessModel="B2B"
            icon={<DesignServicesOutlinedIcon className={styles.icon} />}
          />

          <Box className={styles.card}>
            <Typography color="primary" variant="h6" sx={{ minHeight: '60px' }}>
              Couldn't find what you're looking for?
            </Typography>
            <Typography color="primary" variant="subtitle1">
              Write to us and we will find you something .
            </Typography>
            <Button
              onClick={() => handlePress()}
              variant="contained"
              color="secondary"
            >
              Contact us
            </Button>
            <ConnectWithoutContactIcon className={styles.icon} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OpenPositions;
