import React from 'react'
import './Button.css'

type props={
    variant: 'primary' | 'secondary',
    children:React.ReactNode,
}

function Button (props:props) {
  const { variant = 'primary', children, ...rest } = props
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  )
}

export default Button