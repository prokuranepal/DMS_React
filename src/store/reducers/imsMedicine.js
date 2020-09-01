import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    medicineList: []
};

const setMedicineList = (state, action) => {

    return updateObject(state, {
        medicineList: action.list
    })
}



const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_MEDICINES: return setMedicineList(state, action);
        default:
            return state;
    }
};

export default reducer;