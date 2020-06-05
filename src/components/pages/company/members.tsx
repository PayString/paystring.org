import React from 'react'

import LogoBRD from '../../../../content/assets/company/members/logo-brd.svg'
import LogoRipple from '../../../../content/assets/company/members/logo-ripple.svg'
import Wave from '../../common/wave'

const Members: React.FC = () => {
  const iconClasses = 'h-52 mx-auto '
  const sectionCopy = [
    {
      icon: <LogoRipple className={iconClasses} />,
      title: 'Ripple',
    },
    {
      icon: <LogoBRD className={iconClasses} />,
      title: 'Crypto.com',
    },
    {
      icon: <LogoRipple className={iconClasses} />,
      title: 'Blockchain.com',
    },
    {
      icon: <LogoBRD className={iconClasses} />,
      title: 'BRD',
    },
    {
      icon: <LogoRipple className={iconClasses} />,
      title: 'Ripple',
    },
    {
      icon: <LogoBRD className={iconClasses} />,
      title: 'Crypto.com',
    },
    {
      icon: <LogoRipple className={iconClasses} />,
      title: 'Blockchain.com',
    },
    {
      icon: <LogoBRD className={iconClasses} />,
      title: 'BRD',
    },
    {
      icon: <LogoRipple className={iconClasses} />,
      title: 'Ripple',
    },
    {
      icon: <LogoBRD className={iconClasses} />,
      title: 'Crypto.com',
    },
    {
      icon: <LogoRipple className={iconClasses} />,
      title: 'Blockchain.com',
    },
    {
      icon: <LogoBRD className={iconClasses} />,
      title: 'BRD',
    },
    {
      icon: <LogoRipple className={iconClasses} />,
      title: 'Ripple',
    },
    {
      icon: <LogoBRD className={iconClasses} />,
      title: 'Crypto.com',
    },
    {
      icon: <LogoRipple className={iconClasses} />,
      title: 'Blockchain.com',
    },
    {
      icon: <LogoBRD className={iconClasses} />,
      title: 'BRD',
    },
  ]

  return (
    <Wave background="white" wave="gray">
      <div className="flex justify-center">
        <h2 className="max-w-2xl mb-16 text-3xl font-bold sm:text-5xl sm:text-center sm:mb-28">
          Founding Members
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-8 px-0 text-center lg:grid-cols-4 sm:gap-20">
        {sectionCopy.map((copy) => {
          return (
            <div key={copy.title}>
              {copy.icon}
              <h2 className="text-2xl text-center">{copy.title}</h2>
            </div>
          )
        })}
      </div>
    </Wave>
  )
}

export default Members
