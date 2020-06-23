import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {Typography } from '@material-ui/core';  
import OrderList from './OrderList/OrderList';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor:'white',
        borderLeft: '2px solid #E7E7E7'
        // height: '93vh'
    },
    subRoot: {
        width: '80%',
        margin: '20px auto',
        backgroundColor: 'white',
        // minHeight: '50vh'
    },
    header: {
        minHeight: '50px',
        margin: 'auto'
    },
    text: {
        padding: theme.spacing(3),
        
    }
}));

const orders = [
    {
        id: 'abc',
        from: 'Dharan',
        status: 'processing',
        date: '11/06/2020 10:40:30 AM'
    },
    {
        id: 'efg',
        from: 'Dharan',
        status: 'completed',
        date: '11/06/2020 9:50:30 AM'
    },
    {
        id: 'klm',
        from: 'Dharan',
        status: 'processing',
        date: '11/06/2020 9:40:30 AM'
    },
    {
        id: 'hij',
        from: 'Dharan',
        status: 'completed',
        date: '11/06/2020 8:40:30 AM'
    },
    {
        id: 'nop',
        from: 'Dharan',
        status: 'completed',
        date: '11/06/2020 8:40:30 AM'
    },
    {
        id: 'qrs',
        from: 'Dharan',
        status: 'completed',
        date: '11/06/2020 7:40:30 AM'
    }
]
const OrderLists = props => {
    const classes = useStyles();
    return(
    <Grid container className={classes.root}>
        <Grid container className={classes.subRoot}>
            <div className={classes.header}>
            <Typography variant="h4" className={classes.text}>ORDER LISTS</Typography>
            </div>
                {orders.map(order => {
                    return <OrderList key={order.id} id={order.id} from={order.from} status={order.status} date={order.date}/>
                })}
        </Grid>
    </Grid>)
}

export default OrderLists;