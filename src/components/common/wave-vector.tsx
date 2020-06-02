import classNames from 'classnames'
import React from 'react'

import WaveVectorLTR from '../../../content/assets/WaveLTR.svg'
import WaveVectorRTL from '../../../content/assets/WaveRTL.svg'

interface WaveVectorProps {
  direction: 'ltr' | 'rtl'
  wave: 'white' | 'gray' | 'blue' | 'orange'
  className: string
}

const WaveVector: React.FC<WaveVectorProps> = (props) => {
  const classes = classNames('bg-transparent', {
    'text-white': props.wave === 'white',
    'text-gray-50': props.wave === 'gray',
    'text-blue-dark-900': props.wave === 'blue',
    'text-orange-500': props.wave === 'orange',
  })

  return (
    <div className={classNames('wave-vector', props.className)}>
      {props.direction === 'ltr' && <WaveVectorLTR className={classes} />}
      {props.direction === 'rtl' && <WaveVectorRTL className={classes} />}
    </div>
  )
}

export default WaveVector
