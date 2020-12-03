import { Link } from 'gatsby'
import React from 'react'

import Logo from '../../assets/logo.svg'
import { getDocsLocation } from '../../utils/config'

const Footer: React.FC = () => {
  const links = [
    {
      text: 'Vision',
      location: '/our-vision-to-simplify-payments',
    },
    {
      text: 'Docs',
      location: getDocsLocation(),
    },
    {
      text: 'Use Cases',
      location: '/use-cases',
    },
    {
      text: 'Companies',
      location: '/about-us',
    },
    {
      text: 'Compliance',
      location: '/compliance-and-regulations',
    },
    {
      text: 'FAQ',
      location: '/universal-payment-identifier-faqs',
    },
    {
      text: 'Press Kit',
      location:
        'https://www.dropbox.com/sh/ghyjfo40zmhgl98/AABZTCuNjevhuk_6P3vg4jdXa?dl=0',
    },
    {
      text: 'Contact Us',
      location: '/contact',
    },
  ]

  return (
    <footer className="flex justify-center px-6 text-white bg-blue-dark-900 lg:px-18">
      <div className="container py-4">
        <div className="flex flex-col xl:items-center xl:flex-row">
          <div className="h-9">
            <Link to="/" className="inline-block">
              <Logo className="h-9" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
          <div className="grid grid-flow-col grid-rows-4 mt-12 gap-y-8 gap-x-4 md:mt-10 xl:mt-0 sm:grid-rows-2 lg:grid-rows-1 lg:gap-x-12 xl:gap-x-14 xl:ml-14">
            {links.map((link) => {
              if (link.text !== 'Docs' && link.text !== 'Press Kit') {
                return (
                  <Link
                    key={link.text}
                    to={link.location}
                    className="focus:text-orange-500 hover:text-orange-500"
                  >
                    {link.text}
                  </Link>
                )
              }

              return (
                <a
                  key={link.text}
                  href={link.location}
                  className="focus:text-orange-500 hover:text-orange-500"
                >
                  {link.text}
                </a>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col mt-12 mb-12 text-xs font-semibold md:mb-4 md:mt-10 md:flex-row">
          <div>
            This site is operated by Ripple on behalf of the PayString community
          </div>
          <a
            href="/terms.pdf"
            target="_blank"
            rel="noreferrer"
            className="block mt-8 md:mt-0 md:ml-5 focus:text-orange-500 hover:text-orange-500 md:inline-block"
          >
            Terms
          </a>
          <a
            href="/privacy.pdf"
            target="_blank"
            rel="noreferrer"
            className="block mt-8 md:mt-0 md:ml-5 focus:text-orange-500 hover:text-orange-500 md:inline-block"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
