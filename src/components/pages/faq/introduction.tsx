import classNames from 'classnames'
import { Link } from 'gatsby'
import React, { useState } from 'react'

import Arrow from '../../../assets/compliance/walkthrough/arrow.svg'
import { getDocsLocation, getBaseURL } from '../../../utils/config'
import { githubNavigation } from '../../../utils/typewritter'
import Wave from '../../common/wave'

const Introduction: React.FC = () => {
  const [expanded, setExpanded] = useState<number>(0)
  const [active, setLeftQuestion] = useState<number>()

  const sections = [
    {
      topic: 'PayID Basics',
      contents: [
        {
          title: 'What is PayID?',
          description:
            'PayID is an open universal payment identifier that makes it easier for people to send and receive money in any currency across any payment network.',
        },
        {
          title: 'Who uses PayID?',
          description: (
            <>
              Any business that sends and receives money can use PayID to give
              each of their customers a simple and human-readable ID that works
              across any payment network and makes payments easier with greater
              network reach. PayID is an open standard, so anyone can build
              implementations and extensions on top of PayID.
              <Link
                to="/about-us"
                className="block mt-6 text-orange-500 focus:underline hover:underline"
              >
                See companies that use PayID
              </Link>
            </>
          ),
        },
        {
          title:
            'How is PayID compliant with international payment regulations?',
          description: (
            <>
              Rather than prescribing a single solution, PayID is flexible and
              composable by design, which empowers transaction participants to
              implement their own policies. PayID provides a simple extension
              that helps businesses satisfy Travel Rule record-keeping required
              in jurisdictions globally, including both current FinCEN rules and
              FATF guidance, via native integration with the TRISA protocol.
              PayID can also be used to improve other compliance solutions for
              both users and services.
              <Link
                to="/compliance-and-regulations"
                className="block mt-6 text-orange-500 focus:underline hover:underline"
              >
                Learn more about PayID and TRISA for Travel Rule
              </Link>
            </>
          ),
        },
        {
          title: 'How can I get started with PayID?',
          description: (
            <>
              PayID is open source and easy to set up with just a few lines of
              code. You can explore{' '}
              <a
                href={getDocsLocation()}
                className="text-orange-500 focus:underline hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                the documentation
              </a>{' '}
              and{' '}
              <a
                href="https://github.com/payid-org/payid"
                className="text-orange-500 focus:underline hover:underline"
                target="_blank"
                onClick={() =>
                  githubNavigation({
                    type: 'faq',
                    url: 'https://github.com/payid-org/payid',
                    text: 'GitHub repository',
                  })
                }
                rel="noreferrer"
              >
                GitHub repository
              </a>
              .
            </>
          ),
        },
        {
          title: 'Who developed this website?',
          description:
            'The content on this website content was developed by Ripple, an early adopter of PayID, in collaboration with the Open Payments Coalition.',
        },
        {
          title: 'What payment networks does PayID support?',
          description:
            'PayID supports any payment network or payment processor. Companies may add any payment network or payment processor to a PayID header to send and receive money.',
        },
        {
          title: 'How is PayID different from payment networks and processors?',
          description:
            'PayID is an open standard for payment identifiers. This means that PayID is a naming convention for any payment ID —​ like a bank account number or a crypto address. Any payment network or payment processor can support PayID as an identifier.',
        },
        {
          title: 'Where can I get a PayID?',
          description: (
            <>
              <p>
                You can get a PayID in the following apps: PayMe+,{' '}
                <a
                  href="http://coinfield.com/"
                  className="text-orange-500 focus:underline hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Coinfield
                </a>
                ,{' '}
                <a
                  href="http://crypto.com/"
                  className="text-orange-500 focus:underline hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Crypto.com
                </a>
                ,{' '}
                <a
                  href="http://shop.tangem.com/"
                  className="text-orange-500 focus:underline hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tangem
                </a>
                , and{' '}
                <a
                  href="http://bitrue.com/"
                  className="text-orange-500 focus:underline hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bitrue
                </a>
                .
              </p>
            </>
          ),
        },
      ],
    },
    {
      topic: 'Verifiable PayID',
      contents: [
        {
          title: 'What is Verifiable PayID?',
          description: (
            <>
              <p>
                In the default version of PayID, a receiver trusts their PayID
                provider to not swap the mapping between PayID to payment
                address. While this trust is sufficient with custodial wallets,
                it may not be appropriate in some circumstances, such as with a
                non-custodial wallet.
              </p>
              <p className="mt-4">
                PayID for Wallets removes this layer of trust by
                cryptographically signing response messages with digital
                identity keys. As a result, PayID providers cannot swap out
                payment addresses without the sender or receiver finding out.
              </p>
            </>
          ),
        },
        {
          title: 'Is Verifiable PayID secure?',
          description:
            'Yes, it is. Default PayID uses tried-and-true security technologies that secure all internet services. PayID for Wallets adds another layer of security by including digital identity keys that cryptographically sign response messages, so participants in PayID transactions do not need to trust any counterparty.',
        },
        {
          title: 'What does Verifiable PayID allow me to do?',
          description:
            'Verifiable PayID adds several digital signature fields so you can link a PayID to one or more external digital identities, prove control of the payment rail address, and provide non-repudiable messaging.',
        },
      ],
    },
    {
      topic: 'Development and Implementation',
      contents: [
        {
          title: 'How do I implement PayID?',
          description: (
            <>
              PayID is a free-to-use, fully open standard with an open source
              implementation. Any company can start using PayID by integrating a
              PayID server into their existing infrastructure using the
              reference implementation on GitHub. The{' '}
              <a
                href={`${getDocsLocation()}/ripplex-dev-kit-payid`}
                className="text-orange-500 focus:underline hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                RippleX Dev Kit
              </a>{' '}
              is the easiest way to enable “send to PayID” on your app.
            </>
          ),
        },
        {
          title: 'What tech is PayID built on?',
          description:
            'PayID is a web-based protocol built on a simple HTTP API secured by the standard web security stack, including TLS.',
        },
        {
          title: 'How does PayID handle security?',
          description:
            'PayID leverages tried-and-true security technologies that secure all internet services, including e-commerce and digital banking services. Additionally, PayID messages include cryptographic certificates and signatures that ensure participants in PayID transactions do not need to trust any counterparty.',
        },
        {
          title: 'How do I deploy a PayID server?',
          description: (
            <>
              <p>
                PayID is designed by devs for devs. You can deploy a PayID
                server with just a few commands with existing web
                infrastructure, and then integrate it into an application or
                account system with just a few lines of code.
              </p>
              <p className="mt-4">
                When you want to experiment with or deploy a PayID server, you
                have several options:
              </p>
              <ul className="mt-4 list-inside">
                <li className="list-disc hover:underline">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-500 focus:underline hover:underline"
                    href={`${getDocsLocation()}/local-deployment`}
                  >
                    Deploy Locally Without Docker
                  </a>
                </li>
                <li className="list-disc hover:underline">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-500 focus:underline hover:underline"
                    href={`${getDocsLocation()}/remote-deployment`}
                  >
                    Deploy a PayID server on AWS with NGINX reverse proxy
                  </a>
                </li>
                <li className="list-disc hover:underline">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-500 focus:underline hover:underline"
                    href={`${getDocsLocation()}/aws-lambda-deploy`}
                  >
                    Deploy on AWS Lambda
                  </a>
                </li>
              </ul>
            </>
          ),
        },
        {
          title: 'Where can I learn more about building with PayID?',
          description: (
            <>
              For other questions on PayID development and deployment, visit{' '}
              <a
                href={getDocsLocation()}
                className="text-orange-500 focus:underline hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                the docs page
              </a>
              .
            </>
          ),
        },
        {
          title: 'How can I try out a PayID server?',
          description: (
            <>
              <p>
                The{' '}
                <a
                  className="text-orange-500 focus:underline hover:underline"
                  target="_blank"
                  rel="noreferrer"
                  href={`${getBaseURL()}/sandbox`}
                >
                  PayID Sandbox{' '}
                </a>
                lets you experiment with PayID in a test environment. To use
                PayID Sandbox, log in with your GitHub account and follow the
                prompts. You can quickly set up a virtual test server, and then
                create users with simple PayID addresses that map to addresses
                on various payment networks.
              </p>
            </>
          ),
        },
        {
          title: 'How does the PayID protocol work?',
          description: (
            <>
              <p>
                With PayID, you can use human-readable addresses to transmit
                value in the currency of your choice. The PayID network allows
                participants to reach one another through a standardized
                address. For example, alice$wallet.com maps to the corresponding
                URL https://wallet.com/alice.
              </p>
              <p className="mt-4">
                When you make an HTTP GET request that follows the PayID
                protocol, it resolves to an address on the underlying payment
                network. PayID is a payment-network-agnostic protocol, capable
                of sending payments to any payment network.
              </p>
            </>
          ),
        },
        {
          title: 'What is the PayID reference implementation?',
          description: (
            <>
              <p>
                The Open Payments Coalition provides a reference implementation
                of the PayID protocol. Anyone may use this reference
                implementation or make changes to it. Other implementations can
                be created, as long as they follow the PayID protocol.
              </p>
              <p className="mt-4">
                The reference implementation uses TypeScript, a Node.js HTTP
                server, and a Postgres database. By default, the server hosts
                the PayID Protocol implementation, or Public API, on port 8080.
                It also hosts a second RESTful API on port 8081 for CRUD
                operations of PayIDs and associated addresses.
              </p>
            </>
          ),
        },
        {
          title: 'What are the requirements to run a PayID server?',
          description: (
            <>
              <p>
                To run a PayID server in a production environment, you should
                give each component of the stack a vCPU and 500 MB of RAM, and
                ensure there are at least two High-Availability replicas for
                each component.
              </p>
              <p className="mt-4">
                Here&apos;s how the requirements would break down:
              </p>
              <ul className="mt-4 list-inside">
                <li className="list-disc">
                  1 vCPU + 500 MB RAM per nginx replica (2x)
                </li>
                <li className="list-disc">
                  1 vCPU + 500 MB RAM per PayID Node.js server replica (2x)
                </li>
                <li className="list-disc">
                  1 vCPU + 500 MB RAM per Postgres replica (2x)
                </li>
              </ul>
            </>
          ),
        },
      ],
    },
  ]

  return (
    <Wave spacing="sm" waveClassNames="faq-bg">
      <div className="max-w-3xl pt-16 lg:pt-70">
        <h1 className="text-4xl font-bold sm:mb-10 mb-7 sm:text-h1 sm:leading-tighter">
          Understanding and Using PayID
        </h1>
      </div>

      <div className="flex mt-20 sm:mt-30">
        {/* Left Nav */}
        <div className="hidden mr-8 sm:block sm:w-56 md:w-72 md:mr-32 lg:-ml-16">
          <div className="sticky top-20">
            {sections.map((section, sectionIndex) => {
              return (
                <div className="mb-6" key={sectionIndex}>
                  <button
                    className={classNames(
                      'text-xs font-semibold hover:text-orange-500 focus:text-orange-500 focus:outline-none align-middle text-left',
                      {
                        'text-orange-500': expanded === sectionIndex,
                        'text-gray-200': expanded !== sectionIndex,
                      },
                    )}
                    disabled={expanded === sectionIndex}
                    onClick={(): void => {
                      setExpanded(sectionIndex)
                      setLeftQuestion(undefined)
                    }}
                  >
                    {section.topic}
                    <Arrow
                      className={classNames(
                        'h-2 ml-4 duration-500 transform inline-block',
                        {
                          'rotate-90': expanded === sectionIndex,
                          '-rotate-90': expanded !== sectionIndex,
                        },
                      )}
                    />
                  </button>
                  {expanded === sectionIndex && (
                    <div className="block mt-2 ml-4">
                      {section.contents.map((content, contentIndex) => {
                        return (
                          <a
                            key={contentIndex}
                            className={classNames(
                              'block mb-2 text-xs font-semibold hover:text-orange-500 focus:text-orange-500 outline-none',
                              {
                                'text-orange-500': contentIndex === active,
                                'text-gray-200': contentIndex !== active,
                              },
                            )}
                            href={`#${content.title}`}
                            onClick={(): void => setLeftQuestion(contentIndex)}
                          >
                            {content.title}
                          </a>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:max-w-md">
          {sections.map((section, sectionIndex) => {
            return (
              <div className="mt-20 sm:mt-30 first:mt-0" key={sectionIndex}>
                <h2 className="mb-10 text-3xl font-bold sm:text-4xl sm:mb-14">
                  {section.topic}
                </h2>
                {section.contents.map((content, contentIndex) => {
                  return (
                    <div key={contentIndex}>
                      <h3
                        className="mt-10 text-2xl font-bold sm:mt-12"
                        id={content.title}
                      >
                        {content.title}
                      </h3>
                      <p className="mt-4">{content.description}</p>
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
