import React from 'react'

const ErrorComponent = (props: any) => {
  const { children, message, ...rest } = props
  if (children) {
    return <div {...rest}>{children}</div>
  } else {
    return <div {...rest}>{message}</div>
  }
}

export default ErrorComponent
