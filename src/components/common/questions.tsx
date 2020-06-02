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
      <div className="font-bold text-center sm:text-5xl">
        <div>Have Questions?</div>
        <div>Reach out to us anytime.</div>
        <Button
          to="/contact"
          label="Contact Us"
          variant="ghost"
          className="w-full mt-5 sm:w-auto"
        />
      </div>
    </Wave>
  )
}

export default Questions
