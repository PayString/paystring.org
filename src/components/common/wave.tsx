import classNames from 'classnames'
import React, { CSSProperties } from 'react'

import WaveVector from './wave-vector'

interface WaveProps {
  background?: 'white' | 'gray' | 'blue' | 'orange' | 'light-blue'
  wave?: 'white' | 'gray' | 'blue' | 'orange' | 'light-blue'
  direction?: 'ltr' | 'rtl'
  spacing?: 'sm' | 'md' | 'lg'
  className?: string
  waveClassNames?: string
  style?: CSSProperties
  'no-gutter'?: boolean
  'no-spacing'?: boolean
  waveVectorClassNames?: string
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
  if (spacing === 'sm') {
    waveVectorClasses = 'xl:-mt-20 lg:-mt-18 md:-mt-10 sm:-mt-8'
  } else if (spacing === 'md') {
    waveVectorClasses = 'xl:-mt-52 lg:-mt-40 md:-mt-14 sm:-mt-10'
  } else if (spacing === 'lg') {
    waveVectorClasses = 'xl:-mt-74 lg:-mt-52 md:-mt-36 sm:-mt-28'
  }
  waveVectorClasses = classNames(waveVectorClasses, props.waveVectorClassNames)

  // Figure out the background color and text colors based on given background prop
  const waveClasses = classNames(props.waveClassNames, 'wave', {
    'bg-white text-blue-dark-900': background === 'white',
    'bg-gray-50 text-blue-dark-900': background === 'gray',
    'bg-blue-dark-900 text-white': background === 'blue',
    'bg-orange-500 text-white': background === 'orange',
    'bg-blue-dark-800 text-white': background === 'light-blue',
  })

  const childrenClass = classNames('flex justify-center', {
    'px-6 lg:px-18': !props['no-spacing'],
  })

  const contentClasses = classNames(
    'wave-content',
    {
      'lg:px-17': !props['no-gutter'],
    },
    {
      container: !props['no-spacing'],
    },
    {
      'w-full': props['no-spacing'],
    },
    props.className,
  )

  return (
    <div className={waveClasses} style={props.style}>
      <div className={childrenClass}>
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
