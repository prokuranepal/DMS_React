import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    missionDetail: null,
    missions: []
};

const setMissionDetail = (state, action) => {

    console.log(action.missionDetail);
    return updateObject(state, {
        missionDetail: action.missionDetail
    })
}
const updateMissionList = (state, action) => {

    return updateObject(state, {
        missions: action.missions
    })
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_MISSION: return setMissionDetail(state, action);
        case actionTypes.FETCH_MISSION_LIST_UPDATE: return updateMissionList(state, action);
        default:
            return state;
    }
};

export default reducer;