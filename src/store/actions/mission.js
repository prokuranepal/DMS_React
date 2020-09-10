import {
    CREATE_MISSION, UPDATE_MISSION, DELETE_MISSION, GET_MISSION_START, SET_MISSION, FETCH_MISSION_LIST_SUCCESS
    , FETCH_MISSION_LIST_UPDATE, FETCH_MISSION_LIST_FAIL
} from './actionTypes';
// import * as axios from '../../response/falseFetch';
import axios from '../../axios-orders';
import * as func from './function';


export const createUpdateMission = (missionDetail, action) => {
    console.log(missionDetail, action);
    // let url = '/create';
    // if (action === 'edit') {
    //     url = '/edit';
    // }

    // return dispatch => {
    //     axios.post(missionDetail, url).then(response => {
    //         if(action === 'create') {
    //             dispatch(createMission());
    //         } else {
    //             dispatch(updateMission());
    //         }
    //     })
    // }
    let url = '/mission';
    return dispatch => {
        if (action === 'create') {
            dispatch(createMission(missionDetail, url));
        } else {
            url = `mission/${missionDetail._id}`
            dispatch(updateMission(missionDetail, url));
        }
    }

}

export const createMission = (missionDetail, url) => {
    return dispatch => {
        axios.post(url,missionDetail,{headers: func.getToken()} )
        .then(res => {
            console.log(res);
            dispatch(createMissionSuccess());
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const createMissionSuccess = () => {
    return {
        type: CREATE_MISSION
    }
}

export const updateMission = (missionDetail,url) => {
    return dispatch => {
        axios.put(url,missionDetail,{headers: func.getToken()} )
        .then(res => {
            console.log(res);
            dispatch(updateMissionSuccess());
        })
        .catch(err => {
            console.log(err)
        })
    }
}
    

export const updateMissionSuccess = () => {
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
        const url = `/mission/${missionId}`;
        dispatch(getMissionStart());
        axios.get(url,{headers: func.getToken()}).then(response => {
            console.log(response.data)
            dispatch(setMission(response.data));
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

export const fetchMissionList = () => {
    return dispatch => {
        axios.get('/mission',{headers: func.getToken()}).then(res => {
            console.log(res);
            dispatch(fetchMissionListSuccess());
            dispatch(fetchMissionListUpdate(res.data));
        }).catch(err => {
            dispatch(fetchMissionListFail());
        });
    }
}


export const fetchMissionListSuccess = () => {
    return {
        type: FETCH_MISSION_LIST_SUCCESS
    }
}

export const fetchMissionListUpdate = (missions) => {
    return {
        type: FETCH_MISSION_LIST_UPDATE,
        missions: missions
    }
}

export const fetchMissionListFail = () => {
    return {
        type: FETCH_MISSION_LIST_FAIL
    }
}