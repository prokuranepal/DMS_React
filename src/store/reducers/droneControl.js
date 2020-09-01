import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    activeDrones: null,
    
}

const updateActiveDrones = (state, action) => {

    return updateObject(state, {
        activeDrones: action.activeDrones
    })
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ACTIVE_DRONES_UPDATE: return updateActiveDrones(state, action);
        
        default:
            return state;
    }
};

export default reducer;