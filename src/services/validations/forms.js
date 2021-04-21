import * as Yup from 'yup';
import { validateMinAndMaxTime } from './functions';

export const schedulingFormSchema = Yup.object({
  name: Yup.string().required('Required!'),
  birthday: Yup.date().required('Required!').nullable(),
  selectedDate: Yup.date()
    .test('selectedDate', 'Horário inválido!', () => validateMinAndMaxTime)
    .required('Required!')
    .nullable(),
});
