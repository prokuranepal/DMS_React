// import {setAlert} from './alert';
import axios from '../../axios-orders';
import {
  
    GET_USERS,
    DELETE_USER,
    ADD_USER,
    UPDATE_USER,
    GET_USER_PROFILE,
    UPDATE_USER_PROFILE
} from './actionTypes'
import * as func from './function';
//Get users 

export const getUsers = () =>  dispatch => {
   axios.get('/users',{headers: func.getToken()})
   .then(res => {
       console.log(res.data);
       dispatch({
           type: GET_USERS,
           users: res.data
       })
   })
   .catch(err => {
    console.log(err)
})
}

export const addUser = (data) =>  dispatch => {
    console.log(data);
    axios.post('/users',data,{headers: func.getToken()})
    .then(res => {
        console.log(res.data);
        dispatch({
            type: ADD_USER,
            users: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
 }

 export const updateUser = (data, id) =>  dispatch => {
    console.log(data,id);
    const url = `/users/${id}`;
    axios.put(url,data,{headers: func.getToken()})
    .then(res => {
        console.log(res.data);
        dispatch({
            type: UPDATE_USER,
            users: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
 }


export const deleteUser = (id) => dispatch => {

    const url = `/users/${id}`;
    axios.delete(url,{headers: func.getToken()})
    .then(res => {
        dispatch({
            type: DELETE_USER,
        })
    })
    .catch(err => {
        console.log(err)
    })
        
}

export const getUserProfile = (id) => dispatch => {
    const url = `/users/${id}`;
    axios.get(url,{headers: func.getToken()})
    .then(response => {
        console.log(response);
        dispatch(getUserProfileSuccess(response.data));
    })
    .catch(err => {
        console.log(err)
    })
}

export const getUserProfileSuccess = (data) => {
    return {
        type: GET_USER_PROFILE,
        userProfile: data
    }
}

export const updateUserProfile = (id) => dispatch => {
    const url = `/users/${id}`;
    axios.get(url,{headers: func.getToken()})
    .then(response => {
        console.log(response);

    })
    .catch(err => {
        console.log(err)
    })
}

export const updateUserProfileSuccess = (data) => {
    return {
        type: UPDATE_USER_PROFILE,
        userProfile: data
    }
}
