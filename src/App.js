import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Aux from './hoc/Auxiliary/Auxiliary';
import Dashboard from './containers/Dashboard/Dashboard';
import Main from './containers/Main/Main';
import Auth from './containers/Auth/Auth';
import Startup from './containers/Startup';
import Reset from './containers/Auth/Reset/ResetPassword';
import PrivateRoute from './containers/routing/PrivateRoute';

import Users from './containers/Users/Users';


class App extends Component {
  render() {
    return (
      <Aux>
            <Switch>
              <Route exact path="/auth" component={Auth} />
              <Route path="/admin" component={Main} />
              
              {/* <Route path="/reset" component={Reset} /> */}
              <Route exact path="/"  component={Startup} />
            </Switch>
      </Aux>
    )
  }
}

export default App;
