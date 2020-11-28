import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {SET_ALERT, REMOVE_ALERT} from './actionTypes';
import {setAlert,id} from './alert'
import { createStore } from 'redux';
import reducers from "../reducers/index"
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// JestHook.mock('expo-font');
import {createBrowserHistory} from 'history'
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const history = createBrowserHistory();

const storeFactory = (initialState)=>{
    return createStore(reducers(history),initialState)
}
configure({
    adapter: new EnzymeAdapter
})

describe('alert', () => {
    let store;
    const initialState=[]
    beforeEach(()=>{
        store= mockStore()
        jest.useFakeTimers();  

    })
  it("returns an action with type SET_ALERT", () =>
        {
            store.dispatch(setAlert("message1","alertType1"))
                let expectedActions = 
                   [ { type: 'SET_ALERT' ,
                    "payload":  {
                        "alertType": "alertType1",
                        "id": id,
                        "msg": "message1"}}]
                    console.log("alert test", store.getActions())
                    expect(store.getActions()).toEqual(expectedActions)
        //     const newState=store.getState()
        //     const expectedState={
             
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2500);  
        //     }
        //     expect(newState).toEqual(expectedState);

        });
   
    });