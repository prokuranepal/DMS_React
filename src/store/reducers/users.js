import {
    GET_USERS,
    USER_ERROR,
    DELETE_USER,
    GET_USER_PROFILE,
    UPDATE_USER_PROFILE
} from '../actions/actionTypes'
import { updateObject } from '../utility';
const initialState = {

    users: [],
    loading: true,
    userProfile: null,
    error: {}
}

const setUsers = (state, action) => {

    return updateObject(state, {
        users: action.users
    })
}

const getUserProfile = (state, action) => {
    return updateObject(state, {
        userProfile: action.userProfile
    })
}

const updateUserProfile = (state, action) => {
    return updateObject(state, {
        userProfile: action.userProfile
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: return setUsers(state, action);
        case GET_USER_PROFILE: return getUserProfile(state, action);
        case UPDATE_USER_PROFILE: return updateUserProfile(state, action);
        default:
            return state;
    }
};

export default reducer;
