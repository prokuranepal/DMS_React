import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import * as actionTypes from './actionTypes';

import {id} from './alert'
import {authStart, authSuccess, setInitURL, authFail, authenticate, logout, checkAuthTimeout, sendRefreshToken, signUp, signUpSuccess, signIn, setAuthRedirectPath, authCheckState,resetPassword, sendResetPassword } from './auth'
import axios from '../../axios-orders'
import { createStore } from 'redux';
import reducers from "../reducers/index"
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// JestHook.mock('expo-font');

import {createBrowserHistory} from 'history'
import MockAdapter from 'axios-mock-adapter';
import * as axios1 from '../../response/falseFetch';
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
const token="32421515n215t125oi21523512i"
const refreshToken = "823o23838401nlk1500n434430"
describe('users', () => {
    let store;
    const initialState=[]

    beforeEach(()=>{
        // store.clearActions();
        store= mockStore()
        jest.useFakeTimers();  


    })
    it("returns an action with type authStart", () =>
{
  const action = authStart()
  expect(action).toEqual({type: actionTypes.AUTH_START}) 
});    
it("returns an action with type authSuccess", () =>
{
  const action = authSuccess(token, "user1")
  expect(action).toEqual({type: actionTypes.AUTH_SUCCESS, token:token, userId:"user1"}) 
});    
it("returns an action with type setInitURL", () =>
{
  const action = setInitURL("url1")
  expect(action).toEqual({type: actionTypes.SET_INIT_URL, url:"url1"}) 
});    
it("returns an action with type authFail", () =>
{
  const action = authFail("error1")
  expect(action).toEqual({type: actionTypes.AUTH_FAIL, error:"error1"}) 
});    
it("returns an action with type logout", () =>
{
  const action = logout()
  expect(action).toEqual({type: actionTypes.AUTH_LOGOUT}) 
});    
it("returns an action with type signUpSuccess", () =>
{
  const action = signUpSuccess()
  expect(action).toEqual({type: actionTypes.SIGNUP_SUCCESS}) 
});    
it("returns an action with type setAuthRedirectPath", () =>
{
  const action = setAuthRedirectPath("path1")
  expect(action).toEqual({type: actionTypes.SET_AUTH_REDIRECT_PATH, path:"path1"}) 
});    
it("returns an action with type sendResetPassword", () =>
{
  const action = sendResetPassword()
  expect(action).toEqual({type: actionTypes.RESET_PASSWORD}) 
});    
  it("returns an action with type authenticate", () =>
        {
            // mock.onGet('/dashboard').reply(200,  [{ item: 'item1' }, { item: 'item2' }])
            store.dispatch(authenticate(token, "user1",10))
                
                let expectedActions = [{
                    "type": actionTypes.AUTHENTICATE, token: token,
                    userId: "user1"}]
                expect(store.getActions()).toEqual(expectedActions)
                
        
        }
           
  )

  it("returns an action with type checkAuthTimeout", () =>
  {
      let historyFunction=jest.fn()
      // mock.onGet('/dashboard').reply(200,  [{ item: 'item1' }, { item: 'item2' }])
      store.dispatch(checkAuthTimeout(10, refreshToken))
          
          let expectedActions =    [
         ]
          expect(store.getActions()).toEqual(expectedActions)
          expect(setTimeout).toHaveBeenCalled()
  
  })

it("returns an action with type sendRefreshToken", () =>
  {
      let historyFunction=jest.fn()
      // mock.onGet('/dashboard').reply(200,  [{ item: 'item1' }, { item: 'item2' }])
      store.dispatch(sendRefreshToken(refreshToken))
          
          let expectedActions =  [
             
          ]
          expect(store.getActions()).toEqual(expectedActions)
  
  })

it("returns an action with type signUp", () =>
  {
      // mock.onGet('/dashboard').reply(200,  [{ item: 'item1' }, { item: 'item2' }])
      store.dispatch(signUp("sa@gmail.com", "password"))
          
          let expectedActions = []
          expect(store.getActions()).toEqual(expectedActions)
  
  })
  it("returns an action with type signIn", () =>
  {
      // mock.onGet('/dashboard').reply(200,  [{ item: 'item1' }, { item: 'item2' }])
      store.dispatch(signIn("sa@gmail.com", "password"))
          
          let expectedActions = [ 
                {
                 "type": "AUTH_START",
               },
             ]
          expect(store.getActions()).toEqual(expectedActions)
  
  })

  it("returns an action with type authCheckState", () =>
  {
      // mock.onGet('/dashboard').reply(200,  [{ item: 'item1' }, { item: 'item2' }])
      store.dispatch(authCheckState())
          
          let expectedActions =   [
                {
                 "token": "undefined",
                 "type": "AUTH_SUCCESS",
                 "userId": "undefined",
               },
             ]
          expect(store.getActions()).toEqual(expectedActions)
  
  })

  it("returns an action with type resetPassword", () =>
  {
      // mock.onGet('/dashboard').reply(200,  [{ item: 'item1' }, { item: 'item2' }])
      store.dispatch(resetPassword("sa@gmail.com"))
          
          let expectedActions = [ 
            {
             "type": "RESET_PASSWORD",
           },
         ]
          expect(store.getActions()).toEqual(expectedActions)
  
  })
})