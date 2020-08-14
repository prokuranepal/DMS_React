import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    missionDetail: null
};

const setMissionDetail = (state, action) => {

    return updateObject(state, {
        missionDetail: action.missionDetail
    })
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_MISSION: return setMissionDetail(state, action);
        default:
            return state;
    }
};

export default reducer;