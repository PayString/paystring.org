import React from 'react'

import Button from './button'
import Wave from './wave'

interface QuestionsProps {
  direction?: 'ltr' | 'rtl'
}

const Questions: React.FC<QuestionsProps> = (props) => {
  return (
    <Wave
      background="orange"
      direction={props.direction}
      wave="blue"
      spacing="lg"
    >
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
