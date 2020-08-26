import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

import SelectArrow from '../../assets/common/selectArrow.svg'
import { encodeFormData } from '../../utils/config'

import Button from './button'
import InputField from './input-field'
import Wave from './wave'

interface CommunityProps {
  direction?: 'ltr' | 'rtl'
}

const Community: React.FC<CommunityProps> = (props) => {
  const [step1, setStep1] = useState<boolean>(false)
  const [validForm, setValidForm] = useState<boolean>(false)
  const [role, setRole] = useState<string>('DEFAULT')
  const [firstName, setFirstName] = useState<string>()
  const [lastName, setLastName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [submitted, setSubmitted] = useState<boolean>(false)

  const roles = [
    {
      label: 'Role',
      value: 'DEFAULT',
    },
    {
      label: 'Project Manager',
      value: 'PM',
    },
    {
      label: 'Developer',
      value: 'Engineer',
    },
    {
      label: 'Business Development',
      value: 'BD',
    },
    {
      label: 'Sales',
      value: 'Sales',
    },
    {
      label: 'Operations',
      value: 'Operations',
    },
    {
      label: 'Executive',
      value: 'Executive',
    },
    {
      label: 'Marketing',
      value: 'Marketing',
    },
  ]

  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const isValidEmail = (val: string | undefined): boolean => {
    return !!(val && emailRegex.test(val))
  }

  const showStep2 = () => {
    if (isValidEmail(email)) {
      setStep1(true)
    }
  }

  useEffect(() => {
    if (
      role &&
      role !== 'DEFAULT' &&
      firstName &&
      firstName.length > 0 &&
      email &&
      isValidEmail(email)
    ) {
      setValidForm(true)
    } else {
      setValidForm(false)
    }
  }, [role, firstName, email])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (!validForm) return

    const formData = {
      role,
      'first-name': firstName,
      'last-name': lastName !== '' ? lastName : undefined,
      email,
    }

    if (typeof window !== 'undefined') {
      if (typeof window.heap !== 'undefined') {
        window.heap.track('newsletter', formData)
      }
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-877332159/jdvuCLLdpdQBEL-NrKID',
        })
        window.gtag('event', 'conversion', {
          send_to: 'AW-616173950/7ehtCOKFvNYBEP6i6KUC',
        })
      }
    }

    const encodedFormData = encodeFormData(formData)

    fetch('https://go.ripple.com/l/105572/2020-06-15/cspx4n', {
      mode: 'no-cors',
      method: 'POST',
      body: encodedFormData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).catch((err) => {
      Sentry.captureException(err)
    })

    fetch(
      `https://script.google.com/macros/s/AKfycbyT7zjGQMQKaSrE9ef1NuvAFGKGUc8cnnUGSFo7V5Q6HWeBx-DL/exec?${encodedFormData}`,
      {
        mode: 'no-cors',
      },
    ).catch(() => {})

    setSubmitted(true)
  }

  return (
    <Wave
      background="orange"
      direction={props.direction}
      wave="blue"
      spacing="lg"
      className="flex items-center justify-center"
    >
      {!submitted && (
        <div className="max-w-xl">
          <div className="text-3xl font-bold text-center sm:text-5xl">
            Join the PayID Community
          </div>
          <div className="mt-8 text-xl text-center">
            Sign up to access the PayID newsletter and hear about hackathons and
            speaker events
          </div>
          <form onSubmit={handleSubmit} className="mt-16 md:mt-30">
            {/* Step 2 */}
            <div
              id="step2"
              className={classNames('transition-all duration-300 ease-linear', {
                hidden: !step1,
              })}
            >
              <div className="flex">
                <InputField
                  theme="orange"
                  id="firstName"
                  label="First Name"
                  type="text"
                  name="first-name"
                  autoComplete="given-name"
                  className="mr-3"
                  required
                  requiredText="First name is required"
                  onChange={(e): void => setFirstName(e.currentTarget.value)}
                />
                <InputField
                  theme="orange"
                  id="lastName"
                  label="Last Name"
                  type="text"
                  name="last-name"
                  autoComplete="family-name"
                  className="ml-3"
                  onChange={(e): void => setLastName(e.currentTarget.value)}
                />
              </div>
              <div className="relative px-6 mb-6 border-2 border-white rounded">
                <select
                  defaultValue="DEFAULT"
                  id="role"
                  name="role"
                  onChange={(event) => setRole(event.target.value)}
                  className="w-full py-4 bg-transparent appearance-none focus:outline-none"
                >
                  {roles.map((r) => (
                    <option
                      className="text-blue-dark-900"
                      value={r.value}
                      key={r.label}
                      hidden={r.value === 'DEFAULT'}
                    >
                      {r.label}
                    </option>
                  ))}
                </select>
                <SelectArrow className="absolute h-2 mt-2 text-white right-4 top-4" />
                <label
                  htmlFor="role"
                  className={classNames(
                    'absolute z-10 transition-all duration-300 ease-linear pointer-events-none text-white left-4 bg-orange-500 px-2',
                    {
                      '-top-3': role !== 'DEFAULT',
                      'top-4': role === 'DEFAULT',
                    },
                  )}
                >
                  Role
                </label>
              </div>
            </div>
            {/* step 1 */}
            <div
              id="step1"
              className={classNames({
                hidden: step1,
              })}
            >
              <InputField
                theme="orange"
                id="email"
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
                required
                requiredText="Email address is required"
                validate={isValidEmail}
                invalidText="Invalid email address"
                onChange={(e): void => {
                  if (isValidEmail(e.currentTarget.value)) {
                    setEmail(e.currentTarget.value)
                  } else {
                    setEmail(undefined)
                  }
                }}
              />
            </div>

            <div
              id="next"
              className={classNames({
                hidden: step1,
              })}
            >
              <Button
                label="Next"
                variant="secondary"
                className="mt-8 bg-white sm:hidden"
                onClick={(): void => showStep2()}
              />
              <Button
                variant="secondary"
                label="Next"
                size="lg"
                className="hidden mx-auto mt-16 bg-white sm:block"
                onClick={(): void => showStep2()}
              />
            </div>

            <div
              id="submit"
              className={classNames({
                hidden: !step1,
              })}
            >
              <Button
                disabled={!validForm}
                label="Submit"
                variant="secondary"
                className="mt-8 bg-white sm:hidden"
              />
              <Button
                disabled={!validForm}
                variant="secondary"
                label="Submit"
                size="lg"
                className="hidden mx-auto mt-16 bg-white sm:block"
              />
            </div>
          </form>
        </div>
      )}
      {submitted && (
        <div className="text-3xl font-bold text-center sm:text-5xl">
          Thank you for subscribing!
        </div>
      )}
    </Wave>
  )
}

export default Community
