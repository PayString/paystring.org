import classNames from 'classnames'
import React from 'react'

import WaveVector from '../../../content/assets/wave.svg'

interface WaveProps {
  background?: 'white' | 'gray' | 'blue' | 'orange'
  wave?: 'white' | 'gray' | 'blue' | 'orange'
  className?: string
}

const Wave: React.FC<WaveProps> = (
  props: React.PropsWithChildren<WaveProps>,
) => {
  const { wave = 'white', background = 'blue' } = props
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
      <WaveVector
        className={classNames({
          'text-white': wave === 'white',
          'text-gray-50': wave === 'gray',
          'text-blue-dark-900': wave === 'blue',
          'text-orange-500': wave === 'orange',
        })}
      />
    </div>
  )
}

export default Wave
