import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import asyncComponent from "../../../util/asyncComponent";
// import DroneDetail from '../../../containers/Dms/DroneDetail/DroneDetail';

const DMS = ({ match }) => (
  <div className="app-wrapper">
    <Switch>
      <Route path={`${match.url}/drone`} component={asyncComponent(() => import("../../../containers/SuperAdmin/Dms/Drone"))}/>
      {/* <Route path={`${match.url}/dronedetail`} render={(props) => <DroneDetail {...props}/>}/> */}
      {/* <Route path={`${match.url}/hospital`} component={asyncComponent(() => import("../../../containers/SuperAdmin/Dms/Hospitals"))}/> */}
      <Redirect exact from={`${match.url}/`} to={`${match.url}/drone`}/>
    </Switch>
  </div>
);

export default DMS;
