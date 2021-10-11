import React, { HTMLAttributes, PropsWithChildren } from 'react'

interface ErrorComponentProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  message?: string
}

const ErrorComponent = (props: ErrorComponentProps) => {
  const { children, message, ...rest } = props
  if (children) {
    return <div {...rest}>{children}</div>
  } else {
    return <div {...rest}>{message}</div>
  }
}

export default ErrorComponent
