import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { SET_ALERT, REMOVE_ALERT } from '../actions/actionTypes';
import alertReducer , { initialState} from './alert'

// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()

describe('alertReducer', () => {
    it("returns default initial state", () =>
    {
      const newState = alertReducer(undefined,{type:""})
      expect(newState).toEqual(initialState)
    });
    it("on receiving SET_ALERT", () =>
    {
      const newState = alertReducer(undefined, {type:SET_ALERT, payload:"payload1"})
      expect(newState).toEqual(["payload1"])
    });
    it("on receiving REMOVE_ALERT with initial state", () =>
    {
      const newState = alertReducer([{id:1, alert:"alert1"},{id:2, alert:"alert2"}], {type:REMOVE_ALERT, payload:1})
      expect(newState).toEqual([{id:2, alert:"alert2"}])
    });
   
    });