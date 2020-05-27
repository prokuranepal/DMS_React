import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Aux from './hoc/Auxiliary/Auxiliary';
import Dashboard from './containers/Dashboard/Dashboard';
import Auth from './containers/Auth/Auth';
import Startup from './containers/Startup';
import Reset from './containers/Auth/Reset/ResetPassword';
import PrivateRoute from './containers/routing/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Aux>
            <Switch>
              <Route exact path="/auth" component={Auth} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              {/* <Route path="/reset" component={Reset} /> */}
              <Route path="/"  component={Startup} />
            </Switch>
      </Aux>
    )
  }
}

export default App;
