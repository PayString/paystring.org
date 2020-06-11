import React from 'react'

import Wave from '../../common/wave'

const Introduction: React.FC = () => {
  return (
    <Wave spacing="sm" waveClassNames="faq-bg">
      <div className="max-w-4xl pt-16 lg:pt-70">
        <h1 className="text-3xl font-bold sm:mb-10 mb-7 sm:text-h1 sm:leading-tighter">
          Frequently Asked Questions
        </h1>
      </div>
      {/* TODO Content */}
    </Wave>
  )
}

export default Introduction
