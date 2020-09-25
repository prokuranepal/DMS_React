import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {useDispatch} from 'react-redux';
import * as actions from '../../../store/actions/imsOrder'
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

function getStepIndex(step) {
    switch (step) {
        case 'Order Placed':
            return 0;
        case 'Order Confirmed':
            return 1;
        case 'Flight Confirmed':
            return 2;
        case 'On Flight':
            return 3;
        case 'Order Received':
            return 4;
        case "Order Completed":
            return 5;
        default:
            return 0;
    }
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Order Placed';
        case 1:
            return 'Order Confirmed';
        case 2:
            return 'Flight Confirmed';
        case 3:
            return 'On Flight';
        case 4:
            return 'Order Received';
        case 5:
            return "Order Completed";
        default:
            return 'Order Placed';
    }
}

export default function HorizontalLabelPositionBelowStepper(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [activeStep, setActiveStep] = React.useState(getStepIndex(props.lifecycle));
    const steps = getSteps();

    useEffect(() => {
        setActiveStep(getStepIndex(props.lifecycle));
    },[props.lifecycle])
    
    const handleNext = () => {
        dispatch(actions.updateOrderStatus(props.orderId,getStepContent(activeStep + 1)));
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    console.log(props.lifecycle, activeStep);
    return (
        <div className={classes.root}>
            
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