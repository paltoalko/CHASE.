import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ReactComponent as Wave } from '../../assets/svg/wave-review.svg';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import styles from '../../assets/styles/ReviewsBox.module.css';

interface BoxProps {
  index: number;
}

const Review: React.FC<BoxProps> = ({ index }) => {
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
      text: `Very practical and useful, I'm now using it everyday!`,
    },
    {
      text: `Great app, I've even started hydrating myself properly because of the app notifs. `,
    },
    {
      text: `Wow, imagine feeling good and not having your eyes tired after coding sesh. With that app it is possible! Def recommend.`,
    },
  ];
  return (
    <Typography
      variant="caption"
      fontWeight={200}
      color="primary"
      fontStyle="italic"
      className={styles.reviewText}
      textAlign="center"
    >
      {reviews[index].text}
    </Typography>
  );
};

const ReviewBox: React.FC<{}> = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (e) => {
    if (e.target.id === 'left') {
      if (index === 0) {
        setIndex(5);
      } else {
        setIndex(index - 1);
      }
    } else if (e.target.id === 'right') {
      if (index === 5) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  };

  return (
    <Box className={styles.reviewsContainer}>
      <Box className={styles.headerBox}>
        <Typography
          variant="h6"
          fontWeight={300}
          color="primary"
          textAlign="center"
        >
          Your time matters:
        </Typography>
        <Box className={styles.reviewsBox}>
          <IconButton size="small" onClick={(e) => handleClick(e)}>
            <KeyboardArrowLeftIcon className={styles.icon} id="left" />
          </IconButton>

          <Box className={styles.reviews}>
            <Review index={index} />
            <Box className={styles.circleBox}>
              <Box
                className={index == 0 ? styles.circle : styles.circleActive}
              />
              <Box
                className={index == 1 ? styles.circle : styles.circleActive}
              />
              <Box
                className={index == 2 ? styles.circle : styles.circleActive}
              />
              <Box
                className={index == 3 ? styles.circle : styles.circleActive}
              />
              <Box
                className={index == 4 ? styles.circle : styles.circleActive}
              />
              <Box
                className={index == 5 ? styles.circle : styles.circleActive}
              />
            </Box>
          </Box>
          <IconButton size="small" onClick={(e) => handleClick(e)}>
            <KeyboardArrowRightIcon className={styles.iconRight} id="right" />
          </IconButton>
        </Box>
      </Box>
      <Wave className={styles.svg} />
    </Box>
  );
};

export default ReviewBox;
