import classNames from 'classnames'
import React, { useCallback, useState, useEffect } from 'react'

interface BannerProps {
  title: string
  link: string
  fixed: boolean
  description: string
  top: number
  enabled?: boolean
  setBannerShown: (shown: boolean) => void
}

export const getInitialBannerState = (title: string): boolean => {
  if (typeof window === 'undefined') return true
  return (
    !window.localStorage.getItem('bannerVisible') ||
    (!!window.localStorage.getItem('bannerVisible') &&
      window.localStorage.getItem('bannerVisible') !== title)
  )
}

const BannerHandler: React.FC<BannerProps> = ({
  title,
  link,
  fixed,
  description,
  top,
  setBannerShown,
}) => {
  const [showBanner, setShowBanner] = useState<boolean>(
    getInitialBannerState(title),
  )

  useEffect(() => {
    setBannerShown(showBanner)
  }, [showBanner])

  const hideBanner = useCallback(() => {
    setShowBanner(false)
    if (typeof window === 'undefined') return
    window.localStorage.setItem('bannerVisible', title)
  }, [setShowBanner, title])

  return (
    <div
      className={classNames(
        'w-full text-sm text-center text-white font-medium bg-gradient-r-orange-dark-to-light p-2 flex align-middle items-center h-10 mb-2',
        {
          'lg:top-0': top === 0 || !fixed,
          hidden: !showBanner,
        },
      )}
    >
      <a className="flex-1" href={link}>
        {description}
      </a>
      <button onClick={hideBanner} className="w-5 text-lg">
        x
      </button>
    </div>
  )
}

export default BannerHandler
