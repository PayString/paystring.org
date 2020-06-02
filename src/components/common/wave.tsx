import classNames from 'classnames'
import React from 'react'

import WaveVector from './wave-vector'

interface WaveProps {
  background?: 'white' | 'gray' | 'blue' | 'orange'
  wave?: 'white' | 'gray' | 'blue' | 'orange'
  direction?: 'ltr' | 'rtl'
  waveVectorClassName: string
  className?: string
}

const Wave: React.FC<WaveProps> = (
  props: React.PropsWithChildren<WaveProps>,
) => {
  // Parse props and set defaults
  const { wave = 'white', background = 'blue', direction = 'ltr' } = props

  // Figure out the background color and text colors based on given background prop
  const waveClasses = classNames('wave', {
    'bg-white text-blue-dark-900': background === 'white',
    'bg-gray-50 text-blue-dark-900': background === 'gray',
    'bg-blue-dark-900 text-white': background === 'blue',
    'bg-orange-500 text-white': background === 'orange',
  })

  const contentClasses = classNames(
    'wave-content px-6 xl:-mt-74 lg:-mt-56 md:-mt-40 sm:-mt-30 sm:mb-0 mb-13',
    props.className,
  )

  return (
    <div className={waveClasses}>
      <div className={contentClasses}>{props.children}</div>
      <WaveVector
        wave={wave}
        direction={direction}
        className={props.waveVectorClassName}
      />
    </div>
  )
}

export default Wave
