import React from 'react'

import Wave from '../../common/wave'

const Introduction: React.FC = () => {
  return (
    <Wave
      className="flex justify-center flex-grow text-3xl text-center"
      waveVectorClassName="xl:-mt-52 lg:-mt-40 md:-mt-36 sm:-mt-25"
    >
      Who Uses PayID
    </Wave>
  )
}

export default Introduction
