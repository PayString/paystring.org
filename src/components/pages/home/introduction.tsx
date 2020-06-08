import React from 'react'

import Wave from '../../common/wave'

const Introduction: React.FC = () => {
  return (
    <Wave
      wave="light-blue"
      className="flex justify-center flex-grow text-3xl text-center"
    >
      <div className="pt-16 lg:pt-70">The Universal Payment Identifier</div>
    </Wave>
  )
}

export default Introduction
