import classNames from 'classnames'
import React from 'react'

import WaveVectorLTR from '../../../content/assets/WaveLTR.svg'
import WaveVectorRTL from '../../../content/assets/WaveRTL.svg'

interface WaveVectorProps {
  direction?: 'ltr' | 'rtl'
  theme?: 'white' | 'gray' | 'blue' | 'orange'
}

const WaveVector: React.FC<WaveVectorProps> = (props) => {
  const { theme = 'white', direction = 'ltr' } = props

  const classes = classNames({
    'text-white': theme === 'white',
    'text-gray-50': theme === 'gray',
    'text-blue-dark-900': theme === 'blue',
    'text-orange-500': theme === 'orange',
  })

  return direction === 'ltr' ? (
    <WaveVectorLTR className={classes} />
  ) : (
    <WaveVectorRTL className={classes} />
  )
}

export default WaveVector
