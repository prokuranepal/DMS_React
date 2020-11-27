import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './actionTypes';
export const id = uuidv4();
export const setAlert = (msg, alertType, timeout = 2500) => (dispatch,getState) => {
  

  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};