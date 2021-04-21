import Page from '../../components/Page';
import AppointmentForm from '../../components/forms/AppointmentForm';

function CreateAppointmentPage() {
  return (
    <div>
      <Page title='Preencha o formulário abaixo para agendar: '>
        <AppointmentForm />
      </Page>
    </div>
  );
}

export default CreateAppointmentPage;
