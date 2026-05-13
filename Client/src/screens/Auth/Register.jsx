import React from "react";
import FormikInput from "../../components/form/FormikInput";
import AppForm from "../../components/form/AppForm";
import * as Yup from "yup";
import { Form, validateYupSchema } from "formik";
import Screen from "../../components/Screen";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .trim()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .max(128, "Password must not exceed 128 characters")
    .matches(
      /^(?=.*[a-z])/,
      "Password must contain at least one lowercase letter",
    )
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter",
    )
    .matches(/^(?=.*\d)/, "Password must contain at least one number")
    .matches(
      /^(?=.*[@$!%*?&])/,
      "Password must contain at least one special character (@$!%*?&)",
    )
    .matches(/^[A-Za-z\d@$!%*?&]+$/, "Password contains invalid characters")
    .test(
      "no-common-patterns",
      "Password cannot contain common patterns",
      function (value) {
        if (!value) return true;
        const weakPatterns = [
          /(.)\1{2,}/,
          /123|234|345|456|567|678|789|890/,
          /abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz/i,
          /qwer|asdf|zxcv|1234|admin|pass/i,
        ];
        return !weakPatterns.some((pattern) => pattern.test(value));
      },
    ),

  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords must match"),

  name: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters long")
    .max(25, "Name must not exceed 25 characters")
    .matches(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, hyphens, and apostrophes",
    )
    .required("Name is required"),
});

export default function Register() {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  };
  const handelSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Screen>
      <AppForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handelSubmit}
      >
        <Form>
          <h2 className="main center">Let's get you started!</h2>
          <FormikInput
            name={"name"}
            placeholder={"Enter your name"}
            icon={"user"}
            label={"Name"}
          />
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
          <FormikInput
            name={"confirmPassword"}
            placeholder={"Enter your password again"}
            icon={"lock"}
            type={"password"}
            label={"Confirm Password"}
          />
          <button type="submit" className="priBtn">
            Create Account
          </button>
          <hr />
          <span className="center">
            Already have an account?{" "}
            <a className="priLink" href="/login">
              Login
            </a>
          </span>
        </Form>
      </AppForm>
    </Screen>
  );
}
