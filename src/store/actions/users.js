import {setAlert} from './alert';
import axios from 'axios';
import {
    GET_USER1,
    GET_USER2,
    GET_USERS,
    USER_ERROR
} from './actionTypes'

//Get users 
export const getUsers = () => async dispatch => {
   try {
    //    const res = await axios.get('/user')
    const res = {
        data: {
                users1: ['User 1', 'User 2', 'User 3'],
                users2: ['User 1', 'User 2', 'User 3']
        }
        
    }
    dispatch({
        type: GET_USERS,
        payload: res.data
    })
   } catch (err) {
    // dispatch({
    //     type: USER_ERROR,
    //     payload: { msg: err.response.statusText, status: err.response.status }
    //   });
   }
}

//Create or update user
export const createUser1 = (formData, history, edit=false) => async dispatch => {
    try {
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }
         const  res = {
                data: {
                        users1: formData.username
                }
            }
    
        dispatch({
            type: GET_USER1,
            payload: res.data
        })

        if(!edit) {
            history.push('/users')
        }

    } catch(err){
        // const errors = err.response.err;
        // if(errors) {
        //     errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        // }

        // dispatch({
        //     type: USER_ERROR,
        //     payload: { msg: err.response.statusText, status: err.response.status } 
        //   });
    }

  
}

//Create or update user
export const createUser2 = (formData, history, edit=false) => async dispatch => {
    try {
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }
         const  res = {
                data: {
                    users2:formData.username
                }
            }
    

        dispatch({
            type: GET_USER2,
            payload: res.data
        })

        if(!edit) {
            history.push('/users')
        }

    } catch(err){
        // const errors = err.response.err;
        // if(errors) {
        //     errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        // }

        // dispatch({
        //     type: USER_ERROR,
        //     payload: { msg: err.response.statusText, status: err.response.status } 
        //   });
    }

  
}