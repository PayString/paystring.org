import { Link } from 'gatsby'
import React from 'react'

import Button from '../common/button'

const Nav: React.FC = () => {
  const links = [
    {
      text: 'Learn',
      location: '/learn',
    },
    {
      text: 'For Partners',
      location: '/partners',
    },
    {
      text: 'For Developers',
      location: '/developers',
    },
  ]

  return (
    <nav className="flex items-center justify-between mx-12 my-8 text-gray-800">
      <Link to="/" className="text-3xl hover:text-gray-1000">
        PayID
      </Link>
      <div>
        {links.map((link) => {
          return (
            // TODO (@Stormtv) hover state / active state
            <Link
              key={link.text}
              to={link.location}
              className="inline-block mr-20 hover:text-gray-1000 last:mr-0"
            >
              {link.text}
            </Link>
          )
        })}
      </div>
      <Button to="/contact" label="Contact Us" />
    </nav>
  )
}

export default Nav
