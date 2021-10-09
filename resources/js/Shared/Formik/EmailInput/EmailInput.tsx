import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { SharedFieldProps, SharedLabelProps } from '../types'

export type EmailInputProps = SharedFieldProps & SharedLabelProps

const EmailInput = (props: EmailInputProps) => {
  const { name, label, id, fieldClassname = '', required = false, labelClassname = '' } = props
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
      <ErrorMessage name={name} />
    </>
  )
}

export default EmailInput
