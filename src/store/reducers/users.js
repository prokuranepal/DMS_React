import {GET_USERS,
        GET_USER1, 
        GET_USER2, 
        USER_ERROR, 
        CLEAR_USER1, 
        CLEAR_USER2, 
        DELETE_USER} from '../actions/actionTypes'

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
        case CLEAR_USER1:
            return {
                ...state,
                users1: state.users1.filter(user => user.username !== payload.users2.username),
                loading:false
            } 
        case CLEAR_USER2:
            return {
                ...state,
                users2: state.users2.filter(user => user.username !== payload.users1.username),
                loading:false
            }        
         case DELETE_USER:
             return {
                 ...state,
                 users1: state.users1.filter(user => user.username !== payload.username),
                 users2: state.users2.filter(user => user.username !== payload.username),
             }
        default:
            return state;
    }
}
