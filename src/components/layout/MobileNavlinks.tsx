import { useLocation } from '@reach/router'
import classNames from 'classnames'
import { Link } from 'gatsby'
import React, { useState, useCallback } from 'react'

import NavigationUp from '../../assets/layout/nav/navUp.svg'

import useSublinkMatch, { NavlinkProps } from './useSublinkMatch'

const RenderLink: React.FC<NavlinkProps> = ({ text, location }) => {
  if (text !== 'Docs') {
    return (
      <li role="none" key={text} className="mb-6">
        <Link
          role="menuitem"
          to={location || '/'}
          className="focus:text-orange-500 hover:text-orange-500"
          activeClassName="border-b-2 border-orange-500"
          partiallyActive
        >
          {text}
        </Link>
      </li>
    )
  }

  return (
    <li role="none" key={text} className="mb-6">
      <a
        role="menuitem"
        href={location}
        className="focus:text-orange-500 hover:text-orange-500"
      >
        {text}
      </a>
    </li>
  )
}

const MobileNavlinks: React.FC<NavlinkProps> = (props) => {
  const { text, location, sublinks = [] } = props
  const { pathname } = useLocation()
  const sublinkMatch = useSublinkMatch(location, sublinks)
  const [showOptions, setShowOptions] = useState(sublinkMatch)

  const toggleShowOptions = useCallback(() => {
    setShowOptions(!showOptions)
  }, [showOptions, setShowOptions])

  if (sublinks.length > 0) {
    return (
      <li role="none" key={text} className="mb-6">
        <button
          aria-haspopup="true"
          aria-expanded={showOptions}
          className={classNames(
            'focus:text-orange-500 hover:text-orange-500 cursor-pointer',
            {
              'border-b-2 border-orange-500': sublinkMatch,
            },
          )}
          onClick={toggleShowOptions}
        >
          {text}
          {!showOptions && (
            <NavigationUp className="inline ml-2 transform rotate-180" />
          )}
          {showOptions && <NavigationUp className="inline ml-2" />}
        </button>
        {showOptions && (
          <ul className="mt-6 border-t border-b bg-blue-dark-900 border-blue-dark-800">
            {sublinks.map((sublink, idx) => {
              return (
                <li
                  key={sublink.text}
                  className={classNames(
                    {
                      'mt-3': idx === 0,
                    },
                    {
                      'mb-3': idx === sublinks.length - 1,
                    },
                    {
                      'mb-5': idx !== sublinks.length - 1,
                    },
                  )}
                >
                  <Link
                    onClick={() => toggleShowOptions()}
                    to={sublink.location || '/'}
                    partiallyActive
                    className="flex focus:text-orange-500 hover:text-orange-500"
                  >
                    {sublink.icon && <sublink.icon className="w-10" />}
                    <span
                      className={classNames('m-auto mr-0 ml-5 font-medium', {
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
      </li>
    )
  }
  return <RenderLink {...props} />
}

export default MobileNavlinks
