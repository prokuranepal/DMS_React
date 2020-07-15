import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import Settings from './Settings';
// import Auth from './Auth';
import Common from './Common';
import authReducer from './auth';
import dashboard from './dashboard';
import alert from './alert';
import users from './users';
import weather from './weather';


export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  commonData: Common,
  auth: authReducer,
  dashboard: dashboard,
  alert: alert,
  users: users,
  weather: weather
});
