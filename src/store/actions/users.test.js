import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {
    GET_USER1,
    GET_USER2,
    GET_USERS,
    CLEAR_USER1,
    CLEAR_USER2,
    DELETE_USER,
    USER_ERROR
} from './actionTypes'
import {id} from './alert'
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

const id1 ='b94a8113-9025-439c-81af-9cc21418c29d';

describe('users', () => {
    let store;
    const initialState=[]

    beforeEach(()=>{
        // store.clearActions();
        store= mockStore()


    })
  it("returns an action with type getUsers", () =>
        {
            // mock.onGet('/dashboard').reply(200,  [{ item: 'item1' }, { item: 'item2' }])
            store.dispatch(getUsers())
                
                let expectedActions = [{
                    "type": GET_USERS, payload: {
                        users1: ['User 1', 'User 2', 'User 3'],
                        users2: ['User 1', 'User 2', 'User 3']
                }}]
                expect(store.getActions()).toEqual(expectedActions)
                
        
        }
           
  )

  it("returns an action with type createUser1", () =>
  {
      let historyFunction=jest.fn()
      // mock.onGet('/dashboard').reply(200,  [{ item: 'item1' }, { item: 'item2' }])
      store.dispatch(createUser1({ 
        "alertType": "success",
        "id": id1,
        "msg": "Profile Updated",
      },{push:historyFunction}, true))
          
          let expectedActions =    [
             {
              "payload":  {
   
               "users1":  { 
                "alertType": "success",
                "id": id1,
                "msg": "Profile Updated",
              },
             },
             "type": "GET_USER1",
           },
            {
             "payload":  {
               "users1":  {
                "alertType": "success",
                "id":id1,
                "msg": "Profile Updated",
              },
             },
             "type": "CLEAR_USER2",
           },
            {
             "payload":  {
               "alertType": "success",
               "id": id,
               "msg": "Profile Updated",
             },
             "type": "SET_ALERT",
           },
         ]
          expect(store.getActions()).toEqual(expectedActions)
          expect(historyFunction).toHaveBeenCalled()
  
  })

it("returns an action with type createUser2", () =>
  {
      let historyFunction=jest.fn()
      // mock.onGet('/dashboard').reply(200,  [{ item: 'item1' }, { item: 'item2' }])
      store.dispatch(createUser2({
        "alertType": "success",
        "id": id1,
        "msg": "Profile Updated",
      },{push:historyFunction}, true))
          
          let expectedActions =  [
             {
              "payload":  {
       
               "users2":  {
                         "alertType": "success",
                         "id": id1,
                         "msg": "Profile Updated",
                       },
             },
             "type": "GET_USE2",
           },
            {
             "payload":  {
               "users2":{
                         "alertType": "success",
                         "id": id1,
                         "msg": "Profile Updated",
                       },
             },
             "type": "CLEAR_USER1",
           },
            {
             "payload":  {
               "alertType": "success",
               "id": id,
               "msg": "Profile Updated",
             },
             "type": "SET_ALERT",
           },
          ]
          expect(store.getActions()).toEqual(expectedActions)
          expect(historyFunction).toHaveBeenCalled()
  
  })

it("returns an action with type deleteUser", () =>
  {
      // mock.onGet('/dashboard').reply(200,  [{ item: 'item1' }, { item: 'item2' }])
      store.dispatch(deleteUser(id))
          
          let expectedActions = [{
              "type": DELETE_USER, 
              payload: id},
                {
                   "payload":  {
                     "alertType": "error",
                     "id": id,
                     "msg": "Profile Deleted",
                   },
                   "type": "SET_ALERT",
                 }]
          expect(store.getActions()).toEqual(expectedActions)
  
  })
  

})