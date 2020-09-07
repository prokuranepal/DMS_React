import {setAlert} from './alert';
import axios from '../../axios-orders';
import {
  
    GET_USERS,
    DELETE_USER,
    ADD_USER,
    UPDATE_USER
} from './actionTypes'
import * as func from './common';
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
 }


export const deleteUser = (user) => dispatch => {
        dispatch({
            type: DELETE_USER,
            payload: user
        })

         dispatch(setAlert('Profile Deleted', 'error'));
        
}
