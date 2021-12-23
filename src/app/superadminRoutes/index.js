import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import asyncComponent from '../../util/asyncComponent';
const SuperAdminRoutes = ({ match}) => {
// console.log("superadmin",match.url)
  return <Switch>
    <Route path={`${match.url}/dashboard`} component={asyncComponent(() => import('./Dashboard'))}  />
    <Route path={`${match.url}/dms`} component={asyncComponent(() => import('./Dms'))} />
    <Route path={`${match.url}/dronecontrol`} component={asyncComponent(() => import('./DroneControl'))}  />
    <Route path={`${match.url}/dronecontrolall`} component={asyncComponent(() => import('../adminRoutes/DroneControl/DroneControlAll'))}  />
    <Route path={`${match.url}/users`} component={asyncComponent(() => import('./Users'))}  />
    <Redirect from={`/app`} to={`${match.url}/dashboard`} />
  </Switch>

}
export default withRouter(SuperAdminRoutes);

