import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateAppointment from './pages/CreateAppointment';
import AppointmentView from './pages/AppointmentView';
import Home from './pages/Home';

const routes = [
  {
    component: CreateAppointment,
    name: 'Agendamento',
    path: '/agendamento',
  },
  {
    component: AppointmentView,
    name: 'Lista de agendamentos',
    path: '/lista',
  },
  {
    component: Home,
    name: 'Home',
    path: '/',
  },
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
