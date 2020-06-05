import classNames from 'classnames'
import React, { CSSProperties } from 'react'

import WaveVector from './wave-vector'

interface WaveProps {
  background?: 'white' | 'gray' | 'blue' | 'orange'
  wave?: 'white' | 'gray' | 'blue' | 'orange'
  direction?: 'ltr' | 'rtl'
  spacing?: 'md' | 'lg'
  className?: string
  style?: CSSProperties
}

const Wave: React.FC<WaveProps> = (
  props: React.PropsWithChildren<WaveProps>,
) => {
  // Parse props and set defaults
  const {
    wave = 'white',
    background = 'blue',
    direction = 'ltr',
    spacing = 'md',
  } = props

  let waveVectorClasses = ''
  if (spacing === 'md') {
    waveVectorClasses = 'xl:-mt-52 lg:-mt-40 md:-mt-14 sm:-mt-10'
  } else if (spacing === 'lg') {
    waveVectorClasses = 'xl:-mt-74 lg:-mt-52 md:-mt-36 sm:-mt-28'
  }

  // Figure out the background color and text colors based on given background prop
  const waveClasses = classNames('wave', {
    'bg-white text-blue-dark-900': background === 'white',
    'bg-gray-50 text-blue-dark-900': background === 'gray',
    'bg-blue-dark-900 text-white': background === 'blue',
    'bg-orange-500 text-white': background === 'orange',
  })

  const contentClasses = classNames('wave-content container', props.className)

  return (
    <div className={waveClasses} style={props.style}>
      <div className="flex justify-center">
        <div className={contentClasses}>{props.children}</div>
      </div>
      <WaveVector
        wave={wave}
        direction={direction}
        className={waveVectorClasses}
      />
    </div>
  )
}

export default Wave
