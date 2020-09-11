import { GET_DRONES, ADD_DRONE, UPDATE_DRONE } from './actionTypes';
// import * as axios from '../../response/falseFetch';
import axios from '../../axios-orders';

import * as func from './function';

export const fetchDrones = () => dispatch => {
    try {
        const url = '/drones';
        console.log(func.getToken());
        axios.get(url,{headers: func.getToken()}).then(response => {
            console.log(response);
            dispatch(fetchDronesSuccess(response.data))
        })
    } catch (error) {
       
    }
}

const fetchDronesSuccess = (drones) => {
    return {
        type: GET_DRONES,
        drones: drones
    }
}

export const addDrone = (drone) => dispatch => {
    try {
        const url = '/drones';
        console.log(func.getToken());
        axios.post(url,drone,{headers: func.getToken()}).then(response => {
            console.log(response);
            dispatch(addDroneSuccess(response.data))
        })
    } catch (error) {
       
    }
}

const addDroneSuccess = (drones) => {
    return {
        type: ADD_DRONE
    }
}

export const updateDrone = (drone, droneId) => dispatch => {
    try {
        const url = `/drones/${droneId}`;
        console.log(func.getToken());
        axios.put(url,drone,{headers: func.getToken()}).then(response => {
            console.log(response);
            dispatch(updateDroneSuccess(response.data))
        })
    } catch (error) {
       
    }
}

const updateDroneSuccess = (drones) => {
    return {
        type: UPDATE_DRONE
    }
}