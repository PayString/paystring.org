import React from 'react'

import IconCharity from '../../../content/assets/common/extensions/charity.svg'
import IconCommerce from '../../../content/assets/common/extensions/commerce.svg'
import IconGettingPaid from '../../../content/assets/common/extensions/getting-paid.svg'
import IconInvoicing from '../../../content/assets/common/extensions/invoicing.svg'
import IconP2P from '../../../content/assets/common/extensions/p2p.svg'
import IconUtilities from '../../../content/assets/common/extensions/utilities.svg'

import Wave from './wave'

const Extensions: React.FC = () => {
  const iconClasses = 'h-12.5 sm:h-14 mb-5 md:mb-10'
  const sectionCopy = [
    {
      icon: <IconCharity className={iconClasses} />,
      title: 'Charity',
      description: 'Simpler to donate money to your favorite organizations.',
    },
    {
      icon: <IconP2P className={iconClasses} />,
      title: 'P2P Payments',
      description: 'Simpler to pay back your friends and family.',
    },
    {
      icon: (
        <span className="text-orange-dark-500">TODO DESIGN NEW IMAGE!!!!</span>
      ),
      title: 'Digital Identity',
      description: 'Simpler to know who you are paying.',
    },
    {
      icon: <IconGettingPaid className={iconClasses} />,
      title: 'Getting Paid',
      description: 'Simpler to earn a living.',
    },
    {
      icon: <IconCommerce className={iconClasses} />,
      title: 'Commerce',
      description: 'Simpler to get the things you need.',
    },
    {
      icon: <IconInvoicing className={iconClasses} />,
      title: 'Invoicing',
      description: 'Simpler for your business to get paid for what it makes.',
    },
  ]

  return (
    <Wave background="gray" wave="white">
      <div className="flex justify-center">
        <h2 className="max-w-2xl text-3xl font-bold mb-14 sm:text-5xl sm:text-center md:mb-25">
          Other Extensions for PayID
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-15 md:gap-30 md:grid-cols-2 lg:grid-cols-3">
        {sectionCopy.map((copy) => {
          return (
            <div key={copy.title}>
              {copy.icon}
              <h3 className="text-2xl font-bold sm:text-3xl">{copy.title}</h3>
              <p className="mt-4 sm:text-xl">{copy.description}</p>
            </div>
          )
        })}
      </div>
    </Wave>
  )
}

export default Extensions
