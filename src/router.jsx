/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppointmentForm from './components/forms/AppointmentForm';

const routes = [
  {
    component: AppointmentForm,
    name: 'Agendamento',
    path: '/agendamento'
  }
];

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
