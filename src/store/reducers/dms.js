import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
   drones: [],
    
}

const fetchDrones = (state, action) => {

    return updateObject(state, {
        drones: action.drones
    })
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DRONES: return fetchDrones(state, action);
        
        default:
            return state;
    }
};

export default reducer;