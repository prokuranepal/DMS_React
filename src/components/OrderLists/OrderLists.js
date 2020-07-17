import React from 'react';
// import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import {Typography } from '@material-ui/core';  
import OrderList from './OrderList/OrderList';
// import OrderTableCell from './OrderTableCell';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: 'white',
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




let counter = 0;

function createData(orderId, name, image, orderDate, deliveryDate,from, status) {
    counter += 1;
    return { id: counter, orderId, name, image, orderDate, deliveryDate, from, status };
}

const data = [
    createData('23545', 'Sardu Health Post', "https://via.placeholder.com/150x150", '25 Oct, 19:00', '', 'Chare Vanjyang', 'In Progress'),
    createData('23653', 'Koshi Health Post', "https://via.placeholder.com/150x150", '28 Oct, 19:00', '28 Oct, 19:50','Tapu', 'Completed'),
    createData('24567', 'Panmara Health Post', "https://via.placeholder.com/150x150", '5 Nov, 19:00', '5 Nov, 19:50', 'Panmara','Completed'),
    createData('25745', 'Seuti Health Post', "https://via.placeholder.com/150x150", '23 Nov, 19:00', '','Bisnupaduka', 'Cancelled'),
];

const OrderTable = () => {

    return (
        <div className="app-wrapper">
            <div className="jr-card">
                <div className="table-responsive-material">
                    <table className="default-table table-unbordered table table-sm table-hover">
                        <thead className="th-border-b">
                            <tr>
                                <th>OrderId</th>
                                <th>Customer</th>
                                <th>Order Date</th>
                                <th>Delivery Date</th>
                                <th>From</th>
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