import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";

import s from "./FormOfTodo.module.css";
import { Todo } from "../../interfaces";

type AppProps = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const initialValues: Todo = { firstName: "", surName: "" };

export const FormOfTodo = ({ setTodos }: AppProps) => {
  const submitHandler = (values: Todo, actions: FormikHelpers<Todo>) => {
    if (values.firstName.trim() || values.surName.trim()) {
      console.log(values);
      setTodos((prev) => [...prev, { ...values, key: Math.random() }]);
    }
    actions.setSubmitting(true);
    actions.resetForm();
  };

  return (
    <div className={s.container}>
      <h1>TypeScript-TodoList</h1>
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        <Form className={s.formBox}>
          <label htmlFor="firstName" className={s.label}>
            First Name
          </label>
          <Field
            id="firstName"
            name="firstName"
            placeholder="First Name"
            className={s.formField}
            autoFocus={true}
          />
          <label htmlFor="surName" className={s.label}>
            Surname
          </label>
          <Field
            id="surName"
            name="surName"
            placeholder="Surname"
            className={s.formField}
          />
          <button type="submit" className={s.submitBtn}>
            Add
          </button>
        </Form>
      </Formik>
    </div>
  );
};
