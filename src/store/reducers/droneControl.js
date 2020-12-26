import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


export const initialState = {
    activeDrones: null,
    missions: null
}

const updateActiveDrones = (state, action) => {

    return updateObject(state, {
        activeDrones: action.activeDrones
    })
}

const updateMissionList = (state, action) => {

    return updateObject(state, {
        missions: action.missions
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ACTIVE_DRONES_UPDATE: return updateActiveDrones(state, action);
        case actionTypes.FETCH_MISSION_LIST_UPDATE: return updateMissionList(state, action);
        default:
            return state;
    }
};

export default reducer;