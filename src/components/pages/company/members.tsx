import React from 'react'

import LogoBitGo from '../../../../content/assets/company/members/logos/bitgo.svg'
import LogoBitpay from '../../../../content/assets/company/members/logos/bitpay.svg'
import LogoBitso from '../../../../content/assets/company/members/logos/bitso.svg'
import LogoBitstamp from '../../../../content/assets/company/members/logos/bitstamp.svg'
import LogoBitrue from '../../../../content/assets/company/members/logos/bittrue.svg'
import LogoBlockchainDotCom from '../../../../content/assets/company/members/logos/blockchain.svg'
import LogoBrave from '../../../../content/assets/company/members/logos/brave.svg'
import LogoBRD from '../../../../content/assets/company/members/logos/brd.svg'
import LogoCare from '../../../../content/assets/company/members/logos/care.svg'
import LogoCoinfield from '../../../../content/assets/company/members/logos/coinfield.svg'
import LogoCoinsDotPh from '../../../../content/assets/company/members/logos/coins.svg'
import LogoCryptoDotCom from '../../../../content/assets/company/members/logos/crypto.svg'
import LogoDeemoney from '../../../../content/assets/company/members/logos/deemoney.svg'
import LogoDharma from '../../../../content/assets/company/members/logos/dharma.svg'
import LogoFlashFX from '../../../../content/assets/company/members/logos/flashfx.svg'
import LogoFlutterwave from '../../../../content/assets/company/members/logos/flutterwave.svg'
import LogoForte from '../../../../content/assets/company/members/logos/forte.svg'
import LogoGatehub from '../../../../content/assets/company/members/logos/gatehub.svg'
import LogoGivingBlock from '../../../../content/assets/company/members/logos/giving-block.svg'
import LogoGlobalID from '../../../../content/assets/company/members/logos/globalid.svg'
import LogoGoPay from '../../../../content/assets/company/members/logos/gopay.svg'
import LogoMercuryFX from '../../../../content/assets/company/members/logos/mercury-fx.svg'
import LogoMercyCorps from '../../../../content/assets/company/members/logos/mercy-corps.svg'
import LogoNetworkForGood from '../../../../content/assets/company/members/logos/network-for-good.svg'
import LogoPolySign from '../../../../content/assets/company/members/logos/polysign.svg'
import LogoRipple from '../../../../content/assets/company/members/logos/ripple.svg'
import LogoUnstoppableDomains from '../../../../content/assets/company/members/logos/unstoppable-domains.svg'
import LogoUphold from '../../../../content/assets/company/members/logos/uphold.svg'
import LogoVoyager from '../../../../content/assets/company/members/logos/voyager.svg'
import LogoWyre from '../../../../content/assets/company/members/logos/wyre.svg'
import LogoXUMM from '../../../../content/assets/company/members/logos/xumm.svg'
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
      icon: LogoCoinfield,
      title: 'Coinfield',
    },
    {
      icon: LogoForte,
      title: 'Forte',
    },
    {
      icon: LogoXUMM,
      title: 'XUMM',
    },
    {
      icon: LogoBlockchainDotCom,
      title: 'Blockchain.com',
    },
    {
      icon: LogoGoPay,
      title: 'GoPay',
    },
    {
      icon: LogoFlutterwave,
      title: 'Flutterwave',
    },
    {
      icon: LogoWyre,
      title: 'Wyre',
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
      icon: LogoBitGo,
      title: 'BitGo',
    },
    {
      icon: LogoBitstamp,
      title: 'Bitstamp',
    },
    {
      icon: LogoBitso,
      title: 'Bitso',
    },
    {
      icon: LogoNetworkForGood,
      title: 'Network for Good',
    },
    {
      icon: LogoMercyCorps,
      title: 'Mercy Corps',
    },
    {
      icon: LogoCare,
      title: 'Care',
    },
    {
      icon: LogoUphold,
      title: 'Uphold',
    },
    {
      icon: LogoDharma,
      title: 'Dharma',
    },
    {
      icon: LogoBitrue,
      title: 'Bitrue',
    },
    {
      icon: LogoPolySign,
      title: 'PolySign',
    },
    {
      icon: LogoGivingBlock,
      title: 'Giving Block',
    },
    {
      icon: LogoFlashFX,
      title: 'FlashFX',
    },
    {
      icon: LogoMercuryFX,
      title: 'Mercury FX',
    },
    {
      icon: LogoUnstoppableDomains,
      title: 'Unstoppable Domains',
    },
    {
      icon: LogoGlobalID,
      title: 'GlobalID',
    },
    {
      icon: LogoRipple,
      title: 'Ripple',
    },
    {
      icon: LogoVoyager,
      title: 'Voyager',
    },
    {
      icon: LogoDeemoney,
      title: 'Deemoney',
    },
  ]

  return (
    <Wave background="white" wave="gray">
      <div className="flex justify-center">
        <h2 className="max-w-2xl text-3xl font-bold mb-14 sm:text-5xl sm:text-center md:mb-25">
          Founding Members
        </h2>
      </div>

      <div className="flex flex-wrap justify-around px-0 -mt-16 text-center">
        {sectionCopy.map((copy) => {
          return (
            <div
              key={copy.title}
              className="flex flex-col w-full mt-16 sm:w-1/2 md:w-1/3 lg:w-1/4 px-28 sm:mb-24"
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
    </Wave>
  )
}

export default Members
