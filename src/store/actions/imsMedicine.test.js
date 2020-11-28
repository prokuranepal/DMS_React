import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {ADD_MEDICINE} from './actionTypes';
import {setAlert,id} from './alert'
import axios from '../../axios-orders'
import { createStore } from 'redux';
import reducers from "../reducers/index"
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// JestHook.mock('expo-font');
import { GET_CARDS, CARD_ERROR, SET_PLACES } from './actionTypes';

import {createBrowserHistory} from 'history'
import MockAdapter from 'axios-mock-adapter';
import * as axios1 from '../../response/falseFetch';

import { addMedicine, addMedicineSuccess } from './imsMedicine';
const middleware = [thunk];
const mock = new MockAdapter(axios);

const mockStore = configureMockStore(middleware);
const history = createBrowserHistory();

const storeFactory = (initialState)=>{
    return createStore(reducers(history),initialState)
}
configure({
    adapter: new EnzymeAdapter
})

describe('imsMedicine', () => {
    let store;
    const initialState=[]

    beforeEach(()=>{
        // store.clearActions();
        store= mockStore()


    })
  it("returns an action with type addMedicine", () =>
        {
            store.dispatch(addMedicine()).then(
                ()=>{
                let expectedActions = {
                        "type": "ADD_MEDICINE"
                }
                expect(store.getActions()).toEqual(expectedActions)
                }
            )
        
        }
           
  )
 

it("returns an action with type addMedicineSuccess", () =>
{
  const action = addMedicineSuccess()
  expect(action).toEqual({type: ADD_MEDICINE}) 
});    
   
    });