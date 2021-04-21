import AppointmentList from '../../components/AppointmentList';
import Page from '../../components/Page';

function AppointmentView() {
  return (
    <div>
      <Page title='Lista de agendamentos'>
        <AppointmentList />
      </Page>
    </div>
  );
}

export default AppointmentView;
