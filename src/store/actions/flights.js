import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';
import * as func from './function';

export const fetchFlightList = () => {
    
    return dispatch => {
        axios.get('/flights',{headers: func.getToken()}).then(res => {
            
            // console.log(res.data)
            dispatch(flightListUpdate(res.data));
        }).catch(err => {
            // dispatch(fetchActiveDronesFail());
        });
    }
}

const flightListUpdate = (data) => {
    return {
        type: actionTypes.GET_FLIGHTS,
        flightList: data
    }
}

export const fetchFlightDetails = (id) => {
    const url = `/flights/${id}`
    return dispatch => {
        axios.get(url,{headers: func.getToken()}).then(res => {
            
            // console.log(res.data)
            dispatch(flightDetailsUpdate(res.data));
        }).catch(err => {
            // dispatch(fetchActiveDronesFail());
        });
    }
}

export const flightDetailsUpdate = (data) => {
    return {
        type: actionTypes.GET_FLIGHT_DETAILS,
        flightDetails: data
    }
}