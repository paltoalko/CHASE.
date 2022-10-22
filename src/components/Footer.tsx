import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
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
      <Typography variant="h6" fontWeight="light">
        {title}
      </Typography>
    </Button>
  );
};

const Footer: React.FC<{}> = ({}) => {
  return (
    <Box className={styles.footerContainer}>
      <Waves className={styles.waves} />
      <Box className={styles.buttonsContainer}>
        <Box className={styles.linksContainer}>
          <HeaderLink path="/desktop" title="Desktop Version" />
          <HeaderLink path="/contact" title="Contact" />
          <HeaderLink path="/careers" title="Careers" />
        </Box>
        <Box className={styles.authorContainer}>
          <Typography variant="h6" fontWeight="light" color="primary">
            Copyright © 2022. All rights reserved. MWES
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
