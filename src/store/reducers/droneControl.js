import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    activeDrones: null,
    checkListPass: false
    
}

const updateActiveDrones = (state, action) => {

    return updateObject(state, {
        activeDrones: action.activeDrones
    })
}

const isCheckListPass = (state, action) => {
    return updateObject(state, {
        checkListPass: action.pass
    })
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ACTIVE_DRONES_UPDATE: return updateActiveDrones(state, action);
        case actionTypes.CHECKLIST_PASS: return isCheckListPass(state, action);
        
        default:
            return state;
    }
};

export default reducer;