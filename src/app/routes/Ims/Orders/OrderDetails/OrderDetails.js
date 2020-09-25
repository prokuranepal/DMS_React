import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OrderInfo from './OrderInfo';
import Grid from '@material-ui/core/Grid';
import Stepper from '../../../../../homeComponents/UI/Stepper/Stepper';
import OrderItems from './OrderItems';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBackRounded';
import { Link, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux'
const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: 'auto'
    },
    paper: {
        width: '100%',
        margin: theme.spacing(1),
        padding: theme.spacing(2)
    },
    heading: {
        marginLeft: theme.spacing(7),
    }
}));
const OrderDetails = props => {
    const classes = useStyles();
    const {orderDetails} = useSelector(({ imsOrder }) => imsOrder);
    const orderId = orderDetails?orderDetails._id:0;
    const items = orderDetails?orderDetails.orderItem:[];
    const origin = orderDetails?orderDetails.origin:null;
    const lifecycle = orderDetails?orderDetails.orderLifeCycle:"Order Placed";
    console.log(orderDetails);
    const [redirect, setRedirect] = React.useState(null);

    useEffect(() => {
        if(props.location.state === undefined) {
            setRedirect(<Redirect to='/app/ims/orders/list' />)
        }
    },[])
    
    return (
        <div className={classes.root}>
            <Grid container>
                {redirect}
                <Paper className={classes.paper}>
                    <Grid container>
                        <Grid item md={1} sm={1} xs={2} justify="flex-start" alignItems="flex-end" container>
                            <Link to='/app/ims/orders/list' style={{ textDecoration: 'none', color: 'white' }}>
                                <IconButton type="submit" aria-label="search">
                                    <ArrowBackIcon />
                                </IconButton>
                            </Link>
                        </Grid>
                        <Grid item lg={3} md={10} sm={10} xs={10} justify="flex-start" alignItems="center" container>
                            <Typography variant="h5">Orders</Typography>
                        </Grid>
                    </Grid>
                    {/* <Typography className={classes.heading}>Order Id: 2345</Typography> */}
                </Paper>
                <Stepper lifecycle={lifecycle} orderId={orderId}/>
                <OrderInfo origin={origin}/>
                <OrderItems items={items}/>
            </Grid>
        </div>
    )
}

export default OrderDetails;