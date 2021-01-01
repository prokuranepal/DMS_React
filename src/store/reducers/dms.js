import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
   drones: [],
   maintenance: [],
   droneDetail: null
    
}

const fetchDrones = (state, action) => {

    return updateObject(state, {
        drones: action.drones
    })
}

const fetchMaintenance = (state, action) => {
    // console.log(action.data)
    return updateObject(state, {
        maintenance: action.data
    })
}

const fetchDroneDetail = (state, action) => {
    return updateObject(state, {
        droneDetail: action.droneDetail
    })
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DRONES: return fetchDrones(state, action);
        case actionTypes.GET_MAINTENANCE: return fetchMaintenance(state, action)
        case actionTypes.GET_DRONE_DETAIL: return fetchDroneDetail(state, action)
        default:
            return state;
    }
};

export default reducer;