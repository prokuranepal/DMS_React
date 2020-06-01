import {GET_USERS, GET_USER1, GET_USER2, USER_ERROR} from '../actions/actionTypes'

const initialState = {
    
    users1: [],
    users2: [],
    loading: true,
    error: {}
}

export default function (state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_USER1:
            return {
                ...state,
                users1: [...state.users1, payload.users1],
                loading: false
            }
        case GET_USER2:
            return {
                ...state,                   
                users2: [...state.users2, payload.users2],
                loading: false
        }    
        case GET_USERS:
            return {
                ...state,
                loading: false
            }    
        default:
            return state;
    }
}
