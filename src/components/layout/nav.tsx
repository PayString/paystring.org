import classNames from 'classnames'
import { Link } from 'gatsby'
import React, { useState, useCallback, useEffect } from 'react'

import Hamburger from '../../assets/hamburger.svg'
import ComplianceIcon from '../../assets/layout/nav/compliance.svg'
import FaqIcon from '../../assets/layout/nav/faq.svg'
import VisionIcon from '../../assets/layout/nav/vision.svg'
import Logo from '../../assets/logo.svg'
import { getBaseURL, getDocsLocation } from '../../utils/config'
import useScroll from '../../utils/useScroll'
import Button from '../common/button'

import DesktopNavlinks from './DesktopNavlinks'
import MobileNavlinks from './MobileNavlinks'

interface NavProps {
  fixed?: boolean
}

const Nav: React.FC<NavProps> = (props: NavProps) => {
  const links = [
    {
      text: 'Learn',
      sublinks: [
        {
          text: 'Vision',
          location: '/our-vision-to-simplify-payments',
          icon: VisionIcon,
        },
        {
          text: 'Compliance',
          location: '/compliance-and-regulations',
          icon: ComplianceIcon,
        },
        {
          text: 'FAQ',
          location: '/universal-payment-identifier-faqs',
          icon: FaqIcon,
        },
      ],
    },
    {
      text: 'Wallets & Exchanges',
      location: '/wallets-and-exchanges',
    },
    {
      text: 'Docs',
      location: getDocsLocation(),
    },
    {
      text: 'Use Cases',
      location: '/use-cases',
    },
    // {
    //   text: 'Companies',
    //   location: '/about-us',
    // },
    {
      text: 'Blog',
      location: 'https://blog.payid.org/',
    },
    // {
    //   text: 'Contact Us',
    //   location: '/contact',
    // },
  ]

  const [expanded, setExpanded] = useState<boolean>(false)

  // const getInitialBannerState = () => {
  //   if (typeof window === 'undefined') return true
  //   return (
  //     window.localStorage.getItem('bannerVisible') === null ||
  //     window.localStorage.getItem('bannerVisible') !== 'hackathon'
  //   )
  // }

  // const [bannerVisible, setBannerVisible] = useState<boolean>(
  //   getInitialBannerState(),
  // )

  // const hideBanner = () => {
  //   setBannerVisible(false)
  //   if (typeof window === 'undefined') return
  //   window.localStorage.setItem('bannerVisible', 'hackathon')
  // }

  const { y, direction } = useScroll()

  const shouldBeFixed = (): boolean => {
    if (typeof window === 'undefined' || props.fixed || expanded) return true
    return !!(
      direction &&
      direction === 'up' &&
      ((window.outerHeight >= 1024 && y >= 48) ||
        (window.outerHeight < 1024 && y > 0))
    )
  }

  // const shouldShowBanner = (): boolean => {
  //   return !shouldBeFixed() && bannerVisible
  // }

  const closeExpandedMenu = useCallback((event: KeyboardEvent) => {
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
        'fixed bg-blue-dark-900 z-20': shouldBeFixed(),
        'absolute bg-transparent': !shouldBeFixed(),
      })}
    >
      {/* {shouldShowBanner() && (
        <div
          className={classNames(
            'w-full py-1 text-sm text-center text-gray-300 bg-gray-800 lg:top-0 lg:absolute',
          )}
        >
          <span>
            Participate in the{' '}
            <a
              href="https://payid.devpost.com/?utm_source=payid.org&utm_medium=banner"
              className="underline"
            >
              PayID Hackathon
            </a>{' '}
            and win up to $15K! Submissions are due by 5:00pm PDT Aug 2, 2020
          </span>
          <button
            onClick={() => hideBanner()}
            className="absolute top-0 right-0 w-16 text-lg"
          >
            x
          </button>
        </div>
      )} */}
      <div
        className={classNames('flex w-full justify-center px-6 lg:px-18', {
          'lg:mt-12': !shouldBeFixed(),
        })}
      >
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Logo
                className="h-10-5"
                role="img"
                aria-label="PayID: Unifying payments through a universal payment identifier to simplify sending and receiving payments"
              />
              <span className="sr-only">Home</span>
            </Link>
            <div className="hidden lg:block">
              {links.map((link) => {
                return <DesktopNavlinks key={link.text} {...link} />
              })}
              <Button
                to={`${getBaseURL()}/sandbox`}
                label="Sign In"
                className="inline-block"
              />
            </div>
            <button
              aria-haspopup
              aria-expanded={expanded}
              aria-label="Navigation Menu"
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
                return <MobileNavlinks key={link.text} {...link} />
              })}
              <Button
                role="menuitem"
                to={`${getBaseURL()}/sandbox`}
                label="Sign In"
                className="inline-block"
              />
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav
