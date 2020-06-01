import React from 'react'

import IconCharity from '../../../../content/assets/compliance/extensions/charity.svg'
import IconCommerce from '../../../../content/assets/compliance/extensions/commerce.svg'
import IconGettingPaid from '../../../../content/assets/compliance/extensions/getting-paid.svg'
import IconInvoicing from '../../../../content/assets/compliance/extensions/invoicing.svg'
import IconP2P from '../../../../content/assets/compliance/extensions/p2p.svg'
import IconUtilities from '../../../../content/assets/compliance/extensions/utilities.svg'
import Wave from '../../common/wave'

const Extensions: React.FC = () => {
  const sectionCopy = [
    {
      icon: <IconCharity className="h-12.5 sm:h-14" />,
      title: 'Charity',
      description: 'Simpler to donate money to your favorite organizations.',
    },
    {
      icon: <IconP2P className="h-12.5 sm:h-14" />,
      title: 'P2P Payments',
      description: 'Simpler to pay back your friends and family.',
    },
    {
      icon: <IconUtilities className="h-12.5 sm:h-14" />,
      title: 'Utilities and Rent',
      description: 'Simpler to pay your bills.',
    },
    {
      icon: <IconGettingPaid className="h-12.5 sm:h-14" />,
      title: 'Getting Paid',
      description: 'Simpler to earn a living.',
    },
    {
      icon: <IconCommerce className="h-12.5 sm:h-14" />,
      title: 'Commerce',
      description: 'Simpler to get the things you need.',
    },
    {
      icon: <IconInvoicing className="h-12.5 sm:h-14" />,
      title: 'Invoicing',
      description: 'Simpler for your business to get paid for what it makes.',
    },
  ]

  return (
    <Wave background="gray" wave="white">
      <div className="flex justify-center w-full mb-12 sm:mb-52">
        <h2 className="max-w-md text-3xl font-bold sm:text-5xl sm:text-center">
          Other Extensions for PayID
        </h2>
      </div>
      <div className="flex grid flex-wrap grid-cols-1 px-0 gap-15 sm:gap-30 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm-px-29">
        {sectionCopy.map((copy) => {
          return (
            <div key={copy.title} className="flex-grow">
              <div className="mb-5 sm:mb-10">{copy.icon}</div>
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