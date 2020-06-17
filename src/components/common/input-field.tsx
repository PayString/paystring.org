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
  validate?: (e: string | undefined) => boolean
  id: string
}

const InputField: React.FC<InputFieldProps> = (props: InputFieldProps) => {
  const {
    label,
    invalidText,
    requiredText,
    validate,
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

  const hasErrors = typeof error !== 'undefined' && error

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
            'border-green-600': isRaised && !hasErrors,
            'border-white': !isRaised && !hasErrors,
            'border-orange-600': hasErrors,
          },
        )}
      />
      <label
        htmlFor={props.id}
        className={classNames(
          'absolute z-50 transition-all duration-300 ease-linear pointer-events-none left-4 bg-blue-dark-900 px-2',
          {
            'top-4 text-white': !isRaised && !hasErrors,
            '-top-3 text-green-600': isRaised && !hasErrors,
            '-top-3 text-orange-600': hasErrors,
          },
        )}
      >
        {props.label ?? props.name}{' '}
      </label>
      {typeof error === 'string' && (
        <div className="flex pt-1 text-sm text-orange-600">
          <div>{error}</div>
        </div>
      )}
    </div>
  )
}
export default InputField
