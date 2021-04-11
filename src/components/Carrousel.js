import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        imgPath:
        'https://www.pixel4k.com/wp-content/uploads/2018/09/train-railway-platform-wagon-4k_1538068776.jpg',
    },
    {
        imgPath:
        'https://images.hdqwalls.com/wallpapers/train-anime-art-4k-yp.jpg',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        flexGrow: 1,
    },
    img: {
        objectFit: 'cover',
        height: 500,
        display: 'block',
        overflow: 'hidden',
        width: '100%',
    },
}));

function SwipeableTextMobileStepper() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
            <Typography>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
        >
        {tutorialSteps.map((step, index) => (
        <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
            <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
        </div>
        ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
                <div/>
            }
            backButton={
                <div/>
            }
            />
        </div>
    );
}

export default SwipeableTextMobileStepper;