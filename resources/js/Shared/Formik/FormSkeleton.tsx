import { Form, Formik, FormikConfig, FormikHelpers, FormikValues } from 'formik'
// import { iteratorSymbol } from 'immer/dist/internal'
import React, { PropsWithChildren } from 'react'

interface FormikSkeletonProps<T = FormikValues> extends FormikConfig<T> {
  initialValues: T
  onSubmit: (values: T, meta?: FormikHelpers<T>) => void
  validationSchema?: any
  formErrors?: {
    [key in keyof T]?: string[]
  }
}

const FormSkeleton = <T,>(props: PropsWithChildren<FormikSkeletonProps<T>>) => {
  const { initialValues, onSubmit, validationSchema, children, formErrors, ...rest } = props
  const handleErrorUpdates = (errors, formErrors, setErrors) => {
    // errors is formik errors object
    // formErrors is back-end validation errors object of type {[key: string]: string[]}
    // setErrors is a formik helper function
    // This will compare current errors with adonis errors, update changed, not do anything on unchanged
    errors = errors ?? {}
    formErrors = formErrors ?? {}
    let formErrorsKeys = Object.keys(formErrors)
    let errorsKeys = Object.keys(errors)
    if (formErrorsKeys.length === 0 && errorsKeys.length > 0) {
      setErrors({})
      return
    }
    // remove keys that have unchanged value
    const keysOfNewErrors = formErrorsKeys
    // determine whether to update the errors
    // create the new errors object
    let changed = false
    if (keysOfNewErrors.length !== 0) {
      const newErrorsArray = keysOfNewErrors.map((key) => {
        changed = errors[key] !== formErrors[key][0]
        return {
          key,
          value: formErrors[key][0],
        }
      })
      if (changed) {
        const newErrors = newErrorsArray.reduce(
          (obj, item) => ({ ...obj, [item.key]: item.value }),
          {}
        )
        setErrors(newErrors)
      }
    }
  }
  return (
    <Formik
      {...rest}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(props) => {
        const { errors, setErrors } = props
        // if validation schema exists it will be used as the validation
        if (!validationSchema) {
          handleErrorUpdates(errors, formErrors, setErrors)
        }
        return <Form>{children}</Form>
      }}
    </Formik>
  )
}

export default FormSkeleton
