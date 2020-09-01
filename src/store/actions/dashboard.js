// import axios from 'axios';

import { GET_CARDS, CARD_ERROR, GET_HEALTHPOSTS } from './actionTypes';
// import * as axios from '../../response/falseFetch';
import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';

import * as func from './common';

export const getCurrentCards = () => async dispatch => {
    try {
        // const res = await axios.get('api/dashboard');
        // const url = './dashboardCardData';
        const url = '/dashboard';
        console.log(func.getToken());
        axios.get(url,{headers: func.getToken()}).then(response => {
            console.log(response);
            dispatch({
                type: GET_CARDS,
                data: response.data,
                // data: response.dashboardData
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
        const url = '/places';
        axios.get(url,{headers: func.getToken()}).then(response => {
            // dispatch(setPlaces(response.data));
            console.log(response)
        })
    }
}

export const setPlaces = (places) => {
    return {
        type: actionTypes.SET_PLACES,
        places: places
    }
}

export const getHealthposts = () => {
    return dispatch => {
        const url = '/healthpost';
        axios.get(url,{headers: func.getToken()})
        .then(res => {
            console.log(res.data)
            dispatch(getHealthpostsSuccess(res.data))
        })
    }
}

export const getHealthpostsSuccess = (healthposts) => {
    return {
        type: GET_HEALTHPOSTS,
        healthposts: healthposts
    }
}
