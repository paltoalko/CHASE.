import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { ReactComponent as Logo } from '../assets/svg/logo.svg';
import styles from '../assets/styles/Header.module.css';
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

const Header: React.FC<{}> = ({}) => {
  return (
    <Box>
      <Box className={styles.headerContainer}>
        <Link to="/">
          <Logo />
        </Link>
        <Box className={styles.buttonsContainer}>
          <HeaderLink path="/desktop" title="Desktop Version" />
          <HeaderLink path="/contact" title="Contact" />
          <HeaderLink path="/careers" title="Careers" />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
