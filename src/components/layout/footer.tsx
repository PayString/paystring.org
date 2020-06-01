import { Link } from 'gatsby'
import React from 'react'

import Logo from '../../../content/assets/logo.svg'

const Footer: React.FC = () => {
  const links = [
    {
      text: 'Vision',
      location: '/vision',
    },
    {
      text: 'Developers',
      location: '/developers',
    },
    {
      text: 'Company',
      location: '/company',
    },
    {
      text: 'Compliance',
      location: '/compliance',
    },
    {
      text: 'FAQ',
      location: '/faq',
    },
  ]

  return (
    <footer className="px-6 py-4 text-white bg-blue-dark-900 md:px-18">
      <div className="flex items-center">
        <Link to="/">
          <Logo />
          <span className="sr-only">Home</span>
        </Link>
        <div className="hidden ml-18 md:block">
          {links.map((link) => {
            return (
              <Link
                key={link.text}
                to={link.location}
                className="inline-block mr-18 focus:text-orange-500 hover:text-orange-500 last:mr-0"
              >
                {link.text}
              </Link>
            )
          })}
        </div>
      </div>
      <div className="grid grid-flow-col grid-rows-2 row-gap-8 col-gap-4 mt-12 md:hidden">
        {links.map((link) => {
          return (
            <Link
              key={link.text}
              to={link.location}
              className="focus:text-orange-500 hover:text-orange-500"
            >
              {link.text}
            </Link>
          )
        })}
      </div>
      <div className="mt-12 mb-12 text-xs font-black tracking-widest uppercase md:mb-4 md:mt-10 md:flex">
        <div>© {new Date().getFullYear()} Ripple, All Rights Reserved.</div>
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
    </footer>
  )
}

export default Footer
