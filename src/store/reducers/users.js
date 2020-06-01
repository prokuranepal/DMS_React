import {GET_USER, GET_USERS, USER_ERROR} from '../actions/actionTypes'

const initialState = {
    users: {
        users1: [],
        users2: []
    },
    loading: true,
    error: {}
}

export default function (state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_USER:
            return {
                ...state,
                users: payload.users,
                loading: false
            }
        case GET_USERS:
            return {
                ...state,
                users: payload.users,
                loading: false
            }    
        default:
            return state;
    }
}
