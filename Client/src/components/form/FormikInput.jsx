import { ErrorMessage, Field, useField } from "formik";
import React from "react";
import { DynamicIcon } from "lucide-react/dynamic";

export default function FormikInput({ label, name, placeholder, icon, type }) {
  const [field, meta] = useField(name);
  const hasErr = meta.error && meta.touched;
  return (
    <div className="inputGroup">
      {label && (
        <label className="label" htmlFor={name}>
          {label}
        </label>
      )}
      <div className={`inputField  ${hasErr && "inputErr"}`}>
        {icon && <DynamicIcon name={icon} size={22} className="inputIcon" />}
        <Field
          placeholder={placeholder}
          name={name}
          type={type ?? "text"}
          className={`input`}
        />
      </div>
      <ErrorMessage name={name} className="error" component={"p"} />
    </div>
  );
}
