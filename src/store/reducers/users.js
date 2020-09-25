import {
    GET_USERS,
    USER_ERROR,
    DELETE_USER
} from '../actions/actionTypes'
import { updateObject } from '../utility';
const initialState = {

    users: [],
    loading: true,
    error: {}
}

const setUsers = (state, action) => {

    return updateObject(state, {
        users: action.users
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: return setUsers(state, action);
        default:
            return state;
    }
};

export default reducer;
