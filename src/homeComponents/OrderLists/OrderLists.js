import React,{useEffect} from 'react';
// import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import {Typography } from '@material-ui/core';  
import OrderList from './OrderList/OrderList';
import Search from '../UI/Search/Search';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../store/actions/imsOrder'
// import OrderTableCell from './OrderTableCell';
const useStyles = makeStyles((theme) => ({
    header: {
        marginBottom: '2rem',
    }
}));




let counter = 0;

function createData(orderId, name, location, orderDate, deliveryDate, status) {
    counter += 1;
    return { id: counter, orderId, name, location, orderDate, deliveryDate, status };
}

// const data = [
//     createData('23545', 'Sardu Health Post','25 Oct, 19:00', '', 'Chare Vanjyang', 'In Progress'),
//     createData('23653', 'Koshi Health Post','28 Oct, 19:00', '28 Oct, 19:50','Tapu', 'Completed'),
//     createData('24567', 'Panmara Health Post', '5 Nov, 19:00', '5 Nov, 19:50', 'Panmara','Completed'),
//     createData('25745', 'Seuti Health Post','23 Nov, 19:00', '','Bisnupaduka', 'Cancelled'),
// ];

const OrderTable = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const {orderList} = useSelector(({ imsOrder }) => imsOrder);
    console.log(orderList);
    const data = orderList.map(order => {
        return createData(order._id, order.origin.name, order.origin.location, order.orderDate, order.deliveryDate, order.status)
    })
    useEffect(() => {
        dispatch(actions.getOrders())
    },[dispatch])
    return (
        <div className="app-wrapper">
            <Grid container className={classes.header}>
                <Grid item lg={2} md={2} sm={3} xs={4} justify="center" alignItems="center" container>
                    <Typography variant="h5">Orders</Typography>
                </Grid>
                <Grid item lg={10} md={10} sm={9} xs={8} justify="left" container>
                    <Hidden xsDown>
                        <Search />
                    </Hidden>
                </Grid>
                </Grid>
            <div className="jr-card">
                <div className="table-responsive-material">
                    <table className="default-table table-unbordered table table-sm table-hover">
                        <thead className="th-border-b">
                            <tr>
                                <th>OrderId</th>
                                <th>Customer</th>
                                <th>Location</th>
                                <th>Order Date</th>
                                <th>Delivery Date</th>
                                <th className="status-cell text-right">Status</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(data => {
                                return (
                                    
                                    <OrderList key={data.id} data={data} />
                                    
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderTable;