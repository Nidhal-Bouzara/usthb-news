import { Form, Formik, FormikHelpers, FormikValues } from 'formik'
import React, { PropsWithChildren } from 'react'

interface FormikSkeletonProps<T = FormikValues> {
  initialValues: T
  onSubmit: (values: T, meta?: FormikHelpers<T>) => void
  validationSchema?: any
}

const FormSkeleton = <T,>(props: PropsWithChildren<FormikSkeletonProps<T>>) => {
  const { initialValues, onSubmit, validationSchema, children } = props
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form>{children}</Form>
    </Formik>
  )
}

export default FormSkeleton
