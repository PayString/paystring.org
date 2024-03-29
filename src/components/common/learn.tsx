import { withPrefix } from 'gatsby'
import React from 'react'

import { getDocsLocation } from '../../utils/config'
import { githubNavigation } from '../../utils/typewritter'

import Wave from './wave'

interface LearnProps {
  background?: 'white' | 'gray' | 'blue' | 'orange'
  direction?: 'ltr' | 'rtl'
}

interface Learnable {
  bgStyle: {
    backgroundImage: string
  }
  title: string
  link: string
}

const Learn: React.FC<LearnProps> = (props) => {
  const recordEvent = (learnable: Learnable): void => {
    if (learnable.link.startsWith('https://github.com/')) {
      githubNavigation({
        type: learnable.title,
        url: learnable.link,
        text: learnable.title,
      })
    }
  }

  const learnables = [
    {
      bgStyle: {
        backgroundImage: `url(${withPrefix('/assets/learn/developers.svg')})`,
      },
      title: 'Getting Started for Developers',
      link: getDocsLocation(),
    },
    {
      bgStyle: {
        backgroundImage: `url(${withPrefix('/assets/learn/whitepaper.svg')})`,
      },
      title: 'PayString Technical White Paper',
      link: '/whitepaper.pdf',
    },
    {
      bgStyle: {
        backgroundImage: `url(${withPrefix(
          '/assets/learn/api-reference.svg',
        )})`,
      },
      title: 'API Reference',
      link: 'https://api.PayString.org/?version=latest',
    },
    {
      bgStyle: {
        backgroundImage: `url(${withPrefix('/assets/learn/standards.svg')})`,
      },
      title: 'PayString Standards',
      link: 'https://github.com/paystring/rfcs',
    },
    {
      bgStyle: {
        backgroundImage: `url(${withPrefix('/assets/learn/security.svg')})`,
      },
      title: 'Security and Privacy',
      link:
        'https://github.com/paystring/rfcs/blob/master/dist/spec/verifiable-payid-protocol.txt',
    },
    {
      bgStyle: {
        backgroundImage: `url(${withPrefix('/assets/learn/travel-rule.svg')})`,
      },
      title: 'Travel Rule and Compliance',
      link: 'https://trisa.io/',
    },
    {
      bgStyle: {
        backgroundImage: `url(${withPrefix('/assets/learn/checkout.svg')})`,
      },
      title: 'Checkout',
      link: 'https://ripplex.io/portal/wallet/xrp/testnet',
    },
    {
      bgStyle: {
        backgroundImage: `url(${withPrefix('/assets/learn/xpring-sdk.svg')})`,
      },
      title: 'RippleX SDK for PayString',
      link: `${getDocsLocation()}/ripplex-dev-kit-paystring`,
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
          Discover everything you need to know about the free, open source
          PayString protocol
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {learnables.map((learnable) => {
            return (
              <a
                href={learnable.link}
                target="_blank"
                rel="noreferrer"
                key={learnable.title}
                className="transition duration-500 ease-in-out transform bg-no-repeat bg-cover rounded-xl bg-blue-dark-900 focus:shadow-2xl hover:shadow-2xl focus:scale-105 hover:scale-105 focus:outline-none learnable"
                style={learnable.bgStyle}
                onClick={() => recordEvent(learnable)}
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
