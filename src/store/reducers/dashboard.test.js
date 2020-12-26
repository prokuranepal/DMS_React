import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import * as actionTypes from '../actions/actionTypes';
import dashboardReducer , { initialState} from './dashboard'

// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()

describe('dashboardReducer', () => {
    it("returns default initial state", () =>
    {
      const newState = dashboardReducer(undefined,{type:""})
      expect(newState).toEqual(initialState)
    });
    it("on receiving GET_CARDS", () =>
    {
      const newState = dashboardReducer(undefined, {type:actionTypes.GET_CARDS, data:{cardData:"data1", graphs:"graph1"}})
      expect(newState).toEqual({    
        cardData: "data1",
        graphs: "graph1",
        loading: false,
        error: {},
        places: []})
    });
    it("on receiving CARD_ERROR", () =>
    {
      const newState = dashboardReducer(undefined, {type:actionTypes.CARD_ERROR, error:"error1"})
      expect(newState).toEqual({    
        cardData: null,
        graphs: null,
        loading: false,
        error: "error1",
        places: []})
    });
    it("on receiving SET_PLACES", () =>
    {
      const newState = dashboardReducer(undefined, {type:actionTypes.SET_PLACES, places:["place1", "place2"]})
      expect(newState).toEqual({    
        cardData: null,
        graphs: null,
        loading: true,
        error: {},
        places: ["place1","place2"]})
    });
   
    });