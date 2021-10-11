import { ErrorMessage, Field } from 'formik'
import React from 'react'
import ErrorComponent from '../ErrorComponent'
import { SharedErrorProps, SharedFieldProps, SharedLabelProps } from '../types'

export type PasswordInputProps = SharedFieldProps & SharedLabelProps & SharedErrorProps

const PasswordInput = (props: PasswordInputProps) => {
  const {
    name,
    label,
    id,
    required = false,
    fieldClassname = '',
    labelClassname = '',
    errorClassname = '',
  } = props
  return (
    <>
      <label htmlFor={id ?? name} className={labelClassname}>
        {label} {required && '*'}
      </label>
      <Field
        type="password"
        id={id ?? name}
        name={name}
        className={fieldClassname}
        required={required}
      />
      <ErrorMessage
        name={name}
        render={(message) => <ErrorComponent className={errorClassname} message={message} />}
      />
    </>
  )
}

export default PasswordInput
