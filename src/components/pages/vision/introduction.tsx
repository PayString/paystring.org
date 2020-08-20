import { Link } from 'gatsby'
import React from 'react'

import Wave from '../../common/wave'

const Introduction: React.FC = () => {
  const sectionCopy = [
    {
      title: 'Payments Should Be Easier',
      descriptions: [
        'Today, we can instantly send a photo, message or video to billions of people and businesses around the world from a phone, laptop or even through smart-homes. Yet, simple and fast payments are still not possible.',
        'Unlike email and text SMS, where there is a single network for the entire world, the payments infrastructure consists of hundreds of isolated networks that don’t speak to each other. Imagine how many fewer text messages each of us would each send if messages couldn’t be sent between mobile providers.',
        'If sending a payment were as seamless as sending an email, we would all send more payments quickly and easily around the world.',
      ],
      quote:
        '“GoPay International is excited to join this global consortium and explore potential opportunities to apply blockchain technology to enhance services to our users. We remain committed to working in partnership with all stakeholders, including local regulators, to utilise technology to increase financial inclusion in our international markets.”',
      quoteAuthor: ['Hassan Ahmed', 'Head of Strategy, GoPay'],
      quoteImage: '/assets/vision/quote-author-3.jpeg',
      quoteBackground: '/assets/vision/quote-background-3.svg',
    },
    {
      title: 'Tomorrow’s Payment Network Will Be Open',
      descriptions: [
        'In the near future, a single, global payment network will enable anyone to easily pay any other person or business instantly. Everyone, everywhere will tap into the power of this network dozens of times a day, sending payments both large and small. Payments won’t run over fragmented networks using proprietary standards to complicated account numbers, but rather, will use a united network in which all payment companies participate and is built for today’s consumers and businesses.',
      ],
      quote:
        '“An open payment network will play a key role in the next generation of games supported by community economics. By being free, open source, and easy to implement, PayID provides the games community with a frictionless solution that will benefit players and game developers around the world.”',
      quoteAuthor: [
        'Chris Jimison',
        'Vice President of',
        'Engineering at Forte',
      ],
      quoteImage: '/assets/vision/quote-author-2.png',
      quoteBackground: '/assets/vision/quote-background-2.svg',
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
      quote:
        '“Though the global payments ecosystem has expanded on the promise of simplifying the transfer of money, it has also resulted in siloed, closed and complex networks that often make sending money more difficult.”',
      quoteAuthor: ['Kris Marszalek', 'CEO of Crypto.com'],
      quoteImage: '/assets/vision/quote-author-1.png',
      quoteBackground: '/assets/vision/quote-background-1.svg',
    },
  ]

  return (
    <Wave waveClassNames="vision-bg" spacing="sm" wave="gray">
      <div className="max-w-4xl pt-16 lg:pt-70">
        <h1 className="text-4xl font-bold sm:mb-10 mb-7 sm:text-h1 sm:leading-tighter">
          Vision
        </h1>
      </div>
      <div className="w-full ">
        {sectionCopy.map((copy, i) => {
          return (
            <div
              key={i}
              className="flex flex-wrap mt-20 even:flex-row-reverse sm:mt-40"
            >
              <div className="lg:w-1/2">
                <h2 className="mb-10 text-3xl font-bold sm:text-4xl sm:mb-14">
                  {copy.title}
                </h2>
                {copy.descriptions.map((description, index) => {
                  return (
                    <p className="mt-8 text-xl" key={index}>
                      {description}
                    </p>
                  )
                })}
              </div>
              <div
                className={
                  i === 1
                    ? 'flex w-full lg:w-1/2 justify-center lg:justify-start'
                    : 'flex w-full lg:w-1/2 justify-center lg:justify-end'
                }
              >
                <div className="mt-20 lg:mt-0">
                  <div className="relative max-w-sm">
                    <img
                      className="w-74 sm:w-full"
                      src={copy.quoteBackground}
                    />
                    <p className="absolute top-0 left-0 px-12 text-sm pt-30 lg:pt-36 sm:text-base lg:text-xl ">
                      {copy.quote}
                    </p>
                  </div>
                  <div className="flex items-center mt-5 ml-10">
                    <div>
                      <img
                        className="w-16 mr-5 rounded-full"
                        src={copy.quoteImage}
                      />
                    </div>
                    <div>
                      {copy.quoteAuthor.map((title, index) => {
                        return <p key={index}>{title}</p>
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Wave>
  )
}

export default Introduction
