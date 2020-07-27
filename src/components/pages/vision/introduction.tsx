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
        '“The Open Payments Coalition is laying important groundwork for the complex issue of global payment standardization, which we believe is important to opening the value layer of the internet for developers worldwide.”',
      quoteAuthor: 'Kris Marszalek',
      quoteAuthorTitle: 'CEO of Crypto.com',
      quoteImage: '/assets/vision/quote-image-temp.png',
    },
    {
      title: 'Tomorrow’s Payment Network Will Be Open',
      descriptions: [
        'In the near future, a single, global payment network will enable anyone to easily pay any other person or business instantly. Everyone, everywhere will tap into the power of this network dozens of times a day, sending payments both large and small. Payments won’t run over fragmented networks using proprietary standards to complicated account numbers, but rather, will use a united network in which all payment companies participate and is built for today’s consumers and businesses.',
      ],
      quote:
        '“Though the global payments ecosystem has expanded on the promise of simplifying the transfer of money, it has also resulted in siloed, closed and complex networks that often make sending money more difficult.”',
      quoteAuthor: 'Kris Marszalek',
      quoteAuthorTitle: 'CEO of Crypto.com',
      quoteImage: '/assets/vision/quote-image-temp.png',
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
        '“An open payment network will play a key role in the next generation of games supported by community economics. By being free, open source, and easy to implement, PayID provides the games community with a frictionless solution that will benefit players and game developers around the world.”',
      quoteAuthor: 'Kris Marszalek',
      quoteAuthorTitle: 'CEO of Crypto.com',
      quoteImage: '/assets/vision/quote-image-temp.png',
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
              className="grid grid-cols-1 gap-8 mt-20 sm:mt-40 sm:gap-20 md:grid-cols-2"
            >
              <div className={i === 1 ? 'sm:order-last' : ''}>
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

              <div className={i === 1 ? '' : 'flex sm:justify-end'}>
                <div>
                  <div className="max-w-sm pb-10 pt-36 vision-quote">
                    <p className="text-xl px-15">{copy.quote}</p>
                  </div>
                  <div className="mt-10 ml-10">
                    <img
                      className="float-left pr-5"
                      src={copy.quoteImage}
                      alt={copy.quoteAuthor}
                    />
                    <p className="pt-2">{copy.quoteAuthor},</p>
                    <p className="">{copy.quoteAuthorTitle}</p>
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
