import { CREATE_MISSION, UPDATE_MISSION, DELETE_MISSION, GET_MISSION_START, SET_MISSION } from './actionTypes';
import * as axios from '../../response/falseFetch';
export const createUpdateMission = (missionDetail, action) => {
    console.log(missionDetail);
    let url = './create';
    if (action === 'edit') {
        url = './edit';
    }
    // return dispatch => {
    //     axios.post(missionDetail, url).then(response => {
    //         if(action === 'create') {
    //             dispatch(createMission());
    //         } else {
    //             dispatch(updateMission());
    //         }
    //     })
    // }
    return dispatch => {
        if (action === 'create') {
            dispatch(createMission());
        } else {
            dispatch(updateMission());
        }
    }

}

export const createMission = () => {
    return {
        type: CREATE_MISSION
    }
}

export const updateMission = () => {
    return {
        type: UPDATE_MISSION
    }
}

export const deleteMission = () => {
    return {
        type: DELETE_MISSION
    }
}

export const getMission = (missionId) => {
    return dispatch => {
        const url = './missionDetail.js';
        const data = {
            missionId: missionId
        };
        dispatch(getMissionStart());
        axios.post(url, data).then(response => {
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