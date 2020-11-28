import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {FETCH_ERROR, FETCH_START, FETCH_SUCCESS, HIDE_MESSAGE, SHOW_MESSAGE} from '../../constants/ActionTypes';
import {fetchError, fetchStart, fetchSuccess, hideMessage,showMessage} from './Common'
// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})

describe('cart', () => {
  it("returns an action with type FETCH_SUCCESS", () =>
        {
          const action = fetchSuccess()
          expect(action).toEqual({type: FETCH_SUCCESS}) 
        });

        it("returns an action with type FETCH_START", () =>
        {
          const action = fetchStart()
          expect(action).toEqual({type: FETCH_START}) 
        });     


        it("returns an action with type FETCH_ERROR", () =>
        {
          const action = fetchError("error")
          expect(action).toEqual({type: FETCH_ERROR, payload:"error"}) 
        }); 

        it("returns an action with type SHOW_MESSAGE", () =>
        {
          const action = showMessage("show")
          expect(action).toEqual({type: SHOW_MESSAGE, payload:"show"}) 
        }); 

        it("returns an action with type HIDE_MESSAGE", () =>
        {
          const action = hideMessage()
          expect(action).toEqual({type: HIDE_MESSAGE}) 
        }); 
    });