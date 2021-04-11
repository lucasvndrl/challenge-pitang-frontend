import { ErrorMessage, Field } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateInput(props) {
  const { label, name, ...rest } = props;

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <div className="form-control">
      <label htmlFor={name}> {label} </label>
      <Field name={name}>
        {({ form, field }) => {
          const { value } = field;
          const { setFieldValue } = form;
          return (
            <DatePicker
              id={name}
              {...field}
              {...rest}
              filterTime={filterPassedTime}
              dateFormat={
                rest.showTimeSelect ? "dd/MM/yyyy, HH:mm" : "dd/MM/yyyy"
              }
              selected={value}
              onChange={(newValue) => setFieldValue(name, newValue)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component="div" />
    </div>
  );
}

export default DateInput;
