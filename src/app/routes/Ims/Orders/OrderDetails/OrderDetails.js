import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OrderInfo from './OrderInfo';
import Grid from '@material-ui/core/Grid';
import Stepper from '../../../../../components/UI/Stepper/Stepper';
import OrderItems from './OrderItems';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: 'auto'
    }
}));
const OrderDetails = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
             <Grid container>
                <Stepper />
                <OrderInfo />
                <OrderItems />
             </Grid>
        </div>
    )
}

export default OrderDetails;