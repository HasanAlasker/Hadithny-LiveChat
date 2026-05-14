import React, { useState } from "react";
import FormikInput from "../../components/form/FormikInput";
import AppForm from "../../components/form/AppForm";
import * as Yup from "yup";
import { Form, validateYupSchema } from "formik";
import Screen from "../../components/Screen";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required")
    .lowercase()
    .trim(),

  password: Yup.string().required("Password is required").trim(),
});

export default function Login() {
  const { login, loading, error } = useAuthStore();
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  const handelSubmit = async (values) => {
    const res = await login(values);

    if (!res.ok) {
      setErr(res.error);
    }
    if (res.ok) navigate("/");

    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen>
      <AppForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handelSubmit}
      >
        <Form>
          <h2 className="main center">We missed you!</h2>
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
          <button type="submit" className="priBtn">
            Login
          </button>
          {err && <p className="error">{err}</p>}
          <hr />
          <span className="center">
            Don't have an account?{" "}
            <a className="priLink" href="/register">
              Create one
            </a>
          </span>
        </Form>
      </AppForm>
    </Screen>
  );
}
