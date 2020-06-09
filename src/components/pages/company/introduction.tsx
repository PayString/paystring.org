import React from 'react'

import Button from '../../common/button'
import Wave from '../../common/wave'

const Introduction: React.FC = () => {
  const bgImgStyle = {
    backgroundImage: 'url(/assets/company/background.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
  }

  return (
    <Wave style={bgImgStyle} spacing="sm" waveClassNames="bg-cover">
      <div className="max-w-xl pt-16 lg:pt-70">
        <h1 className="text-3xl font-bold sm:mb-10 mb-7 sm:text-h1 sm:leading-tighter">
          Who uses PayID
        </h1>
        <div className="mb-13 sm:text-2xl">
          <div>Companies that use PayID and</div>
          <div>support bringing its vision to life.</div>
        </div>
        <div>
          <Button
            to="/contact"
            label="Contact Us"
            className="w-full max-w-sm sm:inline"
          />
        </div>
      </div>
    </Wave>
  )
}

export default Introduction
