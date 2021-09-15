// import * as axios from '../../response/falseFetch';
import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';
import * as func from './function';
export const fetchActiveDrones = () => {
    return dispatch => {
        axios.get('/drones?status=1',{headers: func.getToken()}).then(res => {
            dispatch(fetchActiveDronesSuccess());
            dispatch(fetchActiveDronesUpdate(res.data));
        }).catch(err => {
            dispatch(fetchActiveDronesFail());
        });
    }
}

export const checkListPass = (data) => {
    let pass = true;
    for (let i = 0; i < data.length; i++) {
        pass = pass & data[i].value
    }
    return {
        type: actionTypes.CHECKLIST_PASS,
        pass: pass
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

