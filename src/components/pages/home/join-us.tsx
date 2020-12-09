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
        <div>Participate in the PayString Hackathon</div>
        <div>Over $24K in prizes</div>
        <div className="mt-12 md:mt-16">
          <a
            href="https://payid.devpost.com/?utm_source=paystring.org&utm_medium=body"
            target="_blank"
            rel="noreferrer"
          >
            <Button label="Register Now" />
          </a>
        </div>
      </div>
    </Wave>
  )
}

export default JoinUs
