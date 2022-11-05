import React from 'react';
import { Box, Typography } from '@mui/material';
import { ReactComponent as Wave } from '../../assets/svg/wave-review.svg';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import styles from '../../assets/styles/ReviewsBox.module.css';

interface BoxProps {
  text: string;
}

const reviews = [
  {
    text: `I've tried a lot of apps with a similar purpose but this is by far the best. Easy to use, pleasant UI/UX. Pro version definitely worth it.`,
  },
  {
    text: `This app is great for all people. Finally one designed for programmers.`,
  },
  {
    text: `You guys are the best! Now I can properly focus on my projects and finally I've finished many projects, that were too much time consuming for me.`,
  },
  {
    text: `Very practical and usefull, I'm now using it everyday!`,
  },
  {
    text: `Great app, I've even started hydrating myself properly because of the app notifs. `,
  },
];

const Review: React.FC<BoxProps> = ({ text }) => {
  return (
    <Typography
      variant="body2"
      fontWeight={200}
      color="primary"
      fontStyle="italic"
      className={styles.reviewText}
    >
      {/* {text} */}
      {reviews[0].text}
    </Typography>
  );
};

const ReviewBox: React.FC<{}> = () => {
  //add swipe effect

  return (
    <Box className={styles.reviewsContainer}>
      <Wave className={styles.svg} />
      <Box className={styles.reviewsBox}>
        <KeyboardArrowLeftIcon className={styles.icon} />
        <Box className={styles.reviews}>
          <Typography variant="h6" fontWeight={300} color="primary">
            Your time matters:
          </Typography>
          <Review text="superb app" />
          <Box className={styles.circleBox}>
            <Box className={styles.circle} />
            <Box className={styles.circle} />
            <Box className={styles.circle} />
            <Box className={styles.circle} />
            <Box className={styles.circleActive} />
          </Box>
        </Box>
        <KeyboardArrowRightIcon className={styles.icon} />
      </Box>
    </Box>
  );
};

export default ReviewBox;
