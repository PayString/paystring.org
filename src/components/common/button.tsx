import { Link } from 'gatsby'
import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  to?: string
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { label, ...buttonProps } = props
  const buttonClass =
    'flex items-center justify-center px-10 py-3 text-sm font-bold text-gray-100 bg-orange-1-500 focus:outline-none focus:bg-orange-1-600 hover:bg-orange-1-600'

  if (props.to) {
    return (
      <Link to={props.to} className={buttonClass}>
        <span className="flex-shrink-0">{label}</span>
      </Link>
    )
  }

  return (
    <button {...buttonProps} className={buttonClass}>
      <span className="flex-shrink-0">{label}</span>
    </button>
  )
}

export default Button
