import React from 'react'

import Button from './button'
import Wave from './wave'

const Questions: React.FC = () => {
  return (
    <Wave background="orange" wave="blue">
      <div className="text-3xl font-bold text-center sm:text-5xl">
        <div>Have Questions?</div>
        <div>Reach out to us anytime.</div>
        <Button
          to="/contact"
          label="Contact Us"
          variant="ghost"
          className="w-full mt-17 sm:w-auto sm:hidden"
        />
        <Button
          to="/contact"
          label="Contact Us"
          variant="ghost"
          size="lg"
          className="hidden w-full mt-12 sm:w-auto sm:inline-block"
        />
      </div>
    </Wave>
  )
}

export default Questions
