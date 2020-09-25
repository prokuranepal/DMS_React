import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
   drones: [],
   maintenance: []
    
}

const fetchDrones = (state, action) => {

    return updateObject(state, {
        drones: action.drones
    })
}

const fetchMaintenance = (state, action) => {
    return updateObject(state, {
        maintenance: action.data
    })
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DRONES: return fetchDrones(state, action);
        case actionTypes.GET_MAINTENANCE: return fetchMaintenance(state, action)
        
        default:
            return state;
    }
};

export default reducer;