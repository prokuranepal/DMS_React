import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import * as actionTypes from '../actions/actionTypes';
import weatherReducer , { initialState} from './weather'

// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()

describe('weatherReducer', () => {
    it("returns default initial state", () =>
    {
      const newState = weatherReducer(undefined,{type:""})
      expect(newState).toEqual(initialState)
    });
    it("on receiving SET_WEATHER_DATA", () =>
    {
      const newState = weatherReducer(undefined, {type:actionTypes.SET_WEATHER_DATA, weatherData:"temp:40"})
      expect(newState).toEqual({weatherData:"temp:40"})
    });
  
   
    });