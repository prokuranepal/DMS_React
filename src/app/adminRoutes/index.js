import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import asyncComponent from '../../util/asyncComponent';
const AdminRoutes = ({ match}) =>


  <Switch>
    <Route path={`${match.url}/weather`} component={asyncComponent(() => import('./Weather/Weather'))} />
    <Route path={`${match.url}/ims`} component={asyncComponent(() => import('./Ims/Ims'))}  />
    <Route path={`${match.url}/dms`} component={asyncComponent(() => import('./Dms/dms'))} />
    <Route path={`${match.url}/events`} component={asyncComponent(() => import('./EventLogs/EventLogs'))}/>
    <Route path={`${match.url}/flights`} component={asyncComponent(() => import('./Flights/index'))} />
    <Route path={`${match.url}/missionplanner`} component={asyncComponent(() => import('./MissionPlanner/MissionPlanner'))} />
    {/* <Route path={`${match.url}/dronecontrol`} component={DroneControl} /> */}
    <Route path={`${match.url}/users`} component={asyncComponent(() => import('./Users/Users'))} />
    <Route path={`${match.url}/dronecontrol`} component={asyncComponent(() => import('./DroneControl/DroneControl'))} />
    <Route path={`${match.url}/dronecontrolall`} component={asyncComponent(() => import('./DroneControl/DroneControlAll'))} />
    <Route path={`${match.url}/dashboard`} component={asyncComponent(() => import('./Dashboard/Dashboard'))}  />
    <Route path={`${match.url}/profile`} component={asyncComponent(() => import('../../containers/Users/UserProfile/UserProfile'))}  />
    <Redirect from={`/app`} to={`${match.url}/dashboard`} />
  </Switch>


export default withRouter(AdminRoutes);

