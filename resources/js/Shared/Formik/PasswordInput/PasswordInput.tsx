import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { SharedFieldProps, SharedLabelProps } from '../types'

export type PasswordInputProps = SharedFieldProps & SharedLabelProps

const PasswordInput = (props: PasswordInputProps) => {
  const { name, label, id, required = false, fieldClassname = '', labelClassname = '' } = props
  console.log(required)

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
      <ErrorMessage name={name} />
    </>
  )
}

export default PasswordInput
