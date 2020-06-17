import React from 'react'

import Button from '../../common/button'
import Wave from '../../common/wave'

const JoinUs: React.FC = () => {
  return (
    <Wave
      background="light-blue"
      wave="white"
      className="flex items-center justify-center"
    >
      <div className="flex flex-col max-w-5xl text-2xl font-bold md:text-center md:text-4xl">
        <div>
          Join the first PayID Developer Conference next week on June 25th 2020
        </div>
        <div className="mt-12 md:mt-16">
          <a
            href="https://ripple.com/lp/payid-dev-conference"
            target="_blank"
            rel="noreferrer"
          >
            <Button label="Sign Up" />
          </a>
        </div>
      </div>
    </Wave>
  )
}

export default JoinUs
