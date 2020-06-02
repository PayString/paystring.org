import React from 'react'

import Wave from './wave'

const Questions: React.FC = () => {
  return (
    <Wave
      background="orange"
      wave="blue"
      className="flex justify-center flex-grow text-3xl text-center"
      waveVectorClassName="xl:-mt-52 lg:-mt-40 md:-mt-36 sm:-mt-25"
    >
      Have Questions
    </Wave>
  )
}

export default Questions
