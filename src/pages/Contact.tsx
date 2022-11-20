import React from 'react';
import styles from '../assets/styles/Contact.module.css';
import { Box, Button, Typography } from '@mui/material';
import { ReactComponent as ContactSvg } from '../assets/svg/contact.svg';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import TopContainer from '../components/helpers/TopContainer';
interface ContactProps {
  title: string;
  text: string;
  icon: ReactJSXElement;
  onPress?(): void;
}

const ContactBox: React.FC<ContactProps> = ({ title, text, icon, onPress }) => {
  return (
    <Box className={styles.contactCard}>
      <Box className={styles.cardTop}>
        {icon}
        <Typography
          variant="h4"
          fontWeight={500}
          color="primary"
          textAlign="justify"
        >
          {text}
        </Typography>
      </Box>

      <Button variant="text" onClick={onPress}>
        <Typography variant="h4" fontWeight="bold" color="secondary">
          {title}
        </Typography>
      </Button>
    </Box>
  );
};

const Contact: React.FC<{}> = () => {
  return (
    <Box className={styles.container}>
      <TopContainer
        text="How to reach us"
        title="Contact"
        icon={<ContactSvg className={styles.svg} />}
      />
      <Box className={styles.contactContainer}>
        <ContactBox
          title="GIVE US A VISIT"
          text="Ruppert Terrace 20E, Sunny Valey
California, USA"
          icon={<PlaceOutlinedIcon className={styles.icon} />}
        />
        <ContactBox
          title="CALL US"
          text="+48 123 456 789"
          icon={<AlternateEmailOutlinedIcon className={styles.icon} />}
        />
        <ContactBox
          title="WRITE US A MESSAGE"
          text="office@chase.io"
          icon={<LocalPhoneOutlinedIcon className={styles.icon} />}
        />
      </Box>
    </Box>
  );
};

export default Contact;
