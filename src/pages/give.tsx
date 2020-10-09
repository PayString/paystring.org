import classNames from 'classnames'
import React, { useState, useEffect } from 'react'

import SelectArrow from '../assets/common/selectArrow.svg'
import Button from '../components/common/button'
import InputField from '../components/common/input-field'
import Layout from '../components/layout'
import { getCharityAppURL } from '../utils/config'
import { formSubmitted } from '../utils/typewritter'

const Contact: React.FC = () => {
  const minHeight = {
    minHeight: 'calc(100vh - 9.25rem)',
  }
  const [pendingSubmit, setPendingSubmit] = useState<boolean>(false)
  const [validForm, setValidForm] = useState<boolean>(false)
  const [role, setRole] = useState<string>('DEFAULT')
  const [company, setCompany] = useState<string>()
  const [firstName, setFirstName] = useState<string>()
  const [lastName, setLastName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [implementing, setImplementing] = useState<string>('undecided')
  const [notify, setNotify] = useState<boolean>(true)
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

  useEffect(() => {
    if (
      role &&
      role !== 'DEFAULT' &&
      firstName &&
      firstName.length > 0 &&
      company &&
      company.length > 0 &&
      email &&
      isValidEmail(email)
    ) {
      setValidForm(true)
    } else {
      setValidForm(false)
    }
  }, [role, firstName, company, email])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (!validForm || !email) return

    setPendingSubmit(true)

    const formData = {
      role,
      first_name: firstName,
      last_name: lastName !== '' ? lastName : undefined,
      email,
      company,
      implementing_payid: implementing,
      notify_future_developer_events: notify ? 'yes' : 'no',
    }

    formSubmitted({ ...formData, form_name: 'charity' })
    window.analytics.identify({
      role: formData.role,
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      company: formData.company,
    })

    setSubmitted(true)
    setPendingSubmit(false)

    if (typeof window !== 'undefined') window.location.href = getCharityAppURL()
  }

  return (
    <Layout
      path="give"
      title="Charity Giving"
      description="Give to charities using PayID"
    >
      <div
        className="text-white bg-blue-dark-900 faq-bg xl:bg-cover"
        style={minHeight}
      >
        <div className="flex justify-center px-6 lg:px-18">
          <div className="container lg:px-17 lg:mt-0 mt-18">
            <div className="max-w-4xl pt-16 lg:pt-70">
              <h1 className="text-3xl font-bold sm:mb-10 mb-7 sm:text-h1 sm:leading-tighter">
                Give to charities through PayID
              </h1>
              <div className="mb-13 sm:text-2xl">
                Fill in your information to get funds to donate to a choice of
                charities.
              </div>
            </div>

            {!submitted && (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-16 mb-20 md:mt-30 md:mb-40 md:max-w-md"
              >
                <div
                  className={classNames('relative px-6 mb-6 border-2 rounded', {
                    'border-green-600': role !== 'DEFAULT',
                    'border-white': role === 'DEFAULT',
                  })}
                >
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
                      'absolute z-10 transition-all duration-300 ease-linear pointer-events-none left-4 bg-blue-dark-900 px-2 rounded',
                      {
                        '-top-3 text-green-600': role !== 'DEFAULT',
                        'top-4 text-white': role === 'DEFAULT',
                      },
                    )}
                  >
                    Role
                  </label>
                </div>
                <InputField
                  id="company"
                  label="Company"
                  type="text"
                  name="company"
                  required
                  autoComplete="organization"
                  requiredText="Company is required"
                  onChange={(e): void => setCompany(e.currentTarget.value)}
                />
                <div className="flex">
                  <InputField
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
                    id="lastName"
                    label="Last Name"
                    type="text"
                    name="last-name"
                    autoComplete="family-name"
                    className="ml-3"
                    onChange={(e): void => setLastName(e.currentTarget.value)}
                  />
                </div>
                <InputField
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

                <div className="mb-6 text-sm">
                  <div className="mb-2">
                    Do you plan to implement PayID within the next 6 months?
                  </div>
                  <div className="flex items-center">
                    <input
                      id="implementing"
                      type="radio"
                      value="yes"
                      name="implementSoon"
                      className="transition duration-150 ease-in-out form-radio"
                      onChange={(e): void =>
                        setImplementing(e.currentTarget.value)
                      }
                    />
                    <label htmlFor="implementing" className="pl-2">
                      Yes
                    </label>
                    <input
                      id="notImplementing"
                      type="radio"
                      value="no"
                      name="implementSoon"
                      className="ml-3 transition duration-150 ease-in-out form-radio"
                      onChange={(e): void =>
                        setImplementing(e.currentTarget.value)
                      }
                    />
                    <label htmlFor="notImplementing" className="pl-2">
                      No
                    </label>
                    <input
                      id="notSureImplementing"
                      type="radio"
                      value="undecided"
                      name="implementSoon"
                      className="ml-3 transition duration-150 ease-in-out form-radio"
                      defaultChecked
                      onChange={(e): void =>
                        setImplementing(e.currentTarget.value)
                      }
                    />
                    <label htmlFor="notSureImplementing" className="pl-2">
                      Undecided
                    </label>
                  </div>
                </div>

                <div className="mb-6 text-sm">
                  <div className="flex items-center">
                    <input
                      id="notify"
                      type="checkbox"
                      defaultChecked
                      className="transition duration-150 ease-in-out form-checkbox"
                      onChange={(e): void => {
                        setNotify(e.currentTarget.checked)
                      }}
                    />
                    <label htmlFor="notify" className="pl-2">
                      Notify me about future developer events. (e.g. Hackathons,
                      panels)
                    </label>
                  </div>
                </div>

                <Button
                  disabled={!validForm || pendingSubmit}
                  label={pendingSubmit ? 'Submiting...' : 'Go to Charity App'}
                  className="mt-8 sm:hidden"
                />
                <Button
                  disabled={!validForm || pendingSubmit}
                  label={pendingSubmit ? 'Submiting...' : 'Go to Charity App'}
                  size="lg"
                  className="hidden mx-auto mt-16 sm:block"
                />
              </form>
            )}
            {submitted && (
              <div className="w-full mx-auto my-20 text-center md:my-40 md:max-w-lg">
                <h2 className="text-2xl font-bold sm:text-4xl">Thank you!</h2>
                <a
                  href={getCharityAppURL()}
                  className="text-orange-500 focus:underline hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Access the charity application
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
