import React from 'react'
import FormControl from '../../../../Shared/Formik/FormControl'
import FormSkeleton from '../../../../Shared/Formik/FormSkeleton'
// import * as yup from 'yup'
import { Inertia, RequestPayload } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'

interface LoginCredentials {
  email: string
  password: string
}

const LoginForm = () => {
  const { errors } = usePage().props

  const handleSubmit = (values: LoginCredentials) => {
    Inertia.post('/login', values as unknown as RequestPayload)
  }

  return (
    <div>
      <FormSkeleton<LoginCredentials>
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validateOnBlur={false}
        formErrors={errors}
      >
        <div className="input-container">
          <FormControl
            control="email"
            name="email"
            label="Email"
            labelClassname="input-label"
            fieldClassname="input-field"
            errorClassname="input-error"
          />
        </div>
        <div className="input-container">
          <FormControl
            control="password"
            name="password"
            label="Password"
            labelClassname="input-label"
            fieldClassname="input-field"
            errorClassname="input-error"
          />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </FormSkeleton>
    </div>
  )
}

export default LoginForm
