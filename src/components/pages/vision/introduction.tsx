import { Link } from 'gatsby'
import React from 'react'

import Wave from '../../common/wave'

const Introduction: React.FC = () => {
  const sectionCopy = [
    {
      title: 'Payments Should Be Easier',
      descriptions: [
        'Today, we can instantly send a photo, message or video to billions of people and businesses around the world from a phone, laptop or even through smart-homes. Yet, simple and fast payments are still not possible.',
        'Unlike email and text SMS, where there is a single network for the entire world, the payments infrastructure consists of hundreds of isolated networks that don’t speak to each other. Imagine how many fewer text messages we would each send if messages couldn’t be sent between mobile providers.',
        'If sending a payment were as seamless as sending an email, we would all send more payments quickly and easily around the world.',
      ],
    },
    {
      title: 'Tomorrow’s Payment Network Will Be Open',
      descriptions: [
        'In the near future, a single, global payment network will enable anyone to easily pay any other person or business instantly. Everyone, everywhere will tap into the power of this network dozens of times a day, sending payments both large and small. Payments won’t run over fragmented networks using proprietary standards to complicated account numbers, but rather, will use a united network in which all payment companies participate and is built for today’s consumers and businesses.',
      ],
    },
    {
      title: 'PayID is the Universal Payment Identifier',
      descriptions: [
        'PayID creates a common protocol that allows for interoperability between payment networks. PayID is a free and open standard, allowing for truly organic growth where no single company can control or set the terms for joining. This solution is built around people, replacing complex account numbers with simple names that are easy to understand, remember and even type.',
        <>
          Backed by{' '}
          <Link
            to="/about-us"
            className="text-orange-500 focus:underline hover:underline"
          >
            industry leaders
          </Link>{' '}
          from technology and finance, PayID is just the beginning of the open
          global payment network. It works across any payment network or
          currency—be it fiat or digital. A payment network that unites everyone
          around the globe is incredibly valuable for every participant. An open
          network built on open standards and open source enables innovation and
          growth for everyone. Just like the creation and widespread adoption of
          the internet and mobile phones, PayID drives payments forward,
          simplifying global payments for all and bringing us one step closer to
          a world where money moves as easily as information.
        </>,
      ],
    },
  ]

  return (
    <Wave waveClassNames="vision-bg" spacing="sm" wave="gray">
      <div className="max-w-4xl pt-16 lg:pt-70">
        <h1 className="text-4xl font-bold sm:mb-10 mb-7 sm:text-h1 sm:leading-tighter">
          Vision
        </h1>
      </div>
      <div className="w-full mx-auto md:max-w-md">
        {sectionCopy.map((copy, i) => {
          return (
            <div key={i} className="mt-20 sm:mt-30">
              <h2 className="mb-10 text-3xl font-bold sm:text-4xl sm:mb-14">
                {copy.title}
              </h2>
              {copy.descriptions.map((description, index) => {
                return (
                  <p className="mt-8" key={index}>
                    {description}
                  </p>
                )
              })}
            </div>
          )
        })}
      </div>
    </Wave>
  )
}

export default Introduction
