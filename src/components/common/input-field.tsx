import classNames from 'classnames'
import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  ChangeEvent,
} from 'react'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  invalidText?: string
  requiredText?: string
  theme?: 'orange' | 'blue'
  validate?: (e: string | undefined) => boolean
  id: string
}

const InputField: React.FC<InputFieldProps> = (props: InputFieldProps) => {
  const {
    label,
    invalidText,
    requiredText,
    validate,
    theme = 'blue',
    className,
    onChange,
    ...inputProps
  } = props

  const inputRef = useRef<HTMLInputElement>(null)
  const [isRaised, setIsRaised] = useState<boolean>(false)
  const [error, setError] = useState<string | boolean>()

  const shouldRaise = (): void => {
    if (!inputRef.current) {
      setIsRaised(false)
    } else if (inputRef.current.value.length > 0) {
      setIsRaised(true)
    } else if (
      document.activeElement &&
      document.activeElement.id === inputRef.current.id
    ) {
      setIsRaised(true)
    } else {
      setIsRaised(false)
    }
  }

  const localOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    // Always propagate onChange
    if (onChange) onChange(event)

    // Check if we need to raise the label
    shouldRaise()

    // Check if we need to set and error for required fields
    if (props.required && event.currentTarget.value.length === 0) {
      if (props.requiredText) {
        setError(props.requiredText)
        return
      }
      setError(true)
      return
    }

    // Check if this is a valid input
    if (props.validate) {
      if (!props.validate(event.currentTarget.value)) {
        if (props.invalidText) {
          setError(props.invalidText)
          return
        }
        setError(true)
        return
      }
    }

    setError(false)
  }

  const hasErrors = !!(typeof error !== 'undefined' && error)

  return (
    <div className={classNames(className, 'relative w-full mb-6')}>
      <input
        onChange={localOnChange}
        onFocus={shouldRaise}
        onBlur={shouldRaise}
        ref={inputRef}
        {...inputProps}
        className={classNames(
          'w-full px-6 py-4 placeholder-white bg-transparent rounded border-2 appearance-none focus:outline-none',
          {
            'border-green-600': isRaised && !hasErrors && theme === 'blue',
            'border-white': (!isRaised && !hasErrors) || theme === 'orange',
            'border-orange-600': hasErrors && theme === 'blue',
          },
        )}
      />
      <label
        htmlFor={props.id}
        className={classNames(
          'absolute z-10 transition-all duration-300 ease-linear pointer-events-none left-4 px-2',
          {
            'top-4': !isRaised && !hasErrors,
            '-top-3': isRaised || hasErrors,
            'text-green-600': isRaised && !hasErrors && theme === 'blue',
            'text-orange-600': hasErrors && theme === 'blue',
            'text-white': theme === 'orange' || (!isRaised && !hasErrors),
            'bg-blue-dark-900': theme === 'blue',
            'bg-orange-500': theme === 'orange',
          },
        )}
      >
        {props.label ?? props.name}{' '}
      </label>
      {typeof error === 'string' && (
        <div
          className={classNames('flex pt-1 text-sm', {
            'text-orange-600': theme === 'blue',
            'text-white': theme === 'orange',
          })}
        >
          <div>{error}</div>
        </div>
      )}
    </div>
  )
}
export default InputField
