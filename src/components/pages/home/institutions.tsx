import React from 'react'

import LogoBitGo from '../../../assets/companies/members/logos/bitgo.svg'
import LogoBlockchainDotCom from '../../../assets/companies/members/logos/blockchain.svg'
import LogoBrave from '../../../assets/companies/members/logos/brave.svg'
import LogoBRD from '../../../assets/companies/members/logos/brd.svg'
import LogoCoinsDotPh from '../../../assets/companies/members/logos/coins.svg'
import LogoFlutterwave from '../../../assets/companies/members/logos/flutterwave.svg'
import LogoGoPay from '../../../assets/companies/members/logos/gopay.svg'
import LogoHuobi from '../../../assets/companies/members/logos/huobi.svg'
import LogoMercyCorps from '../../../assets/companies/members/logos/mercy-corps.svg'
import InstitutionsGraphic from '../../../assets/home/institutions/institutions.svg'
import Button from '../../common/button'
import Wave from '../../common/wave'

const Institutions: React.FC = () => {
  const sectionCopy = [
    {
      icon: LogoHuobi,
      title: 'Huobi',
    },
    {
      icon: LogoBitGo,
      title: 'BitGo',
    },
    {
      icon: LogoGoPay,
      title: 'GoPay',
    },
    {
      icon: LogoBlockchainDotCom,
      title: 'Blockchain.com',
    },
    {
      icon: LogoBRD,
      title: 'BRD',
    },
    {
      icon: LogoBrave,
      title: 'Brave',
    },
    {
      icon: LogoCoinsDotPh,
      title: 'Coins.ph',
    },
    {
      icon: LogoMercyCorps,
      title: 'Mercy Corps',
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
        <Button to="/about-us" label="See More" />
      </div>
    </Wave>
  )
}

export default Institutions
