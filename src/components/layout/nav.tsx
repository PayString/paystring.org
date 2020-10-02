import classNames from 'classnames'
import { Link } from 'gatsby'
import React, { useState, useCallback, useEffect, useMemo } from 'react'

import Hamburger from '../../assets/hamburger.svg'
import ComplianceIcon from '../../assets/layout/nav/compliance.svg'
import FaqIcon from '../../assets/layout/nav/faq.svg'
import VisionIcon from '../../assets/layout/nav/vision.svg'
import Logo from '../../assets/logo.svg'
import { getBaseURL, getDocsLocation } from '../../utils/config'
import useScroll from '../../utils/useScroll'
import Button from '../common/button'

import BannerHandler, { getInitialBannerState } from './BannerHandler'
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

  const bannerProps = {
    title: 'oct20-event',
    description: 'Register for our PayID Virtual Event on Oct 12-13!',
    link: 'https://lp.payid.org/october-event-registration-0',
    enabled: true,
  }

  const yOffsetWithBanner = 8
  const yOffsetWithoutBanner = 48

  const [expanded, setExpanded] = useState<boolean>(false)
  const [bannerShown, setBannerShown] = useState(
    bannerProps.enabled && getInitialBannerState(bannerProps.title),
  )

  const { y, direction } = useScroll()
  const shouldBeFixed = useMemo((): boolean => {
    if (typeof window === 'undefined' || props.fixed || expanded) return true
    const fixedYOffset = bannerShown ? yOffsetWithBanner : yOffsetWithoutBanner
    return !!(
      direction &&
      direction === 'up' &&
      ((window.outerHeight >= 1024 && y >= fixedYOffset) ||
        (window.outerHeight < 1024 && y > 0))
    )
  }, [props.fixed, expanded, direction, y, bannerShown])

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
        'fixed bg-blue-dark-900 z-20': shouldBeFixed,
        'absolute bg-transparent': !shouldBeFixed,
      })}
    >
      <BannerHandler
        {...bannerProps}
        fixed={shouldBeFixed}
        top={y}
        setBannerShown={setBannerShown}
      />
      <div
        className={classNames('flex w-full justify-center px-6 lg:px-18', {
          'lg:mt-12': !shouldBeFixed,
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
