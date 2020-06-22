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
        name: 'abc',
        location: 'Dharan',
        date: '11/06/2020'
    },
    {
        name: 'abc',
        location: 'Dharan',
        date: '11/06/2020'
    },
    {
        name: 'abc',
        location: 'Dharan',
        date: '11/06/2020'
    },
    {
        name: 'abc',
        location: 'Dharan',
        date: '11/06/2020'
    },
    {
        name: 'abc',
        location: 'Dharan',
        date: '11/06/2020'
    },
    {
        name: 'abc',
        location: 'Dharan',
        date: '11/06/2020'
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
                    return <OrderList key={order.id} name={order.name} location={order.location} date={order.date}/>
                })}
        </Grid>
    </Grid>)
}

export default OrderLists;