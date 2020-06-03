import classNames from 'classnames'
import React from 'react'

import WaveVector from './wave-vector'

interface WaveProps {
  background?: 'white' | 'gray' | 'blue' | 'orange'
  wave?: 'white' | 'gray' | 'blue' | 'orange'
  direction?: 'ltr' | 'rtl'
  spacing?: 'xs' | 'md' | 'none'
  className?: string
}

const Wave: React.FC<WaveProps> = (
  props: React.PropsWithChildren<WaveProps>,
) => {
  // Parse props and set defaults
  const {
    wave = 'white',
    background = 'blue',
    direction = 'ltr',
    spacing = 'sm',
  } = props

  let waveVectorClasses = ''
  if (spacing === 'sm') {
    waveVectorClasses = 'xl:-mt-18 lg:-mt-40 md:-mt-25 sm:-mt-20'
  } else if (spacing === 'md') {
    waveVectorClasses = 'xl:-mt-52 lg:-mt-40 md:-mt-36 sm:-mt-25'
  }

  // Figure out the background color and text colors based on given background prop
  const waveClasses = classNames('wave', {
    'bg-white text-blue-dark-900': background === 'white',
    'bg-gray-50 text-blue-dark-900': background === 'gray',
    'bg-blue-dark-900 text-white': background === 'blue',
    'bg-orange-500 text-white': background === 'orange',
  })

  const contentClasses = classNames('wave-content', props.className)

  return (
    <div className={waveClasses}>
      <div className={contentClasses}>{props.children}</div>
      <WaveVector
        wave={wave}
        direction={direction}
        className={waveVectorClasses}
      />
    </div>
  )
}

export default Wave
