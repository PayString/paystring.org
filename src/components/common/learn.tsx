import React from 'react'

import Wave from './wave'

interface LearnProps {
  background?: 'white' | 'gray' | 'blue' | 'orange'
  direction?: 'ltr' | 'rtl'
}

const Learn: React.FC<LearnProps> = (props) => {
  const learnables = [
    {
      bgStyle: {
        backgroundImage: 'url(/assets/learn/developers.svg)',
      },
      title: 'Getting Started for Developers',
    },
    {
      bgStyle: {
        backgroundImage: 'url(/assets/learn/whitepaper.svg)',
      },
      title: 'PayID Technical Whitepaper',
    },
    {
      bgStyle: {
        backgroundImage: 'url(/assets/learn/api-reference.svg)',
      },
      title: 'API Reference',
    },
    {
      bgStyle: {
        backgroundImage: 'url(/assets/learn/standards.svg)',
      },
      title: 'PayID Standards',
    },
    {
      bgStyle: {
        backgroundImage: 'url(/assets/learn/security.svg)',
      },
      title: 'Security and Privacy',
    },
    {
      bgStyle: {
        backgroundImage: 'url(/assets/learn/travel-rule.svg)',
      },
      title: 'Travel Rule and Compliance',
    },
    {
      bgStyle: {
        backgroundImage: 'url(/assets/learn/checkout.svg)',
      },
      title: 'Checkout',
    },
    {
      bgStyle: {
        backgroundImage: 'url(/assets/learn/xpring-sdk.svg)',
      },
      title: 'Xpring SDK for PayID',
    },
  ]

  return (
    <Wave
      background={props.background}
      direction={props.direction}
      wave="orange"
      no-gutter
    >
      <div className="flex flex-col items-center sm:justify-center mb-14 md:mb-25">
        <h2 className="text-3xl font-bold sm:text-5xl sm:text-center ">
          Learn More
        </h2>
        <p className="max-w-xl mt-6 text-xl sm:mt-8 sm:text-center">
          Discover everything you need to know about the free, open source PayID
          protocol
        </p>
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
                className="transition duration-500 ease-in-out transform bg-no-repeat bg-cover rounded-xl bg-blue-dark-900 focus:shadow-2xl hover:shadow-2xl focus:scale-105 hover:scale-105 focus:outline-none learnable"
                style={learnable.bgStyle}
              >
                <h3 className="font-bold text-white learnable-title mx-13">
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
