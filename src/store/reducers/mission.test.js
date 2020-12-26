import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import * as actionTypes from '../actions/actionTypes';
import missionReducer , { initialState} from './mission'

// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()

describe('missionReducer', () => {
    it("returns default initial state", () =>
    {
      const newState = missionReducer(undefined,{type:""})
      expect(newState).toEqual(initialState)
    });
    it("on receiving SET_MISSION", () =>
    {
      const newState = missionReducer(undefined, {type:actionTypes.SET_MISSION, missionDetail:{home:{lat:23,lon:45}, wp:[{lat:3,lon:4}, {lat:5,lon:6}]}})
      expect(newState).toEqual({missionDetail:{home:{lat:23,lon:45}, wp:[{lat:3,lon:4}, {lat:5,lon:6}]}})
    });
     
    });