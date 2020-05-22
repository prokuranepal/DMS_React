import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const authenticate = (token, expiryTime) => {
    return dispatch => {
        // 
        dispatch({
            type: actionTypes.AUTHENTICATE,
            token: token
        });
        dispatch(checkAuthTimeout(expiryTime));
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime, refreshToken) => {
    console.log("CheckoutTime", expirationTime);
    return dispatch => {
        const refresh_token = refreshToken;
        setTimeout(() => {
            // dispatch(logout());
            dispatch(sendRefreshToken(refresh_token));
        }, (expirationTime) * 1000);
    };
};

const sendRefreshToken = (refreshToken) => {
    return dispatch => {
        // let url = 'https://securetoken.googleapis.com/v1/token?key=AIzaSyDL3N1A50XmBEQGRPrAN2zCudp9mpIe28I';
        // const data = {
        //     grant_type: "refresh_token",
        //     refresh_token: refreshToken
        // }
        // axios.post(url, data)
        //     .then(response => {
        const response = {
            data: {
                id_token: 'token',
                expires_in: 3600,
                user_id: 'userId',
                refresh_token: 'refreshToken'
            }
        }
        console.log(response);
        const expirationDate = new Date(new Date().getTime() + response.data.expires_in * 1000);
        localStorage.setItem('token', response.data.id_token);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', response.data.user_id);
        localStorage.setItem('refreshToken', response.data.refresh_token);
        dispatch(authSuccess(response.data.id_token, response.data.user_id));
        dispatch(checkAuthTimeout(response.data.expires_in, response.data.refresh_token));
        // });
    }
}

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        // const authData = {
        //     email: email,
        //     password: password,
        //     returnSecureToken: true
        // };
        // let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDL3N1A50XmBEQGRPrAN2zCudp9mpIe28I';
        // axios.post(url, authData)
        //     .then(response => {
        const response = {
            data: {
                id_token: 'token',
                expires_in: 3600,
                user_id: 'userId',
                refresh_token: 'refreshToken'
            }
        }
        console.log(response);
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        // console.log(new Date().getTime());
        // console.log(response.data.expiresIn, expirationDate, expirationDate.getTime() - new Date().getTime());
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', response.data.localId);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn, response.data.refreshToken));
        // })
        // .catch(err => {
        //     // console.log(err);
        //     dispatch(authFail(err));
        // });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    console.log("authCheckState");
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    };
};

export const resetPassword = (email) => {
    console.log(email);
    return dispatch => {
        const data = {
            requestType: "PASSWORD_RESET",
            email: email
        };
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDL3N1A50XmBEQGRPrAN2zCudp9mpIe28I';
        axios.post(url, data)
            .then(response => {
                console.log(response);
            }).catch(err => {
                console.log("Something error");
            });
        dispatch(sendResetPassword());
    }
}

export const sendResetPassword = () => {
    return {
        type: actionTypes.RESET_PASSWORD
    }
}