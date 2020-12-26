import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import asyncComponent from "../../../util/asyncComponent";

export const route_comp=asyncComponent(() => import("./routes/drone/Drone"))
const Table = ({match}) => {
  {console.log("route testing",match)}

  return(
  <div className="app-wrapper">
    <Switch>
      <Route path={`${match.url}/drone`} component={route_comp}/>
      {/* <Route path={`${match.url}/dronereport`} component={asyncComponent(() => import("./routes/dronereport"))}/> */}
      <Redirect exact from={`${match.url}/`} to={`${match.url}/Drone`}/>
    </Switch>
  </div>
);}

export default Table;
