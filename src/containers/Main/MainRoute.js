import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Users from '../Users/Users';
import IMS from '../Ims/Ims';
import {Redirect} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
const MainRoute = props => {
    return (
        <Aux>
              <Switch>
                <Route  path="/admin/users" component={Users} />
                <Route  path="/admin/ims" component={IMS} />
                <Route  path="/admin/dashboard" component={Dashboard} />
                <Redirect from="/admin" to="/admin/dashboard" />
              </Switch>
        </Aux>
      )
}
export default MainRoute;