import classNames from 'classnames'
import { Link } from 'gatsby'
import React, { useState, useCallback, useEffect, useMemo } from 'react'

import Hamburger from '../../assets/hamburger.svg'
import ApiDocumentIcon from '../../assets/layout/nav/api-document.svg'
import CompanyIcon from '../../assets/layout/nav/companies.svg'
import ComplianceIcon from '../../assets/layout/nav/compliance.svg'
import DeveloperDocsIcon from '../../assets/layout/nav/developer-docs.svg'
import FaqIcon from '../../assets/layout/nav/faq.svg'
import SandboxIcon from '../../assets/layout/nav/sandbox.svg'
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
          text: 'Companies',
          location: '/about-us',
          icon: CompanyIcon,
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
      text: 'Developers',
      sublinks: [
        {
          text: 'Developer Docs',
          description: 'Explore what developers are building',
          icon: DeveloperDocsIcon,
          location: getDocsLocation(),
          external: true,
        },
        {
          text: 'Sandbox',
          description: 'Experiment with PayID Sandbox',
          location: `${getBaseURL()}/sandbox`,
          icon: SandboxIcon,
        },
        {
          text: 'API Documentation',
          description: 'Start building with PayID',
          location: 'https://api.payid.org/',
          icon: ApiDocumentIcon,
          external: true,
        },
      ],
      resource: {
        title: 'Community Resources',
        links: [
          {
            text: 'Join Discord',
            location: 'https://chat.payid.org/',
            external: true,
          },
          {
            text: 'GitHub Repository',
            location: 'https://github.com/payid-org/payid',
            external: true,
          },
        ],
      },
    },
    {
      text: 'Use Cases',
      location: '/use-cases',
    },
    {
      text: 'Blog',
      location: 'https://blog.payid.org/',
    },
    {
      text: 'Sign In',
      location: `${getBaseURL()}/sandbox`,
    },
  ]

  const bannerProps = {
    title: 'payme-plus',
    description: 'Get a PayID today with PayMe+',
    link:
      'https://www.payme.plus/?utm_source=RippleBanner&utm_medium=link&utm_campaign=RippleWebBanner',
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
      className={classNames('top-0 w-full text-white z-20', {
        'fixed bg-blue-dark-900': shouldBeFixed,
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
        className={classNames(
          'flex w-full justify-center px-6 lg:px-8 xl:px-18',
          {
            'lg:mt-12': !shouldBeFixed,
          },
        )}
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
              <Button to="contact" label="Contact Us" />
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
                to="contact"
                label="Contact Us"
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
