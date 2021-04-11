/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DateInput from '../../input/DateInput';
import { schedulingFormSchema } from '../../../services/validations/forms';

const initialValues = {
  name: '',
  birthday: null,
  selectedDate: null,
};

const onSubmit = (values) => {
  console.log('Form data', values);
};

const AppointmentForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={schedulingFormSchema}
    onSubmit={onSubmit}
  >
    {(formik) => (
      <Form className='form'>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <Field type='text' id='name' name='name' />
          <ErrorMessage name='name' />
        </div>

        <DateInput name='birthday' label='Data de Nascimento' />

        <DateInput
          name='selectedDate'
          label='Data para Vacinação'
          showTimeSelect
        />

        <button type='submit' disabled={!formik.dirty && formik.isValid}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
);

export default AppointmentForm;
