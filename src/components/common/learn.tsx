import React from 'react'

import Wave from './wave'
import '../../css/learn.css'

interface LearnProps {
  background?: 'white' | 'gray' | 'blue' | 'orange'
}

const Learn: React.FC<LearnProps> = (props) => {
  const learnables = [
    {
      bgStyle: {
        backgroundImage: `url(/assets/learn/developers.svg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      },
      title: 'Getting Started for Developers',
    },
    {
      bgStyle: {
        backgroundImage: `url(/assets/learn/whitepaper.svg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      },
      title: 'PayID Technical Whitepaper',
    },
    {
      bgStyle: {
        backgroundImage: `url(/assets/learn/security.svg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      },
      title: 'Security and Privacy',
    },
    {
      bgStyle: {
        backgroundImage: `url(/assets/learn/travel-rule.svg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      },
      title: 'Travel Rule and Compliance',
    },
  ]

  return (
    <Wave
      background={props.background}
      wave="orange"
      waveVectorClassName="xl:-mt-18 lg:-mt-40 md:-mt-25 sm:-mt-20"
    >
      <div className="flex sm:justify-center">
        <h2 className="text-3xl font-bold mb-14 sm:text-5xl sm:text-center sm:mb-25">
          Learn More
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {learnables.map((learnable) => {
            return (
              <a
                href="https://google.com" // TODO (@Stormtv) add proper links
                target="_blank"
                rel="noreferrer"
                key={learnable.title}
                className="transition duration-500 ease-in-out transform rounded-xl bg-blue-dark-900 focus:shadow-2xl hover:shadow-2xl focus:scale-105 hover:scale-105 focus:outline-none learnable"
                style={learnable.bgStyle}
              >
                <h3 className="relative z-10 text-2xl font-bold text-white mx-13 md:text-3xl mt-29 md:mt-36">
                  {learnable.title}
                </h3>
              </a>
            )
          })}
        </div>
      </div>
    </Wave>
  )
}

export default Learn
