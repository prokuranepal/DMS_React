import {setAlert} from './alert';
import axios from 'axios';
import {
    GET_USER1,
    GET_USER2,
    GET_USERS,
    CLEAR_USER1,
    CLEAR_USER2,
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
                        users1: formData
                }
            }
    
        dispatch({
            type: GET_USER1,
            payload: res.data
        })

        if(edit){
            console.log('Hello')
            dispatch({
                type: CLEAR_USER2,
                payload: res.data
            })
        }
           
        history.push('/users')

        dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));
     

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
                    users2:formData
                }
            }
    

        dispatch({
            type: GET_USER2,
            payload: res.data
        })

        if(edit){
            dispatch({
                type: CLEAR_USER1,
                payload: res.data
            })
        }

            history.push('/users')

            dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));
        

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