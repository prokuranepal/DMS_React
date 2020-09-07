import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/imsOrder'
import MaterialTable from 'material-table';
import TableIcons from '../TableIcons/TableIcons';
import { Redirect } from 'react-router';

const OrderTable = () => {
    const dispatch = useDispatch();

    const { orderList } = useSelector(({ imsOrder }) => imsOrder);
    // console.log(orderList);
    // const statusStyle = status.includes("completed") ? "text-white bg-success" : status.includes("in processing") ? "bg-amber" : status.includes("cancelled") ? "text-white bg-danger" : "text-white bg-grey";
    const [state, setState] = React.useState({
        columns: [
            { title: 'Order ID', field: 'orderId' },
            { title: 'Name', field: 'name'},
            { title: 'Location', field: 'location'},
            { title: 'Order Date', field: 'orderDate' },
            { title: 'Delivery Date', field: 'deliveryDate' },
            { title: 'Status', field: 'status' },
            // {
            //     title: 'Type', field: 'type',
            //     lookup: {
            //         'tablet': 'Tablet', 'liquid': 'Liquid'
            //     },
            // },
        ],
        data: [
        ],
    });
    // const [selectedRow, setSelectedRow] = React.useState(null);
    const [redirect, setRedirect] = React.useState(null);

    useEffect(() => {
        dispatch(actions.getOrders())
    }, [dispatch])

    const getDate = (date) => {
        const d = new Date(date);
        // console.log(d);
        if(!isNaN(d.getTime())) {
            
            return d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay() + "\n" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
        }
        return null
    }
    useEffect(() => {
        const list = orderList.map(item => {
            return {
                ...item,
                orderDate: getDate(item.orderDate),
                deliveryDate: getDate(item.deliveryDate),
                
            }
        });
        setState(prevState => { return { ...prevState, data: list } })
    }, [orderList])

    const setSelected = (id) => {
        console.log(id)
        dispatch(actions.getOrderDetails(id))
        setRedirect(<Redirect
            to={{
            pathname: "/app/ims/orders/details",
            state: { orderId: id }
          }}
        />)
    }

    return (
        <div className="app-wrapper">
            <div className="animated slideInUpTiny animation-duration-3">
                {redirect}
                <MaterialTable
                    title="Orders"
                    columns={state.columns}
                    data={state.data}
                    icons={TableIcons}
                    onRowClick={((evt, selectedRow) => setSelected(selectedRow._id))}
                    options={{
                        // rowStyle: rowData => ({
                        //     backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF',
                        //     font: 'Roboto'
                        // }),
                        headerStyle: {
                            backgroundColor: '#01579b',
                            color: '#FFF'
                        }
                    }}
                    editable={{
                        // onRowAdd: (newData) =>
                        //     new Promise((resolve) => {
                        //         setTimeout(() => {
                        //             resolve();
                        //             console.log(newData);
                        //             // dispatch(actions.addMedicine(newData))
                        //             setState((prevState) => {
                        //                 const data = [...prevState.data];
                        //                 data.push(newData);
                        //                 return { ...prevState, data };
                        //             });
                        //         }, 600);
                        //     }),
                        // onRowUpdate: (newData, oldData) =>
                        //     new Promise((resolve) => {
                        //         setTimeout(() => {
                        //             resolve();
                        //             if (oldData) {
                        //                 console.log(newData);
                        //                 // dispatch(actions.updateMedicine(newData, newData._id))
                        //                 setState((prevState) => {
                        //                     const data = [...prevState.data];
                        //                     data[data.indexOf(oldData)] = newData;
                        //                     return { ...prevState, data };
                        //                 });
                        //             }
                        //         }, 600);
                        //     }),
                    }}
                />
            </div>
            
        </div>
    );
};

export default OrderTable;