import { Formik } from "formik";

function AppForm({
  children,
  initialValues,
  validationSchema,
  onSubmit,
  enableReinitialize,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize={enableReinitialize}
    >
      {(formikProps) => (
        <>{typeof children === "function" ? children(formikProps) : children}</>
      )}
    </Formik>
  );
}

export default AppForm;
