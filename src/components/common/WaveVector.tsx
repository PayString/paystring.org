import classNames from 'classnames'
import React from 'react'

import WaveVectorLTR from '../../../content/assets/WaveLTR.svg'
import WaveVectorRTL from '../../../content/assets/WaveRTL.svg'

interface WaveVectorProps {
  direction: 'ltr' | 'rtl'
  background: 'white' | 'gray' | 'blue' | 'orange'
  wave: 'white' | 'gray' | 'blue' | 'orange'
}

const WaveVector: React.FC<WaveVectorProps> = (props) => {
  const classes = classNames('relative', {
    'text-white': props.wave === 'white',
    'text-gray-50': props.wave === 'gray',
    'text-blue-dark-900': props.wave === 'blue',
    'text-orange-500': props.wave === 'orange',
    'bg-white': props.background === 'white',
    'bg-gray-50': props.background === 'gray',
    'bg-blue-dark-900': props.background === 'blue',
    'bg-orange-500': props.background === 'orange',
  })

  return (
    <div className="wave-vector">
      {props.direction === 'ltr' && <WaveVectorLTR className={classes} />}
      {props.direction === 'rtl' && <WaveVectorRTL className={classes} />}
    </div>
  )
}

export default WaveVector
