import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {FETCH_ERROR, FETCH_START, FETCH_SUCCESS, HIDE_MESSAGE, SHOW_MESSAGE} from '../../constants/ActionTypes'
import commonReducer , { INIT_STATE} from './Common'

// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()

describe('commonReducer', () => {
    it("returns default initial state", () =>
    {
      const newState = commonReducer(undefined,{type:""})
      expect(newState).toEqual(INIT_STATE)
    });
    it("on receiving FETCH_START", () =>
    {
      const newState = commonReducer(undefined, {type:FETCH_START})
      expect(newState).toEqual({error: "",
      loading: true,
      message: ''})
    });
    it("on receiving FETCH_SUCCESS with initial state", () =>
    {
      const newState = commonReducer(undefined, {type:FETCH_SUCCESS})
      expect(newState).toEqual({error: "",
      loading: false,
      message: ''})
    });
    it("on receiving SHOW_MESSAGE with initial state", () =>
    {
      const newState = commonReducer(undefined, {type:SHOW_MESSAGE, payload:"message1"})
      expect(newState).toEqual({error: "",
      loading: false,
      message: 'message1'})
    });
    it("on receiving FETCH_ERROR with initial state", () =>
    {
      const newState = commonReducer(undefined, {type:FETCH_ERROR,payload:"error1"})
      expect(newState).toEqual({error: "error1",
      loading: false,
      message: ''})
    });
    it("on receiving HIDE_MESSAGE with initial state", () =>
    {
      const newState = commonReducer(undefined, {type:HIDE_MESSAGE})
      expect(newState).toEqual({error: "",
      loading: false,
      message: ''})
    });
    });