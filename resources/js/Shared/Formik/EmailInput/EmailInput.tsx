import { ErrorMessage, Field } from 'formik'
import React from 'react'
import ErrorComponent from '../ErrorComponent'
import { SharedErrorProps, SharedFieldProps, SharedLabelProps } from '../types'

export type EmailInputProps = SharedFieldProps & SharedLabelProps & SharedErrorProps

const EmailInput = (props: EmailInputProps) => {
  const {
    name,
    label,
    id,
    fieldClassname = '',
    required = false,
    labelClassname = '',
    errorClassname = '',
  } = props
  return (
    <>
      <label htmlFor={id ?? name} className={labelClassname}>
        {label} {required && '*'}
      </label>
      <Field
        type="email"
        id={id ?? name}
        name={name}
        className={fieldClassname}
        required={required}
      />
      <ErrorMessage
        render={(message) => <ErrorComponent className={errorClassname} message={message} />}
        name={name}
      />
    </>
  )
}

export default EmailInput
