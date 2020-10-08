import { useLocation } from '@reach/router'
import classNames from 'classnames'
import { Link } from 'gatsby'
import debounce from 'lodash.debounce'
import React, { useState, useCallback } from 'react'

import NavigationUp from '../../assets/layout/nav/navUp.svg'

import useCloseOnScroll from './useCloseOnScroll'
import useSublinkMatch, { NavlinkProps } from './useSublinkMatch'

const DesktopNavlinks: React.FC<NavlinkProps> = ({
  text,
  location,
  sublinks = [],
}) => {
  const [showSubLinks, setShowSublinks] = useState(false)
  const { pathname } = useLocation()
  const sublinkMatch = useSublinkMatch(location, sublinks)

  useCloseOnScroll(() => {
    setShowSublinks(false)
  })

  const debouncedSetShowSublinks = useCallback<
    React.Dispatch<React.SetStateAction<boolean>>
  >(
    debounce<React.Dispatch<React.SetStateAction<boolean>>>(
      setShowSublinks,
      150,
    ),
    [setShowSublinks],
  )

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (![32, 13].includes(e.charCode)) {
        return
      }

      e.preventDefault()

      setShowSublinks(!showSubLinks)
    },
    [setShowSublinks, showSubLinks],
  )

  if (sublinks.length > 0) {
    return (
      <button
        className="inline-block mr-18 last:mr-0"
        aria-haspopup="true"
        aria-expanded={showSubLinks}
        onMouseOver={() =>
          // Debounce to handle case where the mouse is coming from the submenu back to the main link text
          // Otherwise immediately set submenu shown to allow menu to pop up quickly on first hover
          showSubLinks ? debouncedSetShowSublinks(true) : setShowSublinks(true)
        }
        onMouseOut={() => debouncedSetShowSublinks(false)}
        onKeyPress={handleKeyPress}
        onFocus={() =>
          showSubLinks ? debouncedSetShowSublinks(true) : setShowSublinks(true)
        }
        onBlur={() => debouncedSetShowSublinks(false)}
      >
        <span
          className={classNames(
            'cursor-pointer inline-block focus:text-orange-500 hover:text-orange-500',
            {
              'border-b-2 border-orange-500': sublinkMatch,
            },
          )}
        >
          {text}
          {!showSubLinks && (
            <NavigationUp className="inline ml-2 transform rotate-180" />
          )}
          {showSubLinks && <NavigationUp className="inline ml-2" />}
        </span>
        {/* box-shadow: 0px 27px 54px rgba(0, 0, 0, 0.2); */}
        {showSubLinks && (
          <ul
            className="absolute mt-4 -ml-32 border-t border-blue-800 shadow-2xl w-78 bg-blue-dark-900"
            onMouseOver={() => debouncedSetShowSublinks(true)}
            onBlur={() => debouncedSetShowSublinks(false)}
            onFocus={() => debouncedSetShowSublinks(true)}
          >
            {sublinks.map((sublink, idx) => {
              return (
                <li
                  key={sublink.text}
                  className={classNames(
                    {
                      'mt-10': idx === 0,
                    },
                    {
                      'mb-6': idx !== sublinks.length - 1,
                    },
                    {
                      'mb-10': idx === sublinks.length - 1,
                    },
                  )}
                >
                  <Link
                    onClick={() => setShowSublinks(false)}
                    to={sublink.location || '/'}
                    partiallyActive
                    className="flex focus:text-orange-500 hover:text-orange-500"
                  >
                    {sublink.icon && (
                      <sublink.icon className="w-12 ml-20 mr-1" />
                    )}
                    <span
                      className={classNames('m-auto ml-4 mr-0', {
                        'border-b-2 border-orange-500':
                          sublink.location &&
                          pathname.includes(sublink.location || ''),
                      })}
                    >
                      {sublink.text}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </button>
    )
  }
  if (text !== 'Docs' && text !== 'Blog') {
    return (
      <Link
        to={location || '/'}
        className="inline-block mr-12 xl:mr-18 focus:text-orange-500 hover:text-orange-500 last:mr-0"
        activeClassName="border-b-2 border-orange-500"
        partiallyActive
      >
        {text}
      </Link>
    )
  }

  return (
    <a
      href={location}
      className="inline-block mr-12 xl:mr-18 focus:text-orange-500 hover:text-orange-500 last:mr-0"
    >
      {text}
    </a>
  )
}

export default DesktopNavlinks
