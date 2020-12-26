import { SET_ALERT, REMOVE_ALERT } from '../actions/actionTypes';

export const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
        console.log(state)
      return [...state, payload];
    case REMOVE_ALERT:
      console.log(state, payload)
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}