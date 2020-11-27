import * as actionTypes from './actionTypes';
// import * as axios from '../../response/falseFetch';
import axios from '../../axios-orders';
import * as func from './function';


export const createUpdateMission = (missionDetail, action) => {
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
        dispatch(setLoading(true,"CREATING"));
        axios.post(url,missionDetail,{headers: func.getToken()})
        .then(res => {
            // console.log(res);
            dispatch(setLoading(false, "Mission created Successfully", "success"));
            dispatch(createMissionSuccess());
        })
        .catch(err => {
            dispatch(setLoading(false, "Mission could not be created", "error"));
            console.log(err)
        })
    }
}

export const setLoading = (loading, message, severity) => {
    return {
        type: actionTypes.MISSION_CREATE_LOADING,
        loading: loading,
        message: message,
        severity: severity
    }
}

export const createMissionSuccess = () => {
    return {
        type: actionTypes.CREATE_MISSION
    }
}

export const updateMission = (missionDetail,url) => {
    return dispatch => {
        dispatch(setLoading(true, "UPDATING"));
        axios.put(url,missionDetail,{headers: func.getToken()} )
        .then(res => {
            // console.log(res);
            dispatch(setLoading(false, "Mission updated Successfully", "success"));
            dispatch(updateMissionSuccess());
        })
        .catch(err => {
            dispatch(setLoading(false, "Mission could not be updated", "error"));
            console.log(err)

        })
    }
}
    

export const updateMissionSuccess = () => {
    return {
        type: actionTypes.UPDATE_MISSION
    }
}

export const deleteMission = (id) => {
    const url = `/mission/${id}`;
    return dispatch => {
        axios.delete(url, {headers: func.getToken()})
        .then(res => {
            dispatch(deleteMissionSuccess());
            console.log(res)
        })
        .catch(err => {
            console.log(err);
        })
    }
}

const deleteMissionSuccess = () => {
    return {
        type: actionTypes.DELETE_MISSION
    }
}

export const getMission = (missionId) => {
    return dispatch => {
        const url = `/mission/${missionId}`;
        dispatch(getMissionStart());
        axios.get(url,{headers: func.getToken()}).then(response => {
            // console.log(response.data)
            dispatch(setMission(response.data));
        }).catch(err => {
            console.log(err);
        })
    }
}

export const getMissionStart = () => {
    return {
        type: actionTypes.GET_MISSION_START
    }
}

export const setMission = (missionDetail) => {
    return {
        type: actionTypes.SET_MISSION,
        missionDetail: missionDetail
    }
}

export const fetchMissionList = () => {
    return dispatch => {
        axios.get('/mission',{headers: func.getToken()}).then(res => {
            // console.log("Mission List",res);
            dispatch(fetchMissionListSuccess());
            dispatch(fetchMissionListUpdate(res.data));
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

