import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
} from '@mui/material';
import { ReactComponent as Waves } from '../assets/svg/footerWaves.svg';
import styles from '../assets/styles/Footer.module.css';
import { Link } from 'react-router-dom';

interface LinkProps {
  path: string;
  title: string;
}

const HeaderLink: React.FC<LinkProps> = ({ path, title }) => {
  return (
    <Button component={Link} to={path} variant="text">
      <Typography variant="body1" fontWeight="light">
        {title}
      </Typography>
    </Button>
  );
};

const Footer: React.FC<{}> = ({}) => {
  const matches = useMediaQuery('(min-width:768px)');
  return (
    <Box className={styles.footer}>
      <Box className={styles.container}>
        <Waves className={styles.svg} />
        <Box className={styles.overlay} />
        <Box className={styles.buttonsContainer}>
          {matches && (
            <Box className={styles.linksContainer}>
              <HeaderLink path="/desktop" title="Desktop Version" />
              <HeaderLink path="/contact" title="Contact" />
              <HeaderLink path="/careers" title="Careers" />
            </Box>
          )}

          <Box className={styles.authorContainer}>
            <Typography
              variant={matches ? 'body1' : 'body2'}
              fontWeight="light"
              color="primary"
            >
              Copyright © 2022. All rights reserved. MWES
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
