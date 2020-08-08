// import axios from 'axios';

import { GET_CARDS, CARD_ERROR } from './actionTypes';
import * as axios from '../../response/falseFetch';
import * as actionTypes from './actionTypes';
export const getCurrentCards = () => async dispatch => {
    try {
        // const res = await axios.get('api/dashboard');
        const url = './dashboardCardData';
        axios.get(url).then(response => {
            // console.log(response);
            dispatch({
                type: GET_CARDS,
                data: response.dashboardData
            })
        })
        

    } catch (error) {
        dispatch({
            type: CARD_ERROR,
            // error: error.response.statusText, 
            // status: error.response.status 
            error: "data not found"
        })
    }
}

export const getPlaces = () => {
    return dispatch => {
        const url = './places.js';
        axios.get(url).then(response => {
            dispatch(setPlaces(response.placesResponse));
        })
    }
}

export const setPlaces = (places) => {
    return {
        type: actionTypes.SET_PLACES,
        places: places
    }
}
