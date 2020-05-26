import classNames from 'classnames'
import { Link } from 'gatsby'
import React, { useState, useCallback, useEffect } from 'react'

import Hamburger from '../../../content/assets/hamburger.svg'
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

  const [expanded, setExpanded] = useState<boolean>(false)

  const closeExpandedMenu = useCallback((event) => {
    if (event.keyCode === 27) setExpanded(false)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', closeExpandedMenu, false)

    return (): void => {
      document.removeEventListener('keydown', closeExpandedMenu, false)
    }
  }, [])

  return (
    <nav className="fixed top-0 z-20 w-screen px-6 py-4 text-white bg-blue-dark-900 lg:px-18">
      <div className="flex items-center justify-between">
        <Link to="/">
          <Logo />
          <span className="sr-only">Home</span>
        </Link>
        <div className="hidden lg:block">
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
        <button
          aria-haspopup
          aria-expanded={expanded}
          onClick={(): void => setExpanded(!expanded)}
          className={classNames(
            'cursor-pointer lg:hidden hover:text-orange-500 focus:text-orange-500',
            {
              'text-orange-500': expanded,
            },
          )}
        >
          <Hamburger />
        </button>
      </div>
      {expanded && (
        <ul role="menu" aria-label="navigation" className="pt-4 mb-6 lg:hidden">
          {links.map((link) => {
            return (
              <li role="none" key={link.text} className="mb-6">
                <Link
                  role="menuitem"
                  to={link.location}
                  className="focus:text-orange-500 hover:text-orange-500"
                  activeClassName="border-b-2 border-orange-500"
                  partiallyActive
                >
                  {link.text}
                </Link>
              </li>
            )
          })}
          <Button
            role="menuitem"
            to="/contact"
            label="Contact Us"
            className="inline-block"
          />
        </ul>
      )}
    </nav>
  )
}

export default Nav
