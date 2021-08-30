import { GET_DRONES, ADD_DRONE, UPDATE_DRONE, GET_MAINTENANCE, GET_DRONE_DETAIL, DOWNLOAD_LOGS } from './actionTypes';
// import * as axios from '../../response/falseFetch';
import axios from '../../axios-orders';

import * as func from './function';

export const fetchDrones = () => dispatch => {
    try {
        const url = '/drones';
        // console.log(func.getToken());
        axios.get(url,{headers: func.getToken()}).then(response => {
            // console.log(response);
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

export const fetchDroneDetail = (id) => dispatch => {
    try {
        const url = `/drones/${id}`;
        // console.log(func.getToken());
        axios.get(url,{headers: func.getToken()}).then(response => {
            // console.log(response);
            dispatch(fetchDroneDetailSuccess(response.data))
        })
    } catch (error) {
       
    }
}

const fetchDroneDetailSuccess = (data) => {
    return {
        type: GET_DRONE_DETAIL,
        droneDetail: data
    }
}



export const addDrone = (drone) => dispatch => {
    try {
        const url = '/drones';
        // console.log(func.getToken());
        axios.post(url,drone,{headers: func.getToken()}).then(response => {
            // console.log(response);
            dispatch(addDroneSuccess(response.data))
        })
    } catch (error) {
       
    }
}
export const downloadLogs = (droneId) =>{
    try {
 
        const url = `/drones/${droneId}/export/`;
        axios.get(url,{headers:func.getToken(),responseType:'blob'})
            .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'log.json'); //or any other extension
                document.body.appendChild(link);
                link.click();
                console.log("logs should be downloaded",response);
            }).catch(err => {
                console.log("Something error");
            });
        // dispatch(sendResetPassword());
    }
    catch(error){

    }
    return {
        type: DOWNLOAD_LOGS
    }
}
const addDroneSuccess = (drones) => {
    return {
        type: ADD_DRONE
    }
}

export const updateDrone = (drone, droneId) => dispatch => {
    console.log(drone, droneId);
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

export const getMaintenance = () => dispatch =>{

    const url = '/maintenance/details';
    axios.get(url,{headers: func.getToken()} )
    .then(res => {
        dispatch(getMaintenanceSuccess(res.data));
    })
    .catch(err => {
        console.log(err);
    })
}

const getMaintenanceSuccess = (data) => {
    // console.log(data);
        return {
            type: GET_MAINTENANCE,
            data: data
        }
}
export const addMaintenance = (data) => dispatch =>{
    const url = '/maintenance';
    // console.log(data);
    axios.post(url, data,{headers: func.getToken()} )
    .then(res => {
        // console.log(res)
    })
    .catch(err => {
        console.log(err);
    })
}

export const updateMaintenance = (data, id) => dispatch =>{
    const url = `/maintenance/${id}`;
    // console.log(data,id)
    axios.put(url, data,{headers: func.getToken()} )
    .then(res => {
        // console.log(res)
    })
    .catch(err => {
        console.log(err);
    })
}

export const deleteMaintenance = id => dispatch =>{
    const url = `/maintenance/${id}`;
    axios.delete(url,{headers: func.getToken()} )
    .then(res => {
        // console.log(res)
    })
    .catch(err => {
        console.log(err);
    })
}