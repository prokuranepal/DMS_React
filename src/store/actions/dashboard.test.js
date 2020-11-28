import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {SET_ALERT, REMOVE_ALERT} from './actionTypes';
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

import { getCurrentCards, getPlaces, setPlaces } from './dashboard';
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

describe('alert', () => {
    let store;
    const initialState=[]

    beforeEach(()=>{
        // store.clearActions();
        store= mockStore()


    })
  it("returns an action with type getCards", () =>
        {
            mock.onGet('/dashboard').reply(200,  [{ item: 'item1' }, { item: 'item2' }])
            store.dispatch(getCurrentCards()).then(
                ()=>{
                let expectedActions = [
                        {
                         "data":  [
                            {
                             "item": "item1",
                           },
                            {
                             "item": "item2",
                           },
                         ],
                         "type": "GET_CARDS",
                       },
                     ]
                expect(store.getActions()).toEqual(expectedActions)
                }
            )
        
        }
           
  )
  it("returns an action with type getPlaces", () =>
  {
    //   mock2.onGet('/places.js').reply(200,  {placesResponse:"response1"})
      store.dispatch(getPlaces()).then(
          ()=>{
          let expectedActions = [{"places": {"data": ["Dharan"]}, "type": "SET_PLACES"}]
          expect(store.getActions()).toEqual(expectedActions)
          }
      )
  
  }
     
)

it("returns an action with type SET_PLACES", () =>
{
  const action = setPlaces("place1")
  expect(action).toEqual({type: SET_PLACES, places:"place1"}) 
});    
   
    });