import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
// import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import OverlayPage from './containers/OverlayPage';
export default () => (
  <App>
    <Switch>
      <Route path={routes.APP} component={CounterPage} />
      <Route path={routes.OVERLAY} component={OverlayPage} />
    </Switch>
  </App>
);
