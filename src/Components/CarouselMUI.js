import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Button } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '300px',
    marginTop: theme.spacing(4),
  },
  carousel: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  slideContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  slide: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    transition: 'transform 300ms ease-in-out',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(0, 1),
  },
}));

const images = [
  'https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1513&q=80',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://plus.unsplash.com/premium_photo-1676823570926-238f23020786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
];

const CarouselMUI = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => (prevStep - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % images.length);
  };

  return (
    <div className={classes.root}>
      <div className={classes.carousel}>
        <SwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
        >
          {images.map((image, index) => (
            <div key={index} className={classes.slide}>
              <Paper elevation={3} className={classes.slideContainer}>
                <img src={image} alt={`Slide ${index}`} className={classes.image} />
              </Paper>
            </div>
          ))}
        </SwipeableViews>
        <div className={classes.buttonContainer}>
          <Button
            onClick={handlePrev}
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarouselMUI;
