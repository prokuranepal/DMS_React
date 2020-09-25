import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    orderList: [],
    orderDetails: null
};

const setOrderList = (state, action) => {

    return updateObject(state, {
        orderList: action.list
    })
}

const setOrderDetails = (state, action) => {

    return updateObject(state, {
        orderDetails: action.details
    })
}



const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_ORDERS: return setOrderList(state, action);
        case actionTypes.GET_ORDER_DETAILS: return setOrderDetails(state, action);
        default:
            return state;
    }
};

export default reducer;