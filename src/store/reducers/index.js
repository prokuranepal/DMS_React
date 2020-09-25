import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import Settings from './Settings';
// import Auth from './Auth';
import Common from './Common';
import authReducer from './auth';
import dashboard from './dashboard';
import users from './users';
import weather from './weather';
import droneControl from './droneControl';
import mission from './mission';
import ims from './imsMedicine'
import imsOrder from './imsOrder';
import dms from './dms';

export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  commonData: Common,
  auth: authReducer,
  dashboard: dashboard,
  users: users,
  weather: weather,
  droneControl: droneControl,
  mission: mission,
  ims:ims,
  imsOrder: imsOrder,
  dms:dms
});
