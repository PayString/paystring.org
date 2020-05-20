import classnames from 'classnames'
import { Link } from 'gatsby'
import React, { ButtonHTMLAttributes } from 'react'

export enum ButtonTheme {
  orange,
  outlineOrange,
  purple,
  outlinePurple,
}

export enum Size {
  small,
  medium,
  large,
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  theme: ButtonTheme
  size?: Size
  to?: string
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { label, ...buttonProps } = props

  const buttonClass = classnames(
    props.className,
    'flex items-center justify-center text-sm font-bold text-gray-100 focus:outline-none',
    {
      'bg-gradient-r-orange': props.theme === ButtonTheme.orange,
      'bg-gradient-r-purple': props.theme === ButtonTheme.purple,
      'px-8 py-6': props.size === Size.large,
      'px-6 py-3': !props.size || props.size === Size.medium,
      'px-4 py-2': props.size === Size.small,
    },
  )

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
