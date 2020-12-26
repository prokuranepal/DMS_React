import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import usersReducer , { initialState} from './users'
import {GET_USERS,
  GET_USER1, 
  GET_USER2, 
  USER_ERROR, 
  CLEAR_USER1, 
  CLEAR_USER2, 
  DELETE_USER} from '../actions/actionTypes'

// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()

describe('usersReducer', () => {
    it("returns default initial state", () =>
    {
      const newState = usersReducer(undefined,{type:""})
      expect(newState).toEqual(initialState)
    });
    it("on receiving GET_USER1", () =>
    {
      const newState = usersReducer(undefined, {type:GET_USER1, payload:{users1:["user1", "user2"]}})
      expect(newState).toEqual({...initialState, loading:false, users1:[["user1", "user2"]]})
    });
    it("on receiving GET_USER2", () =>
    {
      const newState = usersReducer(undefined, {type:GET_USER2, payload:{users2:["user1", "user2"]}})
      expect(newState).toEqual({...initialState, loading:false, users2:[["user1", "user2"]]})
    });
    it("on receiving GET_USERS", () =>
    {
      const newState = usersReducer(undefined, {type:GET_USERS, payload:{users1:["user1", "user2"]}})
      expect(newState).toEqual({...initialState, loading:false})
    });
    it("on receiving CLEAR_USER1", () =>
    {
      const newState = usersReducer({users1:["user3", "user4"]}, {type:CLEAR_USER1, payload:{users2:{username:"user3"}}})
      expect(newState).toEqual({ loading:false,users1:["user3","user4"]})
    });
    it("on receiving CLEAR_USER2", () =>
    {
      const newState = usersReducer({users2:["user3", "user4"]}, {type:CLEAR_USER2, payload:{users1:{username:"user4"}}})
      expect(newState).toEqual({ loading:false, users2:["user3","user4"]})
    });

    it("on receiving DELETE_USER with initial state", () =>
    {
      const newState = usersReducer({users2:["user2", "user4"], users1:["user1", "user2"]},{type:DELETE_USER, payload:{username:"user2"}})
      expect(newState).toEqual(  {
           "users1":  [
             "user1",
             "user2",
           ],
           "users2":  [
             "user2",
             "user4",
           ],
         })
    });
   
    });