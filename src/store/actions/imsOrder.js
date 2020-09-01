import { GET_ORDER_DETAILS, GET_ORDERS, UPDATE_ORDER} from './actionTypes';
// import * as axios from '../../response/falseFetch';
import axios from '../../axios-orders';
import * as func from './common';


export const getOrders = () => {

    return dispatch => {
        const url = `/orders`
        axios.get(url, { headers: func.getToken() })
            .then(response => {
                console.log(response.data)
                dispatch(getOrdersSuccess(response.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const getOrdersSuccess = (orderList) => {
    return{
        type: GET_ORDERS,
        list: orderList
    }
}

export const getOrderDetails = (orderId) => {
    console.log(orderId);
    return dispatch => {
        const url = `/orders/${orderId}`;
        axios.get(url,{headers: func.getToken()})
        .then(response => {
            console.log(response);
            dispatch(getOrderDetailsSuccess(response.data));
        })
    }
}

export const getOrderDetailsSuccess = (details) => {
    return {
        type: GET_ORDER_DETAILS,
        details: details
    }
}

export const updateOrderStatus = (orderId,status) => {
    return dispatch => {
        const url = `/orders/${orderId}`
        axios.put(url,{
            "orderLifeCycle": status
        },{headers: func.getToken()})
        .then(response => {
            console.log(response)
            dispatch(updateOrderStatusSuccess())
        })
    }
}

export const updateOrderStatusSuccess = () => {
    return {
        type: UPDATE_ORDER
    }
}