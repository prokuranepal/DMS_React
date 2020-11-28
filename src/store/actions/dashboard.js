// import axios from 'axios';

import { GET_CARDS, CARD_ERROR } from './actionTypes';
import * as axios1 from '../../response/falseFetch';
import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';

export const getToken = () => {
    let token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    };
    return headers;
  };

export const getCurrentCards = () => async dispatch => {
  
    try {
        // const res = await axios.get('api/dashboard');
        // const url = './dashboardCardData';
        const url = '/dashboard';
       return axios.get(url,{headers: getToken()}).then(response => {
            console.log('response backend',response.data, GET_CARDS);
            dispatch({
                type: GET_CARDS,
                data: response.data
            })
        })
        

    } catch (error) {
    console.log('response backend e');

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
       return axios1.get(url).then(response => {
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
