import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import asyncComponent from "../../../util/asyncComponent";
import FlightDetail from './FlightDetail';

const Index = ({ match }) => (
  <div className="app-wrapper">
    <Switch>
      <Route path={`${match.url}/flights`} component={asyncComponent(() => import("./Flights"))}/>
      <Route path={`${match.url}/flightdetail`} render={(props) => <FlightDetail {...props}/>}/>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/flights`}/>
    </Switch>
  </div>
);

export default Index;
