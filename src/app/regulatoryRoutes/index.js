import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import asyncComponent from '../../util/asyncComponent';

const RegulatoryRoutes = ({ match}) =>
  <Switch>
    <Route path={`${match.url}/dashboard`} component={asyncComponent(() => import('./Dashboard'))}  />
    <Route path={`${match.url}/hospitals`} component={asyncComponent(() => import('./Dms'))}  />
    <Route path={`${match.url}/dronecontrolall`} component={asyncComponent(() => import('../adminRoutes/DroneControl/DroneControlAll'))}  />
    <Redirect from={`/app`} to={`${match.url}/dashboard`} />
  </Switch>


export default withRouter(RegulatoryRoutes);

