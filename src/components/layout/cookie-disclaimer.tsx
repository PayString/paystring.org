import React, { useState } from 'react'

import Button from '../common/button'

const CookieDisclaimer: React.FC = () => {
  const [dismissed, setDismissed] = useState<boolean>(
    typeof window !== 'undefined'
      ? window.localStorage.getItem('dismissedCookies') !== null
      : false,
  )

  const dismiss = (): void => {
    setDismissed(true)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('dismissedCookies', 'true')
    }
  }

  if (!dismissed) {
    return (
      <div className="fixed bottom-0 z-20 flex items-center justify-between w-full p-4 px-6 text-sm text-white lg:px-18 bg-blue-dark-900">
        <span>
          We use cookies to understand how you use our site and to improve your
          experience. By continuing to use our site, you accept our use of
          cookies and{' '}
          <a
            href="/static/PayID.org_Privacy_Policy.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-orange-500 focus:underline hover:underline"
          >
            Privacy Policy
          </a>
          .
        </span>
        <Button
          onClick={dismiss}
          size="xs"
          variant="secondary"
          label="Dismiss"
          className="ml-8"
        />
      </div>
    )
  }

  return <></>
}

export default CookieDisclaimer
