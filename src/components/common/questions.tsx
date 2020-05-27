import React from 'react'

import Wave from './wave'

const Questions: React.FC = () => {
  return (
    <Wave
      background="orange"
      wave="blue"
      className="flex justify-center flex-grow text-3xl"
    >
      Have Questions
    </Wave>
  )
}

export default Questions
