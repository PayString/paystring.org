import React from 'react'

import Button from '../../common/button'
import Wave from '../../common/wave'

interface QuestionsProps {
  direction?: 'ltr' | 'rtl'
  title?: string
  description?: string
  orangeButton?: boolean
  className?: string
}

const Questions: React.FC<QuestionsProps> = (props) => {
  const { direction = 'rtl', className } = props

  return (
    <Wave
      background="orange"
      direction={direction}
      wave="blue"
      spacing="lg"
      className="flex items-center justify-center"
      waveClassNames={className}
    >
      <div>
        <div className="text-3xl font-bold text-center sm:text-5xl">
          Have Questions? Reach out to us anytime.
        </div>
        <div className="mt-16 mb-32 text-xl text-center">
          <Button
            variant="secondary"
            to="/contact"
            label="Contact Us"
            className="w-full text-orange-500 bg-white"
          />
        </div>
      </div>
    </Wave>
  )
}

export default Questions
