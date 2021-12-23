import {
    GET_USERS,
    USER_ERROR,
    DELETE_USER,
    GET_USER_PROFILE,
    UPDATE_USER_PROFILE,
    GET_SELF_USER_DATA,
    GET_HOSPITAL_BY_ID_SUCCESS,
    GET_REGULATORY_BODIES,
    ADD_REGULATORY_BODY,
    GET_HOSPITALS_SUCCESS,
    UPDATE_HOSPITAL,
    UPDATE_REGULATORY_BODY,
    GET_HOSPITAL_USERS,
    GET_REGULATORY_USERS,
    GET_HEALTHPOSTS_SUCCESS
} from '../actions/actionTypes';

import { updateObject } from '../utility';

const initialState = {

    users: [],
    loading: true,
    userProfile: null,
    error: {},
    selfUserData: null,
    hospitalDetail: null,
    regulatoryBodies: null,
    hospitals: null,
    hospitalUsers: null,
    regulatoryUsers: null,
    healthposts: [],
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

const getSelfUserData = (state, action) => {
    return updateObject(state,  {
        selfUserData: action.selfUserData
    })
};

const getHospitalDataById = (state, action) => {
    return updateObject(state, {
        hospitalDetail: action.hospitalDetail
    })
}

const getRegulatoryBodiesList = (state, action) => {
    return updateObject(state, {
        regulatoryBodies: action.data
    })
};

const addRegulatoryBody = (state, action) => {
    return updateObject(state, {
        regulatoryBodies: [...state.regulatoryBodies, action.userData]
    })
}

const setHospitals = (state, action) => {
    return updateObject(state, {
        hospitals: action.hospitals
    })
}

const setHealthposts = (state, action) => {

    return updateObject(state, {
        healthposts: action.healthposts
    })
}

// const updateHospital = (state, action) => {

// }

const getHospitalUsers = (state,action) => {
    // console.log(action.users)
    return updateObject(state, {
        hospitalUsers: action.users
    })
}

const getRegulatoryUsers = (state,action) => {
    // console.log(action.users)
    return updateObject(state, {
        regulatoryUsers: action.users
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: return setUsers(state, action);
        case GET_USER_PROFILE: return getUserProfile(state, action);
        case UPDATE_USER_PROFILE: return updateUserProfile(state, action);
        case GET_SELF_USER_DATA: return getSelfUserData(state, action);
        case GET_HOSPITAL_BY_ID_SUCCESS: return getHospitalDataById(state, action);
        case GET_REGULATORY_BODIES: return getRegulatoryBodiesList(state, action);
        case GET_HOSPITALS_SUCCESS: return setHospitals(state, action);
        case GET_HOSPITAL_USERS: return getHospitalUsers(state, action);
        case GET_REGULATORY_USERS: return getRegulatoryUsers(state,action);
        case GET_HEALTHPOSTS_SUCCESS: return setHealthposts(state, action);
        default:
            return state;
    }
};

export default reducer;
