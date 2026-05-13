import { ErrorMessage, Field } from "formik";
import React from "react";
import { DynamicIcon } from "lucide-react/dynamic";

export default function FormikInput({ label, name, placeholder, icon, type }) {
  return (
    <div className="inputGroup">
      {label && (
        <label className="label" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="inputField">
        {icon && <DynamicIcon name={icon} size={25} className="inputIcon" />}
        <Field
          placeholder={placeholder}
          name={name}
          type={type ?? "text"}
          className={"input"}
        />
      </div>
      <ErrorMessage name={name} className="error" component={"p"} />
    </div>
  );
}
