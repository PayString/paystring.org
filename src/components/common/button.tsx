import classnames from 'classnames'
import { Link } from 'gatsby'
import React, { ButtonHTMLAttributes } from 'react'

export enum ButtonTheme {
  orange,
  outlineOrange,
  purple,
  outlinePurple,
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  theme: ButtonTheme
  to?: string
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { label, ...buttonProps } = props
  const buttonClass =
    'flex items-center justify-center px-10 py-3 text-sm font-bold text-gray-100 focus:outline-none'

  if (props.to) {
    return (
      <Link
        to={props.to}
        className={classnames(buttonClass, props.className, {
          'bg-gradient-r-orange': props.theme === ButtonTheme.orange,
          'bg-gradient-r-purple': props.theme === ButtonTheme.purple,
        })}
      >
        <span className="flex-shrink-0">{label}</span>
      </Link>
    )
  }

  return (
    <button
      {...buttonProps}
      className={classnames(buttonClass, props.className, {
        'bg-gradient-r-orange': props.theme === ButtonTheme.orange,
        'bg-gradient-r-purple': props.theme === ButtonTheme.purple,
      })}
    >
      <span className="flex-shrink-0">{label}</span>
    </button>
  )
}

export default Button
