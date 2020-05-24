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
      text: 'Compliance',
      location: '/compliance',
    },
    {
      text: 'FAQ',
      location: '/faq',
    },
  ]

  return (
    <footer className="py-4 text-white bg-blue-dark-900 px-18">
      <div className="flex items-center">
        <Link to="/">
          <Logo />
        </Link>
        <div className="ml-18">
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
      <div className="flex pt-10 mb-4 text-xs font-black tracking-widest uppercase">
        <div>© {new Date().getFullYear()} Ripple, All Rights Reserved.</div>
        <Link
          to="/terms"
          className="ml-5 focus:text-orange-500 hover:text-orange-500"
        >
          Terms
        </Link>
        <Link
          to="/privacy"
          className="ml-5 focus:text-orange-500 hover:text-orange-500"
        >
          Privacy
        </Link>
      </div>
    </footer>
  )
}

export default Footer
