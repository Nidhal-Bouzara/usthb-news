import React from 'react'
import EmailInput, { EmailInputProps } from './EmailInput/EmailInput'
import PasswordInput, { PasswordInputProps } from './PasswordInput/PasswordInput'

interface FormControlProps extends EmailInputProps, PasswordInputProps {
  control: 'email' | 'password'
}

const FormControl = ({ control, ...rest }: FormControlProps) => {
  switch (control) {
    case 'email':
      return <EmailInput {...rest} />
    case 'password':
      return <PasswordInput {...rest} />
  }
}

export default FormControl
