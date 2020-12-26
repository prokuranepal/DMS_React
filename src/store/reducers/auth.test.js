import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import * as actionTypes from '../actions/actionTypes';
import authReducer , { initialState} from './auth'

// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()

describe('authReducer', () => {
    it("returns default initial state", () =>
    {
      const newState = authReducer(undefined,{type:""})
      expect(newState).toEqual(initialState)
    });
    it("on receiving AUTH_START", () =>
    {
      const newState = authReducer(undefined, {type:actionTypes.AUTH_START})
      expect(newState).toEqual({ token: localStorage.getItem('token'),
      // toke: null,
      // userId: null,
      userId: localStorage.getItem('userId'),
      error: null,
      loading: true,
      expiryDate: localStorage.getItem('expirationDate'),
      initURL: '',
      authRedirectPath: '/'})
    });
    it("on receiving AUTH_SUCCESS with initial state", () =>
    {
      const newState = authReducer(undefined, {type:actionTypes.AUTH_SUCCESS, token:"12345678",userId:"user123" })
      expect(newState).toEqual({
        token: "12345678",
      userId: "user123",
      error: null,
      loading: false,
      expiryDate: localStorage.getItem('expirationDate'),
      initURL: '',
      authRedirectPath: '/'})
      })
  
      it("on receiving AUTH_FAIL with initial state", () =>
      {
        const newState = authReducer(undefined, {type:actionTypes.AUTH_FAIL,error:"unauthenticated user" })
        expect(newState).toEqual({
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId'),
        error: "unauthenticated user",
        loading: false,
        expiryDate: localStorage.getItem('expirationDate'),
        initURL: '',
        authRedirectPath: '/'})
        })
        it("on receiving AUTH_LOGOUT with initial state", () =>
        {
          const newState = authReducer(undefined, {type:actionTypes.AUTH_LOGOUT })
          expect(newState).toEqual({
          token: null,
          userId: null,
          error: null,
          loading: false,
          expiryDate: localStorage.getItem('expirationDate'),
          initURL: '',
          authRedirectPath: '/'})
          })
          it("on receiving SET_AUTH_REDIRECT_PATH with initial state", () =>
          {
            const newState = authReducer(undefined, {type:actionTypes.SET_AUTH_REDIRECT_PATH,path:'/redirectedURL' })
            expect(newState).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            expiryDate: localStorage.getItem('expirationDate'),
            initURL: '',
            authRedirectPath: '/redirectedURL'})
            })
            it("on receiving AUTHENTICATE with initial state", () =>
            {
              const newState = authReducer(undefined, {type:actionTypes.AUTHENTICATE, token:"12345678",userId:"user123" })
              expect(newState).toEqual({
                token: "12345678",
                userId: "user123",
              error: null,
              loading: false,
              expiryDate: localStorage.getItem('expirationDate'),
              initURL: '',
              authRedirectPath: '/'})
              })
              it("on receiving SET_INIT_URL with initial state", () =>
              {
                const newState = authReducer(undefined, {type:actionTypes.SET_INIT_URL, url:"authe" })
                expect(newState).toEqual({
                  token: localStorage.getItem('token'),
                  userId: localStorage.getItem('userId'),
                error: null,
                loading: false,
                expiryDate: localStorage.getItem('expirationDate'),
                initURL: 'authe',
                authRedirectPath: '/'})
                })
    });