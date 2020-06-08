import React from 'react'

import LogoBlockchainDotCom from '../../../../content/assets/company/members/logos/blockchain.svg'
import LogoBrave from '../../../../content/assets/company/members/logos/brave.svg'
import LogoFlutterwave from '../../../../content/assets/company/members/logos/flutterwave.svg'
import LogoGoPay from '../../../../content/assets/company/members/logos/gopay.svg'
import LogoRipple from '../../../../content/assets/company/members/logos/ripple.svg'
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
    <Wave
      background="gray"
      wave="white"
      direction="rtl"
      className="text-center"
    >
      <div className="justify-center mb-3 text-left md:text-center md:mb-0">
        <h2 className="max-w-4xl mx-auto mb-12 text-3xl font-bold sm:text-5xl">
          Supported by Leading Institutions
        </h2>
        <p className="max-w-xl mx-auto text-xl">
          Be a part of a community of financial and tech organizations dedicated
          to improving the payment experience.
        </p>
      </div>

      <div className="flex flex-col flex-wrap justify-center max-w-4xl mx-auto text-center md:flex-row">
        {sectionCopy.map((copy) => {
          return (
            <div
              key={copy.title}
              className="flex flex-col mt-16 mb-0 sm:m-8 md:mb-0 md:mt-25 md:m-16"
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
      <div>
        <Button to="/company" label="See More" className="inline-block mt-28" />
      </div>
    </Wave>
  )
}

export default Institutions

{
  /* <div className="grid max-w-4xl grid-cols-1 row-gap-16 px-0 mx-auto text-center sm:row-gap-24 col-gap-28 sm:grid-cols-1 md:grid-cols-3"> */
}
