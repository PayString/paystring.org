import React from 'react'

import IconGreen from '../../../../content/assets/compliance/synergy/check-green.svg'
import IconOrange from '../../../../content/assets/compliance/synergy/check-orange.svg'
import IconPurple from '../../../../content/assets/compliance/synergy/check-purple.svg'
import TrisaLogo from '../../../../content/assets/compliance/synergy/trisa-logo.svg'
import Logo from '../../../../content/assets/logo.svg'
import Wave from '../../common/wave'

const Synergy: React.FC = () => {
  const iconClasses = 'h-12.5 sm:h-14 lg:float-left pr-15 my-5'
  const sectionCopy = [
    {
      icon: <IconPurple className={iconClasses} />,
      title: 'Free and open source',
    },
    {
      icon: <IconGreen className={iconClasses} />,
      title: 'Built on proven tech',
    },
    {
      icon: <IconOrange className={iconClasses} />,
      title: 'Designed for interoperability and scalability',
    },
  ]

  return (
    <Wave background="gray" wave="blue" direction="rtl" spacing="lg">
      <h2 className="max-w-xl mb-6 text-3xl font-bold text-left sm:text-5xl sm:mb-10 sm:text-center md:text-left">
        PayID Composability and TRISA Integration
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:gap-20 sm:text-xl md:grid-cols-2">
        <div>
          <p className="mb-8">
            PayID can simplify any compliance solution by providing a direct
            connection between the transacting parties from the start.
          </p>
          <p>
            PayID is working together with TRISA to deliver a turn-key Travel
            Rule solution for crypto. This integration will enable any VASP to
            fulfill their reporting and screening obligations, whether a
            transaction is sent to a PayID or an on-ledger address. PayID
            supercharges an already strong solution by providing increased
            efficiency and enhanced privacy - an ideal match.
          </p>
          <div className="flex items-center justify-center mt-12">
            <Logo className="h-12 md:h-15" />
            <div className="h-12 mx-6 border-r md:h-15 border-blue-dark-900" />
            <TrisaLogo className="mb-1 h-7 md:h-10" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 px-0 sm:gap-20">
          {sectionCopy.map((copy) => {
            return (
              <div key={copy.title}>
                {copy.icon}
                <h3 className="text-2xl font-bold sm:max-w-sm sm:text-3xl">
                  {copy.title}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </Wave>
  )
}

export default Synergy
