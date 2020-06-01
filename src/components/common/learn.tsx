import React from 'react'

import Wave from './wave'

interface LearnProps {
  background?: 'white' | 'gray' | 'blue' | 'orange'
}

const Learn: React.FC<LearnProps> = (props) => {
  return (
    <Wave
      background={props.background}
      wave="orange"
      className="flex justify-center flex-grow text-3xl text-center"
    >
      Learn More
    </Wave>
  )
}

export default Learn
