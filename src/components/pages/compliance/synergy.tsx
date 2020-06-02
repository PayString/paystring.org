import React from 'react'

import Wave from '../../common/wave'

const Synergy: React.FC = () => {
  return (
    <Wave
      background="gray"
      wave="blue"
      direction="rtl"
      className="flex justify-center flex-grow text-3xl text-center"
      waveVectorClassName="xl:-mt-52 lg:-mt-40 md:-mt-36 sm:-mt-25"
    >
      Synergy with Other Proposals
    </Wave>
  )
}

export default Synergy
