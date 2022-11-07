import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  Fade,
  Slide,
} from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ReactComponent as Logo } from '../assets/svg/logo.svg';
import styles from '../assets/styles/Header.module.css';
import { Link } from 'react-router-dom';

interface LinkProps {
  path: string;
  title: string;
  onClick?(): any;
}

const HeaderLink: React.FC<LinkProps> = ({ path, title, onClick }) => {
  return (
    <Button
      component={Link}
      to={path}
      variant="text"
      className={styles.headerButton}
      onClick={onClick}
    >
      <Typography variant="h6" fontWeight="light" textAlign="center">
        {title}
      </Typography>
    </Button>
  );
};

const Header: React.FC<{}> = ({}) => {
  // fix transition effect
  const matches = useMediaQuery('(min-width:767px)');
  const [open, setOpen] = useState(true);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(true);
    }
  };
  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
  return matches ? (
    <Box className={styles.header}>
      <Link to="/">
        <Logo className={styles.logo} />
      </Link>
      <Box className={styles.buttonsContainer}>
        <HeaderLink path="/desktop" title="Desktop Version" />
        <HeaderLink path="/contact" title="Contact" />
        <HeaderLink path="/careers" title="Careers" />
      </Box>
    </Box>
  ) : (
    <Box ref={ref} className={styles.smallHeader}>
      {open ? (
        <MenuIcon
          color="primary"
          className={styles.menuButton}
          onClick={() => handleClick()}
        />
      ) : (
        <Fade in={!open}>
          <CloseIcon
            color="primary"
            className={styles.menuButton}
            onClick={() => handleClick()}
          />
        </Fade>
      )}

      <Logo className={styles.logo} />
      <Slide in={!open} direction="left" mountOnEnter unmountOnExit>
        <Box className={styles.buttonsContainer}>
          <HeaderLink path="/" title="Home" onClick={() => handleClick()} />
          <HeaderLink
            path="/desktop"
            title="Desktop Version"
            onClick={() => handleClick()}
          />
          <HeaderLink
            path="/contact"
            title="Contact"
            onClick={() => handleClick()}
          />
          <HeaderLink
            path="/careers"
            title="Careers"
            onClick={() => handleClick()}
          />
        </Box>
      </Slide>
    </Box>
  );
};

export default Header;
