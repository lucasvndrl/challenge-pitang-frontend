import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const routes = [];

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(({ path, component }) => (
        <Route exact key={path} path={path} component={component} />
      ))}
    </Switch>
  </BrowserRouter>
);
export default Routes;
