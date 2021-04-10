import * as Yup from 'yup';

export const schedulingFormSchema = Yup.object({
  name: Yup.string().required('Required!'),
  birthday: Yup.date().required('Required!').nullable(),
  selectedDate: Yup.date().required('Required!').nullable()
});
