import React from 'react';
import {ConnectedRouter} from 'connected-react-router'
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

import configureStore, {history} from './store';
// import './firebase/firebase';
import App from './containers/App';
 export const store = configureStore();

/**
 * This is the main entry point after index.js
 * The store and default route path are 
 * @returns {App} - Directs to App component which based on authentication decides wheter to direct to login or authentication';
 */

const MainApp = () =>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App}/>
      </Switch>
    </ConnectedRouter>
  </Provider>;

export default MainApp;