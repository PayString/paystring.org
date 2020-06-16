import classNames from 'classnames'
import React, { useState } from 'react'

import Button from '../../common/button'
import Wave from '../../common/wave'

const Integrate: React.FC = () => {
  const [active, setActive] = useState<number>(0)

  const panels = ['cURL', 'Xpring SDK']

  return (
    <Wave background="white" wave="gray">
      {/* Header */}
      <div className="flex justify-center">
        <div className="flex flex-col self-center max-w-xl text-left md:items-center md:text-center">
          <h2 className="mb-6 text-3xl font-bold md:mb-8 sm:text-5xl">
            Integrate Into Your App in Minutes
          </h2>
          <p className="mb-16 sm:text-xl sm:mb-24">
            Set up on your preferred platform with a few lines of code and
            minimal maintenance.
          </p>
        </div>
      </div>

      {/* Examples */}
      <div className="md:flex">
        <div className="w-full mb-16 md:mb-0 md:mr-20">
          <h3 className="text-2xl font-bold">Receive Money</h3>
          <p className="mt-4">
            Setup a PayID server to provide yours users PayIDs
          </p>
          <div className="mt-10 md:mt-16">
            <p className="font-medium">Clone Repo</p>
          </div>
          <div className="w-full mt-6 rounded bg-blue-dark-800 h-30 md:mt-8" />
          <div className="mt-10 md:mt-16">
            <p className="font-medium">Run Script</p>
          </div>
          <div className="w-full mt-6 rounded bg-blue-dark-800 h-25 md:mt-8" />
          {/* TODO ADD LINK HERE */}
          <Button label="Read More" className="mt-10 md:mt-16" />
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold">Send Money</h3>
          <p className="mt-4">Enable your users to send to PayIDs</p>
          <div className="mt-10 md:mt-16">
            {panels.map((panel, panelIndex) => {
              return (
                <button
                  key={panelIndex}
                  onClick={(): void => setActive(panelIndex)}
                  disabled={active === panelIndex}
                  className={classNames('mr-8 font-medium focus:outline-none', {
                    'border-b-2 border-orange-500': active === panelIndex,
                    'text-gray-500 hover:text-orange-500 focus:text-orange-500':
                      active !== panelIndex,
                  })}
                >
                  {panel}
                </button>
              )
            })}
          </div>
          {panels[active] === 'Xpring SDK' && (
            <div className="mt-6 md:mt-8">
              <Button variant="secondary" label="Javascript" size="xs" />
              <Button
                variant="secondary"
                label="Swift"
                className="ml-2"
                size="xs"
              />
              <Button
                variant="secondary"
                label="Java"
                className="ml-2"
                size="xs"
              />
            </div>
          )}
          <div className="w-full h-64 mt-6 rounded bg-blue-dark-800 md:mt-8" />
          {/* TODO ADD LINK HERE */}
          <Button label="Run" className="mt-10 md:mt-16" />
        </div>
      </div>
    </Wave>
  )
}

export default Integrate
