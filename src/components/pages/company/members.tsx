import React from 'react'

import Wave from '../../common/wave'

const Members: React.FC = () => {
  return (
    <Wave
      background="white"
      wave="gray"
      className="flex justify-center flex-grow text-3xl text-center"
      waveVectorClassName="xl:-mt-52 lg:-mt-40 md:-mt-36 sm:-mt-25"
    >
      Founding Members
    </Wave>
  )
}

export default Members
