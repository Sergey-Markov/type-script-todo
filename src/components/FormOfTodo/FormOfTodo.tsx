import * as React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";

import s from "./FormOfTodo.module.css";

interface MyFormValues {
  firstName: string;
  surname: string;
}

export const FormOfTodo: React.FC<{}> = () => {
  const initialValues: MyFormValues = { firstName: "", surname: "" };

  const submitHandler = (values: MyFormValues, actions: any) => {
    console.log({ values, actions });
    actions.setSubmitting(true);
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
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
