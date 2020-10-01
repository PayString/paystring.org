import classnames from 'classnames'
import { ClassValue } from 'classnames/types'
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

  const classes: ClassValue[] = [
    props.className,
    'inline-block font-bold focus:outline-none rounded whitespace-no-wrap text-center',
  ]

  // Disables the cursor for disabled buttons
  if (props.disabled) classes.push('cursor-not-allowed')

  if (variant === 'primary') {
    // Text is always white for primary buttons
    classes.push('text-white')

    // Set Background Gradients when the button is not disabled
    if (!props.disabled) {
      classes.push({
        'bg-gradient-r-orange hover:bg-gradient-r-orange-dark focus:bg-gradient-r-orange-dark':
          theme === 'orange',
        'bg-gradient-r-purple hover:bg-gradient-r-purple-dark focus:bg-gradient-r-purple-dark':
          theme === 'purple',
        'bg-gradient-r-green hover:bg-gradient-r-green-dark focus:bg-gradient-r-green-dark':
          theme === 'green',
        'bg-gradient-r-blue hover:bg-gradient-r-blue-dark focus:bg-gradient-r-blue-dark':
          theme === 'blue',
      })
    } else {
      // When disabled background is gray-200
      classes.push('bg-gray-200')
    }
  } else if (props.disabled) {
    // Text color is gray 200 when not on primary and the button is disabled
    classes.push('text-gray-200')
  } else {
    // Sets the text colors for each theme when not disabled and not the primary variant
    classes.push({
      'text-orange-500 hover:bg-orange-50 focus:bg-orange-50':
        theme === 'orange',
      'text-purple-500 hover:bg-purple-50 focus:bg-purple-50':
        theme === 'purple',
      'text-green-500 hover:bg-green-50 focus:bg-green-50': theme === 'green',
      'text-blue-500 hover:bg-blue-50 focus:bg-blue-50': theme === 'blue',
    })
  }

  if (variant === 'secondary') {
    // Add border for secondary variant
    classes.push('border')

    // If disabled secondary border is gray
    if (props.disabled) {
      classes.push('border-gray-200')
    } else {
      // When not disabled set secondary border color to the theme color
      classes.push({
        'border-orange-500': theme === 'orange',
        'border-purple-500': theme === 'purple',
        'border-green-500': theme === 'green',
        'border-blue-500': theme === 'blue',
      })
    }
  }

  if (variant === 'ghost') {
    // Ghost button variants use a background of white
    classes.push('bg-white')
  }

  // Adds styles for the large size of buttons
  if (size === 'lg') classes.push('text-base px-8 py-4 leading-tightest h-12-5')

  // Adds styles for the medium size of buttons
  if (size === 'md') classes.push('text-sm px-6 py-3 leading-tighter h-10')

  // Adds styles for the small size of buttons
  if (size === 'sm') classes.push('text-sm px-6 py-2 leading-tighter h-8')

  // Adds styles for the extra small size of buttons
  if (size === 'xs') classes.push('text-xs px-4 py-1 leading-snug h-6')

  if (props.to && !props.disabled) {
    if (props.to.startsWith('http')) {
      return (
        <a
          href={props.to}
          role={buttonProps.role}
          className={classnames(classes)}
        >
          {label}
        </a>
      )
    }
    return (
      <Link
        to={props.to}
        role={buttonProps.role}
        className={classnames(classes)}
      >
        {label}
      </Link>
    )
  }

  return (
    <button {...buttonProps} className={classnames(classes)}>
      {label}
    </button>
  )
}

export default Button
