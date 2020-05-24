import { Link } from 'gatsby'
import React from 'react'

import Logo from '../../../content/assets/logo.svg'
import Button from '../common/button'

const Nav: React.FC = () => {
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
    <nav className="flex items-center justify-between py-4 text-white bg-blue-dark-900 px-18">
      <Link to="/">
        <Logo />
        <span className="sr-only">Home</span>
      </Link>
      <div>
        {links.map((link) => {
          return (
            <Link
              key={link.text}
              to={link.location}
              className="inline-block mr-18 focus:text-orange-500 hover:text-orange-500 last:mr-0"
              activeClassName="border-b-2 border-orange-500"
              partiallyActive
            >
              {link.text}
            </Link>
          )
        })}
        <Button to="/contact" label="Contact Us" className="inline-block" />
      </div>
    </nav>
  )
}

export default Nav
