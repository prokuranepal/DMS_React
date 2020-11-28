import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { CREATE_MISSION, UPDATE_MISSION, DELETE_MISSION, GET_MISSION_START, SET_MISSION } from './actionTypes';
import {createUpdateMission, createMission, updateMission, deleteMission, getMission, getMissionStart, setMission} from './mission'
import axios from '../../axios-orders'
import { createStore } from 'redux';
import reducers from "../reducers/index"
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// JestHook.mock('expo-font');

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

describe('mission', () => {
    let store;
    const initialState=[]

    beforeEach(()=>{
        // store.clearActions();
        store= mockStore()


    })
  it("returns an action with type getCards", () =>
        {
            // mock.onGet('/dashboard').reply(200,  [{ item: 'item1' }, { item: 'item2' }])
            store.dispatch(createUpdateMission({wp1:"Dharan"},"edit"))
                
                let expectedActions = [{
                    "type": "UPDATE_MISSION"}]
                expect(store.getActions()).toEqual(expectedActions)
                
        
        }
           
  )
  it("returns an action with type createMission", () =>
  {
    const action = createMission()
  expect(action).toEqual({type: CREATE_MISSION}) 

  
  }
     
)

it("returns an action with type UPDATE_MISSION", () =>
{
  const action = updateMission()
  expect(action).toEqual({type: UPDATE_MISSION}) 
});    
it("returns an action with type DELETE_MISSION", () =>
{
  const action = deleteMission()
  expect(action).toEqual({type: DELETE_MISSION}) 
});    
   
it("returns an action with type getMission", () =>
        {
            // mock.onGet('/dashboard').reply(200,  [{ item: 'item1' }, { item: 'item2' }])
            store.dispatch(getMission("mission1"))
                let expectedActions =[{
                       "type": "DELETE_MISSION_START"
                }]
                expect(store.getActions()).toEqual(expectedActions)
                
           
        
        }
        
           
  )
  it("returns an action with type GET_MISSION_START", () =>
{
  const action = getMissionStart()
  expect(action).toEqual({type: GET_MISSION_START}) 
});  
it("returns an action with type SET_MISSION", () =>
{
  const action = setMission({missionId:"mission1", wp:[{lat:3, long:5},{lat:90, long:8},{lat:63, long:55}]})
  expect(action).toEqual({type: SET_MISSION, missionDetail: {missionId:"mission1", wp:[{lat:3, long:5},{lat:90, long:8},{lat:63, long:55}]}}) 
});  
    });