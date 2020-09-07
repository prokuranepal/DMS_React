import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import asyncComponent from "../../../util/asyncComponent";


const Table = ({ match }) => (
  <div className="app-wrapper">
    <Switch>
      <Route path={`${match.url}/drone`} component={asyncComponent(() => import("./drone/Drone"))}/>
      {/* <Route path={`${match.url}/dronereport`} component={asyncComponent(() => import("./routes/dronereport"))}/> */}
      <Redirect exact from={`${match.url}/`} to={`${match.url}/drone`}/>
    </Switch>
  </div>
);

export default Table;
