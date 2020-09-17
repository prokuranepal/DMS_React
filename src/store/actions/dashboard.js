// import axios from 'axios';


// import * as axios from '../../response/falseFetch';
import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';
import * as func from './function';

export const getCurrentCards = () => async dispatch => {
    const url = '/dashboard';
    // console.log(func.getToken());
    dispatch(getCardsStart());
    axios.get(url, { headers: func.getToken() }).then(response => {
        dispatch(getCardsSuccess(response.data));
    })
        .catch(error => {
            dispatch(getCardsFail(error))
        })
}


const getCardsFail = (res) => {
    return {
        type: actionTypes.GET_CARDS_FAIL,
        error: res
    }
}

const getCardsStart = () => {
    return {
        type: actionTypes.GET_CARDS_START
    }
}

const getCardsSuccess = (data) => {  
    return {
        type: actionTypes.GET_CARDS_SUCCESS,
        data: data
    }
}

export const getPlaces = () => {
    return dispatch => {
        const url = '/places';
        dispatch(getPlacesStart());
        axios.get(url, { headers: func.getToken() }).then(response => {
            dispatch(getPlacesSuccess(response.data));
            // console.log(response)
        })
            .catch(err => {
                console.log(err.response);
                dispatch(getPlacesFail(err));
            })
    }
}

const getPlacesFail = (res) => {
    return {
        type: actionTypes.GET_PLACES_FAIL,
        error: res
    }
}

const getPlacesStart = () => {
    return {
        type: actionTypes.GET_PLACES_START
    }
}

const getPlacesSuccess = (places) => {
    return {
        type: actionTypes.GET_PLACES_SUCCESS,
        // places: places
    }
}



export const getHealthposts = () => {
    return dispatch => {
        const url = '/healthpost';
        axios.get(url, { headers: func.getToken() })
            .then(res => {
                // console.log(res.data)
                dispatch(getHealthpostsSuccess(res.data))
            })
            .catch(err => {
                dispatch(getHealthpostsFail())
            })
    }
}

const getHealthpostsSuccess = (healthposts) => {
    return {
        type: actionTypes.GET_HEALTHPOSTS_SUCCESS,
        healthposts: healthposts
    }
}

const getHealthpostsStart = () => {
    return {
        type: actionTypes.GET_HEALTHPOSTS_START
    }
}

const getHealthpostsFail = (error) => {
    return {
        type: actionTypes.GET_HEALTHPOSTS_FAIL,
        error: error
    }
}
