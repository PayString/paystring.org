import classNames from 'classnames'
import { Link } from 'gatsby'
import React, { useState, useCallback, useEffect } from 'react'

import Hamburger from '../../../content/assets/hamburger.svg'
import Logo from '../../../content/assets/logo.svg'
import useScroll from '../../utils/useScroll'
import Button from '../common/button'

interface NavProps {
  fixed?: boolean
}

const Nav: React.FC<NavProps> = (props: NavProps) => {
  const links = [
    {
      text: 'Vision',
      location: '/vision',
    },
    {
      text: 'Docs',
      location: 'https://docs.payid.org',
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

  const [expanded, setExpanded] = useState<boolean>(false)
  const { y, direction } = useScroll()

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
    <nav
      className={classNames('top-0 w-full text-white', {
        'fixed bg-blue-dark-900':
          props.fixed || expanded || (direction && direction === 'up' && y > 0),
        'absolute bg-transparent':
          !props.fixed &&
          !expanded &&
          (!direction || direction === 'down' || y <= 0),
      })}
    >
      <div className="container px-6 py-4 mx-auto lg:px-18">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
            <span className="sr-only">Home</span>
          </Link>
          <div className="hidden lg:block">
            {links.map((link) => {
              if (link.text !== 'Docs') {
                return (
                  <Link
                    key={link.text}
                    to={link.location}
                    className="inline-block mr-14 xl:mr-18 focus:text-orange-500 hover:text-orange-500 last:mr-0"
                    activeClassName="border-b-2 border-orange-500"
                    partiallyActive
                  >
                    {link.text}
                  </Link>
                )
              }

              return (
                <a
                  key={link.text}
                  href={link.location}
                  className="inline-block mr-14 xl:mr-18 focus:text-orange-500 hover:text-orange-500 last:mr-0"
                >
                  {link.text}
                </a>
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
          <ul
            role="menu"
            aria-label="navigation"
            className="pt-4 mb-6 lg:hidden"
          >
            {links.map((link) => {
              if (link.text !== 'Docs') {
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
              }

              return (
                <li role="none" key={link.text} className="mb-6">
                  <a
                    role="menuitem"
                    href={link.location}
                    className="focus:text-orange-500 hover:text-orange-500"
                  >
                    {link.text}
                  </a>
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
      </div>
    </nav>
  )
}

export default Nav
