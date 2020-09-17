import {FETCH_ERROR, FETCH_START, FETCH_SUCCESS, HIDE_MESSAGE, SHOW_MESSAGE, GET_NOTIFICATIONS_SUCCESS} from '../../constants/ActionTypes'
import * as actionTypes from '../actions/actionTypes';
const INIT_STATE = {
  error: "",
  loading: false,
  message: '',
  notifications: ''
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_START: {
      return {...state, error: '', message: '', loading: true};
    }
    case FETCH_SUCCESS: {
      return {...state, error: '', message: '', loading: false};
    }
    case SHOW_MESSAGE: {
      return {...state, error: '', message: action.payload, loading: false};
    }
    case FETCH_ERROR: {
      return {...state, loading: false, error: action.payload, message: ''};
    }
    case HIDE_MESSAGE: {
      return {...state, loading: false, error: '', message: ''};
    }
    case actionTypes.GET_NOTIFICATIONS_SUCCESS: {
      return {...state, notifications: action.data}
    }
    default:
      return state;
  }
}
