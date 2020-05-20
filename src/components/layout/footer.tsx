import { Link } from 'gatsby'
import React from 'react'

import Button, { ButtonTheme } from '../common/button'

const Footer: React.FC = () => {
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
    {
      text: 'Contact Us',
      location: '/contact',
    },
  ]

  return (
    <footer className="px-20 pt-24 bg-gray-200">
      <div className="flex justify-between mx-3">
        <h2 className="mb-32 text-4xl font-black text-gray-1000">
          Have Questions? Reach out to us anytime. We&apos;re here to help.
        </h2>
        <div className="ml-20">
          <Button theme={ButtonTheme.orange} to="/contact" label="Contact Us" />
        </div>
      </div>
      <div className="flex items-center text-gray-800">
        <Link to="/" className="text-2xl hover:text-gray-1000">
          PayID
        </Link>
        <div className="ml-20">
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
      </div>
      <div className="flex pt-12 pb-10 text-xs tracking-wide text-gray-800 uppercase">
        <div>© {new Date().getFullYear()} Ripple, All Rights Reserved.</div>
        <Link to="/terms" className="ml-3 hover:text-gray-1000">
          Terms
        </Link>
        <Link to="/privacy" className="ml-3 hover:text-gray-1000">
          Privacy
        </Link>
      </div>
    </footer>
  )
}

export default Footer
