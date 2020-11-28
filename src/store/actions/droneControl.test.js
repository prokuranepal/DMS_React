import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import * as actionTypes from './actionTypes';
import {fetchActiveDrones,
    fetchActiveDronesSuccess,
    fetchActiveDronesUpdate,
    fetchActiveDronesFail,
    fetchMissionList, 
    fetchMissionListSuccess, 
    fetchMissionListUpdate,
    fetchMissionListFail} from './droneControl'
import axios from '../../axios-orders'
import { createStore } from 'redux';
import reducers from "../reducers/index"
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// JestHook.mock('expo-font');

import {createBrowserHistory} from 'history'
import MockAdapter from 'axios-mock-adapter';

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

describe('DroneControl', () => {
    let store;
    const initialState=[]

    beforeEach(()=>{
        // store.clearActions();
        store= mockStore()


    })
  it("returns an action with type fetchActiveDrones", () =>
        {
            // mock.onGet('/dashboard').reply(200,  [{ item: 'item1' }, { item: 'item2' }])
            store.dispatch(fetchActiveDrones()).then(()=>{
                let expectedActions =  [
                      {
                       "type": "FETCH_ACTIVE_DRONES_SUCCESS",
                     },
                      {
                       "activeDrones":  [
                          {
                           "code": "VTOL941",
                           "name": "Alpha",
                           "type": "Quad VTOL",
                           "value": "1",
                         },
                          {
                           "code": "VTOL941",
                           "name": "Alpha",
                           "type": "Quad VTOL",
                           "value": "2",
                         },
                          {
                           "code": "VTOL941",
                           "name": "Alpha",
                           "type": "Quad VTOL",
                           "value": "3",
                         },
                       ],
                       "type": "FETCH_ACTIVE_DRONES_UPDATE",
                     },
                   ]
                expect(store.getActions()).toEqual(expectedActions)
                
              })
        
        }
           
  )
  it("returns an action with type fetchActiveDronesSuccess", () =>
  {
    //   mock2.onGet('/places.js').reply(200,  {placesResponse:"response1"})
      store.dispatch(fetchActiveDronesSuccess())    
       let expectedActions = [{
                   type:actionTypes.FETCH_ACTIVE_DRONES_SUCCESS
                }]
          expect(store.getActions()).toEqual(expectedActions)
          }
     
)

it("returns an action with type fetchActiveDronesUpdate", () =>
{
  const action = fetchActiveDronesUpdate("drone1")
  expect(action).toEqual({ type: actionTypes.FETCH_ACTIVE_DRONES_UPDATE,
    activeDrones: "drone1"}) 
});    
   
it("returns an action with type fetchActiveDronesFail", () =>
{
  const action = fetchActiveDronesFail()
  expect(action).toEqual({type: actionTypes.FETCH_ACTIVE_DRONES_FAIL}) 
});   
it("returns an action with type fetchMissionList", () =>
{
  store.dispatch(fetchMissionList()).then(()=>{
    let expectedActions =  [
          {
           "type": "FETCH_MISSION_LIST_SUCCESS",
         },
          {
           "missions":  [
              {
               "ETA": 20,
               "dist": 500,
               "title": "Biratnagar to Dharan",
               "value": "1",
               "waypoints": 6,
             },
              {
               "ETA": 20,
               "dist": 500,
               "title": "Dharan to Dhankuta",
               "value": "2",
               "waypoints": 6,
             },
              {
               "ETA": 20,
               "dist": 500,
               "title": "Dhankuta to Tehrathum",
               "value": "3",
               "waypoints": 6,
             },
              {
               "ETA": 20,
               "dist": 500,
               "title": "Dhankuta to Tehrathum",
               "value": "4",
               "waypoints": 6,
             },
              {
               "ETA": 20,
               "dist": 500,
               "title": "Dhankuta to Tehrathum",
               "value": "5",
               "waypoints": 6,
             },
              {
               "ETA": 20,
               "dist": 500,
               "title": "Dhankuta to Tehrathum",
               "value": "6",
               "waypoints": 6,
             },
              {
               "ETA": 20,
               "dist": 500,
               "title": "Dhankuta to Tehrathum",
               "value": "7",
               "waypoints": 6,
             },
           ],
           "type": "FETCH_MISSION_LIST_UPDATE",
         },
       ]
    expect(store.getActions()).toEqual(expectedActions)
    
  })

});   
it("returns an action with type fetchMissionListSuccess", () =>
{
  const action = fetchMissionListSuccess()
  expect(action).toEqual({type: actionTypes.FETCH_MISSION_LIST_SUCCESS}) 
});   
it("returns an action with type fetchMissionListUpdate", () =>
{
  const action = fetchMissionListUpdate("mission1")
  expect(action).toEqual({       type: actionTypes.FETCH_MISSION_LIST_UPDATE,
    missions: "mission1"}) 
});   
it("returns an action with type fetchMissionListFail", () =>
{
  const action = fetchMissionListFail()
  expect(action).toEqual({ type: actionTypes.FETCH_MISSION_LIST_FAIL
  }) 
});   
    });