import React from 'react'

import Button from './button'
import Wave from './wave'

const Questions: React.FC = () => {
  return (
    <Wave
      background="orange"
      wave="blue"
      className="flex justify-center flex-grow text-3xl"
    >
      <div>
        <h2 className="text-center">
          Have Questions? <br></br>Reach out to us anytime.
          <br></br>
          <Button to="/contact" label="Contact Us" variant="ghost" />
        </h2>
      </div>
    </Wave>
  )
}

export default Questions
