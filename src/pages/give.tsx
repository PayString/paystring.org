import classNames from 'classnames'
import React, { useState, useEffect } from 'react'

import SelectArrow from '../../content/assets/common/selectArrow.svg'
import Button from '../components/common/button'
import InputField from '../components/common/input-field'
import Layout from '../components/layout'

const Contact: React.FC = () => {
  const minHeight = {
    minHeight: 'calc(100vh - 9.25rem)',
  }
  const [validForm, setValidForm] = useState<boolean>(false)
  const [role, setRole] = useState<string>('DEFAULT')
  const [company, setCompany] = useState<string>()
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
      company,
      'first-name': firstName,
      'last-name': lastName !== '' ? lastName : undefined,
      email,
    }

    console.log(formData)

    setSubmitted(true)
  }

  return (
    <Layout
      path="contact"
      title="Contact the PayID Team"
      description="Have a question about PayID? Contact us and we will help you find the information you are looking for."
    >
      <div
        className="text-white bg-blue-dark-900 faq-bg xl:bg-cover"
        style={minHeight}
      >
        <div className="flex justify-center px-6 lg:px-18">
          <div className="container lg:px-17 lg:mt-0 mt-18">
            <div className="max-w-4xl pt-16 lg:pt-70">
              <h1 className="text-3xl font-bold sm:text-h1 sm:leading-tighter">
                Give to charities
              </h1>
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

                <div className="mb-6">
                  <div className="mb-2">
                    Do you plan to implement PayID within the next 6 months?
                  </div>
                  <label>
                    <input
                      type="radio"
                      value="true"
                      defaultChecked
                      name="implementSoon"
                    />{' '}
                    Yes
                  </label>
                  <label className="ml-4">
                    <input type="radio" value="false" name="implementSoon" /> No
                  </label>
                </div>

                <div className="mb-6">
                  <label>
                    <input name="notify" type="checkbox" /> Notify me about
                    future developer events. (e.g. Hackathons, panels)
                  </label>
                </div>

                <Button
                  disabled={!validForm}
                  label="Submit"
                  className="mt-8 sm:hidden"
                />
                <Button
                  disabled={!validForm}
                  label="Submit"
                  size="lg"
                  className="hidden mx-auto mt-16 sm:block"
                />
              </form>
            )}
            {submitted && (
              <div className="w-full mx-auto my-20 text-center md:my-40 md:max-w-lg">
                <h2 className="text-2xl font-bold sm:text-4xl">Thank you!</h2>
                <h3 className="mt-4 text-2xl font-bold">
                  We will reach out shortly
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
