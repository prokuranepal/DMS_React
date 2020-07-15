import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: localStorage.getItem('token'),
    // toke: null,
    // userId: null,
    userId: localStorage.getItem('userId'),
    error: null,
    loading: false,
    expiryDate: localStorage.getItem('expirationDate'),
    initURL: '',
    authRedirectPath: '/'
};

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
    return updateObject( state, { 
        token: action.token,
        userId: action.userId,
        error: null,
        loading: false
     } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, userId: null });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}

const authenticate = (state, action) => {
    return updateObject(state, {token: action.token, userId: action.userId});
}

const setInitURL = (state, action)=> {
    return updateObject(state, {initURL: action.url})
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        case actionTypes.AUTHENTICATE: return authenticate(state,action);
        case actionTypes.SET_INIT_URL: return setInitURL(state, action);
        default:
            return state;
    }
};

export default reducer;