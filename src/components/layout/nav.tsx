import { Link } from 'gatsby'
import React from 'react'

import Button from '../common/button'

const Nav: React.FC = () => {
  const pages = [
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
    <nav className="flex items-center justify-between mx-12 my-8 text-dark-200">
      <Link to="/" className="text-3xl hover:text-dark-100">
        PayID
      </Link>
      <div>
        {pages.map((page) => {
          return (
            // TODO (@Stormtv) hover state bar
            <Link
              key={page.text}
              to={page.location}
              className="mr-20 hover:text-dark-100 last:mr-0"
            >
              {page.text}
            </Link>
          )
        })}
      </div>
      <Button to="/contact" label="Contact Us" />
    </nav>
  )
}

export default Nav
