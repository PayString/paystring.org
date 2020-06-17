import { Link } from 'gatsby'
import React from 'react'

import Logo from '../../../content/assets/logo.svg'
import getDocsLocation from '../../utils/config'

const Footer: React.FC = () => {
  const links = [
    {
      text: 'Vision',
      location: '/vision',
    },
    {
      text: 'Docs',
      location: `${getDocsLocation()}/docs/payid-overview`,
    },
    {
      text: 'Companies',
      location: '/companies',
    },
    {
      text: 'Compliance',
      location: '/compliance',
    },
    {
      text: 'FAQ',
      location: '/faq',
    },
    {
      text: 'Press Release',
      location: 'https://www.dropbox.com/home/PayID%20Press%20Kit',
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
          <div className="h-10.5">
            <Link to="/" className="inline-block">
              <Logo />
              <span className="sr-only">Home</span>
            </Link>
          </div>
          <div className="grid grid-flow-col grid-rows-4 row-gap-8 col-gap-4 mt-12 md:mt-10 xl:mt-0 sm:grid-rows-2 lg:grid-rows-1 lg:col-gap-18 xl:ml-18">
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
        <div className="mt-12 mb-12 text-xs font-black tracking-widest uppercase md:mb-4 md:mt-10 md:flex">
          <div>
            This site is operated by Ripple on behalf of the PayID community
          </div>
          <Link
            to="/terms"
            className="block mt-8 md:mt-0 md:ml-5 focus:text-orange-500 hover:text-orange-500 md:inline-block"
          >
            Terms
          </Link>
          <Link
            to="/privacy"
            className="block mt-8 md:mt-0 md:ml-5 focus:text-orange-500 hover:text-orange-500 md:inline-block"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
