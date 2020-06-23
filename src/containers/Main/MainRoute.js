import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Users from '../Users/Users';
import IMS from '../Ims/Ims';
import {Redirect} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import DMS from '../Dms/dms';
import EventLogs from '../EventLogs/EventLogs';
import Weather from '../Weather/Weather';
import Issue from '../Issue/Issue';
import DroneControl from '../DroneControl/DroneControl';
import MissionPlanner from '../MissionPlanner/MissionPlanner';
const MainRoute = props => {
    return (
        <Aux>
              <Switch>
                <Route  path="/admin/users" component={Users} />
                <Route  path="/admin/ims" component={IMS} />
                <Route path="/admin/dms" component={DMS} />
                <Route path="/admin/eventlog" component={EventLogs} />
                <Route path="/admin/weather" component={Weather} />
                <Route path="/admin/issue" component={Issue} />
                <Route path="/admin/missionplanner" component={MissionPlanner} />
                <Route path="/admin/dronecontrol" component={DroneControl} />
                <Route  path="/admin/dashboard" component={Dashboard} />
                <Redirect from="/admin" to="/admin/dashboard" />
              </Switch>
        </Aux>
      )
}
export default MainRoute;