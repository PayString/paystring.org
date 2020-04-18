import { Link } from 'gatsby'
import React from 'react'

import Button from '../common/button'

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
    <footer className="px-20 pt-24 bg-bright-100">
      <div className="flex justify-between mx-3">
        <h2 className="mb-32 text-4xl font-black text-dark-100">
          Have Questions? Reach out to us anytime. We&apos;re here to help.
        </h2>
        <div className="ml-20">
          <Button to="/contact" label="Contact Us" />
        </div>
      </div>
      <div className="flex items-center text-dark-200">
        <Link to="/" className="text-2xl hover:text-dark-100">
          PayID
        </Link>
        <div className="ml-20">
          {links.map((link) => {
            return (
              // TODO (@Stormtv) hover state / active state
              <Link
                key={link.text}
                to={link.location}
                className="inline-block mr-20 hover:text-dark-100 last:mr-0"
              >
                {link.text}
              </Link>
            )
          })}
        </div>
      </div>
      <div className="flex pt-12 pb-10 text-xs tracking-wide uppercase text-dark-100">
        <div>© {new Date().getFullYear()} Ripple, All Rights Reserved.</div>
        <Link to="/terms" className="ml-3 hover:text-dark-200">
          Terms
        </Link>
        <Link to="/privacy" className="ml-3 hover:text-dark-200">
          Privacy
        </Link>
      </div>
    </footer>
  )
}

export default Footer
