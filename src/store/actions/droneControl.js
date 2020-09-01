import * as axios from '../../response/falseFetch';
import * as actionTypes from './actionTypes';

export const fetchActiveDrones = () => {
    return dispatch => {
        axios.get('./activeDrones.js').then(res => {
            dispatch(fetchActiveDronesSuccess());
            dispatch(fetchActiveDronesUpdate(res.activeDrones));
        }).catch(err => {
            dispatch(fetchActiveDronesFail());
        });
    }
}


export const fetchActiveDronesSuccess = () => {
    return {
        type: actionTypes.FETCH_ACTIVE_DRONES_SUCCESS
    }
}

export const fetchActiveDronesUpdate = (activeDrones) => {
    return {
        type: actionTypes.FETCH_ACTIVE_DRONES_UPDATE,
        activeDrones: activeDrones
    }
}

export const fetchActiveDronesFail = () => {
    return {
        type: actionTypes.FETCH_ACTIVE_DRONES_FAIL
    }
}

