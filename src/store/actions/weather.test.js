import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import * as actionTypes from './actionTypes';

import {id} from './alert'
import {getWeather, getWeatherStart, setWeather, setPlaces} from './weather'
import axios from '../../axios-orders'
import { createStore } from 'redux';
import reducers from "../reducers/index"
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// JestHook.mock('expo-font');

import {createBrowserHistory} from 'history'
import MockAdapter from 'axios-mock-adapter';
import * as axios1 from '../../response/falseFetch';
import {getUsers, createUser1, createUser2, deleteUser} from './users'
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


describe('users', () => {
    let store;
    const initialState=[]

    beforeEach(()=>{
        // store.clearActions();
        store= mockStore()


    })
  it("returns an action with type getWeather", () =>
        {
            // mock.onGet('/dashboard').reply(200,  [{ item: 'item1' }, { item: 'item2' }])
            store.dispatch(getWeather())
                
                let expectedActions = []
                expect(store.getActions()).toEqual(expectedActions)
                
        
        }
           
  )

  it("returns an action with type getWeatherStart", () =>
{
  const action = getWeatherStart()
  expect(action).toEqual({type: actionTypes.GET_WEATHER_DATA_START}) 
});    
it("returns an action with type setWeather", () =>
{
  const action = setWeather("cloudy")
  expect(action).toEqual({type: actionTypes.SET_WEATHER_DATA, weatherData:"cloudy"}) 
});    
it("returns an action with type setPlaces", () =>
{
  const action = setPlaces("place1")
  expect(action).toEqual({type: actionTypes.SET_PLACES, places:"place1"}) 
});    

})