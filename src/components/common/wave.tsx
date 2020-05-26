import classNames from 'classnames'
import React from 'react'

import WaveVectorLTR from '../../../content/assets/WaveLTR.svg'
import WaveVectorRTL from '../../../content/assets/WaveRTL.svg'

interface WaveProps {
  background?: 'white' | 'gray' | 'blue' | 'orange'
  wave?: 'white' | 'gray' | 'blue' | 'orange'
  direction?: 'ltr' | 'rtl'
  className?: string
}

const Wave: React.FC<WaveProps> = (
  props: React.PropsWithChildren<WaveProps>,
) => {
  const { wave = 'white', background = 'blue', direction = 'ltr' } = props
  return (
    <div
      className={classNames({
        'bg-white text-blue-dark-900': background === 'white',
        'bg-gray-50 text-blue-dark-900': background === 'gray',
        'bg-blue-dark-900 text-white': background === 'blue',
        'bg-orange-500 text-white': background === 'orange',
      })}
    >
      <div className={props.className}>{props.children}</div>
      {direction === 'ltr' && (
        <WaveVectorLTR
          className={classNames({
            'text-white': wave === 'white',
            'text-gray-50': wave === 'gray',
            'text-blue-dark-900': wave === 'blue',
            'text-orange-500': wave === 'orange',
          })}
        />
      )}
      {direction === 'rtl' && (
        <WaveVectorRTL
          className={classNames({
            'text-white': wave === 'white',
            'text-gray-50': wave === 'gray',
            'text-blue-dark-900': wave === 'blue',
            'text-orange-500': wave === 'orange',
          })}
        />
      )}
    </div>
  )
}

export default Wave
