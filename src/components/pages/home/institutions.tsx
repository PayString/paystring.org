import React from 'react'

import LogoBlockchainDotCom from '../../../../content/assets/companies/members/logos/blockchain.svg'
import LogoBrave from '../../../../content/assets/companies/members/logos/brave.svg'
import LogoFlutterwave from '../../../../content/assets/companies/members/logos/flutterwave.svg'
import LogoGoPay from '../../../../content/assets/companies/members/logos/gopay.svg'
import LogoRipple from '../../../../content/assets/companies/members/logos/ripple.svg'
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
        <h2 className="mb-6 text-3xl font-bold md:mb-12 sm:text-5xl">
          Supported by Leading Institutions
        </h2>
        <p className="max-w-xl mb-16 sm:text-xl sm:mb-24">
          Be a part of a community of financial and tech organizations dedicated
          to improving the payment experience.
        </p>
      </div>

      <div className="flex flex-wrap justify-center -mt-16 text-center sm:-mt-24 -mx-7">
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
