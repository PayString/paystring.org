import classnames from 'classnames'
import { Link } from 'gatsby'
import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  theme?: 'orange' | 'purple' | 'green' | 'blue'
  size?: 'lg' | 'md' | 'sm' | 'xs'
  variant?: 'primary' | 'secondary' | 'ghost'
  to?: string
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    label,
    theme = 'orange',
    size = 'md',
    variant = 'primary',
    to,
    ...buttonProps
  } = props

  const buttonClass = classnames(
    props.className, // Class Overrides
    'flex items-center justify-center font-bold focus:outline-none rounded', // Classes for all Buttons
    {
      [`text-white bg-gradient-br-${theme}`]:
        variant === 'primary' && !props.disabled,
      'text-white bg-gray-200': variant === 'primary' && props.disabled,
      'bg-white': variant !== 'primary',
      [`text-${theme}-500 hover:bg-${theme}-50 focus:bg-${theme}-50`]:
        variant !== 'primary' && !props.disabled,
      'text-gray-200': variant !== 'primary' && props.disabled,
      'cursor-not-allowed': props.disabled,
      'border border-transparent': variant !== 'secondary',
      [`border border-${theme}-500`]:
        variant === 'secondary' && !props.disabled,
      'border border-gray-200': variant === 'secondary' && props.disabled,
      'text-base px-8 py-4 leading-tightest h-12.5': size === 'lg',
      'text-sm px-6 py-3 leading-tighter h-10': size === 'md',
      'text-sm px-6 py-2 leading-tighter h-8': size === 'sm',
      'text-xs px-4 py-1 leading-snug h-6': size === 'xs',
    },
  )

  if (props.to && !props.disabled) {
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
