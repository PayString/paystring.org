import React from 'react'

import LogoBitpay from '../../../../content/assets/company/members/logos/bitpay.svg'
import LogoBRD from '../../../../content/assets/company/members/logos/brd.svg'
import LogoCryptoDotCom from '../../../../content/assets/company/members/logos/crypto.svg'
import LogoGatehub from '../../../../content/assets/company/members/logos/gatehub.svg'
import LogoRipple from '../../../../content/assets/company/members/logos/ripple.svg'
import Wave from '../../common/wave'

const Members: React.FC = () => {
  const sectionCopy = [
    {
      icon: LogoBRD,
      title: 'BRD',
    },
    {
      icon: LogoBitpay,
      title: 'Bitpay',
    },
    {
      icon: LogoGatehub,
      title: 'Gatehub',
    },
    {
      icon: LogoCryptoDotCom,
      title: 'Crypto.com',
    },
    {
      icon: LogoRipple,
      title: 'Ripple',
    },
  ]

  return (
    <Wave background="white" wave="gray">
      <div className="flex justify-center">
        <h2 className="max-w-2xl text-3xl font-bold mb-14 sm:text-5xl sm:text-center md:mb-25">
          Founding Members
        </h2>
      </div>

      <div className="grid grid-cols-1 row-gap-16 px-0 text-center sm:row-gap-24 col-gap-28 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {sectionCopy.map((copy) => {
          return (
            <div key={copy.title} className="flex flex-col">
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
    </Wave>
  )
}

export default Members
