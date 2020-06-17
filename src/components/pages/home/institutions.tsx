import React from 'react'

import LogoBlockchainDotCom from '../../../../content/assets/companies/members/logos/blockchain.svg'
import LogoBrave from '../../../../content/assets/companies/members/logos/brave.svg'
import LogoFlutterwave from '../../../../content/assets/companies/members/logos/flutterwave.svg'
import LogoGoPay from '../../../../content/assets/companies/members/logos/gopay.svg'
import LogoRipple from '../../../../content/assets/companies/members/logos/ripple.svg'
import InstitutionsGraphic from '../../../../content/assets/home/institutions/institutions.svg'
import Button from '../../common/button'
import Wave from '../../common/wave'

const Institutions: React.FC = () => {
  const sectionCopy = [
    {
      icon: LogoGoPay,
      title: 'GoPay',
    },
    {
      icon: LogoBlockchainDotCom,
      title: 'Blockchain.com',
    },
    {
      icon: LogoBrave,
      title: 'Brave',
    },
    {
      icon: LogoRipple,
      title: 'Ripple',
    },
    {
      icon: LogoFlutterwave,
      title: 'Flutterwave',
    },
  ]

  return (
    <Wave background="gray" wave="white" direction="rtl">
      <div className="flex flex-col text-left md:items-center md:text-center">
        <h2 className="mb-6 text-3xl font-bold md:mb-8 sm:text-5xl">
          100 million users and growing
        </h2>
        <p className="max-w-xl mb-16 sm:text-xl sm:mb-24">
          Built and used by leading financial, tech, and non-profit
          organizations
        </p>
      </div>

      <InstitutionsGraphic className="hidden -mx-6 md:block lg:-mx-35" />

      <div className="flex flex-wrap justify-center -mx-6 -mt-16 text-center lg:-mx-35 sm:-mt-24 md:hidden">
        {sectionCopy.map((copy) => {
          return (
            <div
              key={copy.title}
              className="flex flex-col w-full mt-16 sm:w-1/2 md:w-1/3 sm:mt-24"
            >
              {
                <copy.icon className="self-center rounded-full shadow-logo h-30 w-30" />
              }
              <h3 className="self-center mt-8 text-2xl font-bold">
                {copy.title}
              </h3>
            </div>
          )
        })}
      </div>
      <div className="flex justify-center mt-16 sm:mt-24">
        <Button to="/companies" label="See More" />
      </div>
    </Wave>
  )
}

export default Institutions
