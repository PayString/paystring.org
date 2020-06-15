import classNames from 'classnames'
import React, { useState } from 'react'

import Arrow from '../../../../content/assets/compliance/walkthrough/arrow.svg'
import Wave from '../../common/wave'

const Introduction: React.FC = () => {
  // const scrollToRef = (e: string) => window.scrollTo(0, e.current.offsetTop)

  // const scrollToRef = (ref: string) =>
  //   window.scrollTo(0, { ref }.current.offsetTop)
  // const [collapse, setCollapse] = useState<boolean>(false)

  const [collapse, setCollapse] = useState<number>(0)
  // const [icon, setIcon] = useState('down')
  // const toggle = () => {
  // setCollapse(!collapse)
  // setIcon((state) => {
  //   return state === 'down' ? 'right' : 'down'
  // })
  // }

  const bgImgStyle = {
    backgroundImage: 'url(/assets/faq/background.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
  }

  const sectionCopy = [
    {
      topic: 'The Basics',
      copy: [
        {
          title: 'What is PayID?',
          description:
            'PayID is a universal payment identifier that makes it easier for people to send and receive money across any payment network.',
        },
        {
          title: 'Who uses PayID?',
          description:
            'PayID works across jurisdictions — without a patchwork of central regisAny business that sends and receives money can use PayID to give each of their customers a simple and universal ID that works across any payment network and makes payments faster and easier. PayID is an open and free standard, so anyone can build implementations and extensions on top of PayID.',
        },
        {
          title:
            'How Is PayID compliant with international payment regulations?',
          description:
            'Rather than prescribing a single solution, PayID is flexible and composable by design, which empowers transaction participants to implement their own policies. PayID provides a simple extension that helps businesses satisfy Travel Rule record-keeping required in jurisdictions globally, including both current FinCEN rules and FATF guidance. Protocol extensions also make it easy to comply with a variety of other requirements for transactions involving regulated entities, while PayID also facilitates other compliance needs, such as sanctions screening.',
        },
        {
          title: 'Who created this website?',
          description:
            'The PayID website was created by Ripple, as an early adopter of PayID.',
        },
        {
          title: 'How can I get started with PayID?',
          description:
            'PayID is open source and easy to set up with just a few lines of code. You can explore the documentation and GitHub repository',
        },
      ],
    },
    {
      topic: 'Development',
      copy: [
        {
          title: 'What does PayID implementation involve?',
          description:
            'PayID is a free-to-use, fully open standard with an open source implementation. Any service can start using PayID by integrating a PayID server into their existing infrastructure using the reference implementation on GitHub.',
        },
        {
          title: 'What are the underlying technologies?',
          description:
            'PayID is a web-based protocol built on a simple HTTP API secured by the standard web security stack, such as TLS.',
        },
        {
          title: 'How secure of a standard does it provide?',
          description:
            'PayID leverages tried-and-true security technologies that secure all internet services, including e-commerce and digital banking services. Additionally, PayID messages include cryptographic certificates and signatures that ensure participants in PayID transactions do not need to trust any counterparty.',
        },
        {
          title: 'What is server deployment like?',
          description:
            'PayID is designed by devs for devs. You can deploy a PayID server with just a few commands alongside existing web infrastructure then integrate it into an application or account system in just a few lines of code. PayID also includes a variety of tools that makes managing the server after deployment easy.',
        },
      ],
    },
  ]

  return (
    <Wave style={bgImgStyle} spacing="sm">
      <div className="max-w-4xl pt-16 lg:pt-70">
        <h1 className="text-4xl font-bold sm:text-3xl sm:mb-10 mb-7 sm:text-h1 sm:leading-tighter">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="flex mt-20 sm:mt-30">
        <div className="sticky top-0 hidden w-72 md:mr-32 sm:-ml-0 sm:mr-8 lg:-ml-16 sm:block">
          {sectionCopy.map((c, i) => {
            return (
              <div className="mb-6" key={i}>
                <button
                  className={classNames(
                    'text-xs font-semibold hover:text-orange-500 focus:outline-none align-middle',
                    {
                      'text-orange-500': i === collapse,
                    },
                  )}
                  onClick={(): void => setCollapse(i)}
                >
                  {c.topic}
                  <Arrow
                    className={classNames('h-2 ml-4 transform inline-block', {
                      'rotate-90': i === collapse,
                      '-rotate-90': i !== collapse,
                    })}
                  />
                </button>
                {i === collapse && (
                  <div className="block mt-2 ml-4">
                    {c.copy.map((t, x) => {
                      return (
                        <a
                          key={x}
                          className="block mb-2 text-xs font-semibold hover:text-orange-500"
                          href={`#${t.title}`}
                          // onClick={(): void => scrollToRef(`"#${t.title}"`)}
                        >
                          {t.title}
                        </a>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <div className="max-w-lg">
          {sectionCopy.map((a, i) => {
            return (
              <div className="mb-20 sm:mb-40" key={i}>
                <h2 className="mb-10 text-3xl font-bold sm:text-5xl sm:mb-14">
                  {a.topic}
                </h2>
                {a.copy.map((b, x) => {
                  return (
                    <div key={x} className="mb-10 sm:mb-12">
                      <h3
                        className="text-2xl font-bold sm:text-3xl"
                        id={b.title}
                      >
                        {b.title}
                      </h3>
                      <p className="mt-4 text-base sm:text-xl">
                        {b.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </Wave>
  )
}

export default Introduction
