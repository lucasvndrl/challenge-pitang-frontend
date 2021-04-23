import * as Yup from 'yup';
import { validateMinAndMaxTime } from './functions';

export const schedulingFormSchema = Yup.object({
  name: Yup.string()
    .min(3)
    .required('Required!')
    .matches(/^[A-Za-zà-úÀ-Ú ]+$/, 'Nome deve conter apenas letras'),
  birthday: Yup.date().required('Required!').nullable(),
  selectedDate: Yup.date()
    .test('selectedDate', 'Horário inválido!', () => validateMinAndMaxTime)
    .required('Required!')
    .nullable(),
});
