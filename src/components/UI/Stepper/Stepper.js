import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        paper: {
            margin: theme.spacing(1),
            padding: theme.spacing(2)
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    }),
);

function getSteps() {
    return ['Order Placed', 'Order Confirmed', 'Flight Confirmed', 'On Flight', 'Order Received'];
}

function getStepContent(stepIndex: number) {
    switch (stepIndex) {
        case 0:
            return 'Order Placed';
        case 1:
            return 'Order Confirmed';
        case 2:
            return 'Flight Confirmed';
        case 3:
            return 'On Flight';
        case 4:
            return 'Order received';
        default:
            return "Order Completed";
    }
}

export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
            <Typography variant="h6">{getStepContent(activeStep)}</Typography>
            </Paper>
            <Paper className={classes.paper}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep >= steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </div>
            </Paper>
        </div>

    );
}