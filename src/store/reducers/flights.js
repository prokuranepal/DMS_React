import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    flightList:[],
    flightDetails: {}
}

const getFlightList = (state, action) => {
    return updateObject(state, {
        flightList: action.flightList,
       
    })
}

const getFlightDetails = (state, action) => {
    return updateObject(state, {
        flightDetails: action.flightDetails,
       
    })
}




const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_FLIGHTS: return getFlightList(state,action);
        case actionTypes.GET_FLIGHT_DETAILS: return getFlightDetails(state,action);
        default:
            return state;
    }
};

export default reducer;