import React from "react";
import FormikInput from "../../components/form/FormikInput";
import AppForm from "../../components/form/AppForm";
import * as Yup from "yup";
import { Form, validateYupSchema } from "formik";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required")
    .lowercase()
    .trim(),

  password: Yup.string().required("Password is required").trim(),
});

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const handelSubmit = async (values) => {
    console.log(values);
  };

  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handelSubmit}
    >
      <Form>
        <FormikInput
          name={"email"}
          placeholder={"Enter your email"}
          icon={"mail"}
          label={"Email"}
        />
        <FormikInput
          name={"password"}
          placeholder={"Enter your password"}
          icon={"lock"}
          type={"password"}
          label={"Password"}
        />
      </Form>
    </AppForm>
  );
}
