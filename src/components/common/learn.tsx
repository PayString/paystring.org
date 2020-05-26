import React from 'react'

import Wave from './wave'

const Learn: React.FC = () => {
  return (
    <Wave
      background="white"
      wave="orange"
      className="flex items-center justify-center flex-grow text-3xl"
    >
      Learn More
    </Wave>
  )
}

export default Learn
