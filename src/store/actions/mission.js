import {CREATE_MISSION, UPDATE_MISSION, DELETE_MISSION, GET_MISSION_START, SET_MISSION} from './actionTypes';
import * as axios from '../../response/falseFetch';
export const createMission= (missionDetail) => {
    console.log(missionDetail);
    return {
        type: CREATE_MISSION
    }
}

export const updateMission= () => {
    return {
        type: UPDATE_MISSION
    }
}

export const deleteMission= () => {
    return {
        type: DELETE_MISSION
    }
}

export const getMission = () => {
    return dispatch => {
        const url = './missionDetail.js';
        dispatch(getMissionStart());
        axios.get(url).then(response => {
            dispatch(setMission(response.missionDetail));
        }).catch(err => {
            console.log(err);
        })
    }
}

export const getMissionStart = () => {
    return {
        type: GET_MISSION_START
    }
}

export const setMission = (missionDetail) => {
    return {
        type: SET_MISSION,
        missionDetail: missionDetail
    }
}