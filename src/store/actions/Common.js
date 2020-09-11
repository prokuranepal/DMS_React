import {FETCH_ERROR, FETCH_START, FETCH_SUCCESS, HIDE_MESSAGE, SHOW_MESSAGE} from "../../constants/ActionTypes";
import axios from '../../axios-orders';
import * as func from './function';
import * as actionTypes from './actionTypes';
export const fetchStart = () => {
  return {
    type: FETCH_START
  }
};

export const fetchSuccess = () => {
  return {
    type: FETCH_SUCCESS
  }
};

export const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error
  }
};

export const showMessage = (message) => {
  return {
    type: SHOW_MESSAGE,
    payload: message
  }
};

export const hideMessage = () => {
  return {
    type: HIDE_MESSAGE
  }
};

export const getNotifications = () => {
  const url = '/dmsevent'
  return dispatch => {
    dispatch(getNotificationsStart());
    axios.get(url,{ headers: func.getToken() })
    .then(res => {
      dispatch(getNotificationsSuccess(res.data));
      // console.log(res);
    })
    .catch (err => {
      dispatch(getNotificationsFail());
    })
  }
}


const getNotificationsStart = () => {
  return {
    type: actionTypes.GET_NOTIFICATIONS_START
  }
}

const getNotificationsSuccess = (data) => {
  return {
    type: actionTypes.GET_NOTIFICATIONS_SUCCESS
  }
}

const getNotificationsFail= () => {
  return {
    type: actionTypes.GET_NOTIFICATIONS_FAIL
  }
}





