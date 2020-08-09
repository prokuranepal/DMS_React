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

export const fetchMissionList = () => {
    return dispatch => {
        axios.get('./missionList.js').then(res => {
            dispatch(fetchMissionListSuccess());
            dispatch(fetchMissionListUpdate(res.missions));
        }).catch(err => {
            dispatch(fetchMissionListFail());
        });
    }
}


export const fetchMissionListSuccess = () => {
    return {
        type: actionTypes.FETCH_MISSION_LIST_SUCCESS
    }
}

export const fetchMissionListUpdate = (missions) => {
    return {
        type: actionTypes.FETCH_MISSION_LIST_UPDATE,
        missions: missions
    }
}

export const fetchMissionListFail = () => {
    return {
        type: actionTypes.FETCH_MISSION_LIST_FAIL
    }
}