import React from 'react'

import Button from '../../common/button'
import Wave from '../../common/wave'

interface CommunityProps {
  direction?: 'ltr' | 'rtl'
  title?: string
  description?: string
  orangeButton?: boolean
}

const Community: React.FC<CommunityProps> = (props) => {
  const { direction = 'rtl' } = props

  return (
    <Wave
      background="orange"
      direction={direction}
      wave="blue"
      spacing="lg"
      className="flex items-center justify-center"
    >
      <div>
        <div className="text-3xl font-bold text-center sm:text-5xl">
          Have Questions? Reach out to us anytime.
        </div>
        <div className="mt-16 text-xl text-center">
          <Button
            variant="secondary"
            to="/contact"
            label="Contact Us"
            className="text-orange-500 bg-white w-full"
          />
        </div>
      </div>
    </Wave>
  )
}

export default Community
