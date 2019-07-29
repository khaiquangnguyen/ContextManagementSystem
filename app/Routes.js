import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './App';
import OverlayPage from './Components/Overlay';
import MainPage from './Components/MainPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.MAIN} component={MainPage} />{' '}
      <Route path={routes.OVERLAY} component={OverlayPage} />{' '}
    </Switch>{' '}
  </App>
);
