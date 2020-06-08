import React from 'react'

import Wave from '../../common/wave'

const Institutions: React.FC = () => {
  return (
    <Wave
      background="gray"
      wave="white"
      direction="rtl"
      className="flex justify-center flex-grow text-3xl text-center"
    >
      Supported by Leading Institutions
    </Wave>
  )
}

export default Institutions
