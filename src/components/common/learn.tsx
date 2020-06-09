// import { checkPropTypes } from 'prop-types'
import React from 'react'

import Wave from './wave'

interface LearnProps {
  background?: 'white' | 'gray' | 'blue' | 'orange'
  direction?: 'ltr' | 'rtl'
  page?: 'home' | 'compliance'
}

const Learn: React.FC<LearnProps> = (props) => {
  const learnables =
    props.page === 'home'
      ? [
          {
            bgStyle: {
              backgroundImage: 'url(/assets/learn/developers.svg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            },
            title: 'Getting Started for Developers',
          },
          {
            bgStyle: {
              backgroundImage: 'url(/assets/learn/whitepaper.svg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            },
            title: 'PayID Technical Whitepaper',
          },
          {
            bgStyle: {
              backgroundImage: 'url(/assets/learn/api-reference.svg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            },
            title: 'API Reference',
          },
          {
            bgStyle: {
              backgroundImage: 'url(/assets/learn/standards.svg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            },
            title: 'PayID Standards',
          },
          {
            bgStyle: {
              backgroundImage: 'url(/assets/learn/security.svg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            },
            title: 'Security and Privacy',
          },
          {
            bgStyle: {
              backgroundImage: 'url(/assets/learn/travel-rule.svg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            },
            title: 'Travel Rule and Compliance',
          },
          {
            bgStyle: {
              backgroundImage: 'url(/assets/learn/checkout.svg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            },
            title: 'Checkout',
          },
          {
            bgStyle: {
              backgroundImage: 'url(/assets/learn/xpring-sdk.svg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            },
            title: 'Xpring SDK for PayID',
          },
        ]
      : [
          {
            bgStyle: {
              backgroundImage: 'url(/assets/learn/developers.svg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            },
            title: 'Getting Started for Developers',
          },
          {
            bgStyle: {
              backgroundImage: 'url(/assets/learn/whitepaper.svg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            },
            title: 'PayID Technical Whitepaper',
          },
          {
            bgStyle: {
              backgroundImage: 'url(/assets/learn/security.svg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            },
            title: 'Security and Privacy',
          },
          {
            bgStyle: {
              backgroundImage: 'url(/assets/learn/travel-rule.svg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            },
            title: 'Travel Rule and Compliance',
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
        {props.page === 'home' && (
          <p className="max-w-xl mt-8 text-xl sm:text-center">
            Discover everything you need to know about the free, open source
            PayID protocol
          </p>
        )}
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
