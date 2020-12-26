import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import * as actionTypes from '../actions/actionTypes';
import droneControlReducer , { initialState} from './droneControl'

// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()

describe('droneControlReducer', () => {
    it("returns default initial state", () =>
    {
      const newState = droneControlReducer(undefined,{type:""})
      expect(newState).toEqual(initialState)
    });
    it("on receiving FETCH_ACTIVE_DRONES_UPDATE", () =>
    {
      const newState = droneControlReducer(undefined, {type:actionTypes.FETCH_ACTIVE_DRONES_UPDATE, activeDrones:"JT601"})
      expect(newState).toEqual({    activeDrones: "JT601",
      missions: null})
    });
    it("on receiving FETCH_MISSION_LIST_UPDATE with initial state", () =>
    {
      const newState = droneControlReducer(undefined, {type:actionTypes.FETCH_MISSION_LIST_UPDATE, missions:"mission1"})
      expect(newState).toEqual({    activeDrones: null,
          missions:"mission1"})
    });
   
    });