import React from 'react'

import LogoBitBNS from '../../../../content/assets/companies/members/logos/bitbns.svg'
import LogoBitGo from '../../../../content/assets/companies/members/logos/bitgo.svg'
import LogoBitpay from '../../../../content/assets/companies/members/logos/bitpay.svg'
import LogoBitrue from '../../../../content/assets/companies/members/logos/bitrue.svg'
import LogoBitso from '../../../../content/assets/companies/members/logos/bitso.svg'
import LogoBitstamp from '../../../../content/assets/companies/members/logos/bitstamp.svg'
import LogoBlockchainDotCom from '../../../../content/assets/companies/members/logos/blockchain.svg'
import LogoBrave from '../../../../content/assets/companies/members/logos/brave.svg'
import LogoBRD from '../../../../content/assets/companies/members/logos/brd.svg'
import LogoBTCMarkets from '../../../../content/assets/companies/members/logos/btc-markets.svg'
import LogoCare from '../../../../content/assets/companies/members/logos/care.svg'
import LogoCipherTrace from '../../../../content/assets/companies/members/logos/cipher-trace.svg'
import LogoCoil from '../../../../content/assets/companies/members/logos/coil.svg'
import LogoCoinfield from '../../../../content/assets/companies/members/logos/coinfield.svg'
import LogoCoinme from '../../../../content/assets/companies/members/logos/coinme.svg'
import LogoCoinone from '../../../../content/assets/companies/members/logos/coinone.svg'
import LogoCoinsDotPh from '../../../../content/assets/companies/members/logos/coins.svg'
import LogoCryptoDotCom from '../../../../content/assets/companies/members/logos/crypto.svg'
import LogoDeemoney from '../../../../content/assets/companies/members/logos/deemoney.svg'
import LogoDharma from '../../../../content/assets/companies/members/logos/dharma.svg'
import LogoDwolla from '../../../../content/assets/companies/members/logos/dwolla.svg'
import LogoFlashFX from '../../../../content/assets/companies/members/logos/flashfx.svg'
import LogoFlutterwave from '../../../../content/assets/companies/members/logos/flutterwave.svg'
import LogoForte from '../../../../content/assets/companies/members/logos/forte.svg'
import LogoGatehub from '../../../../content/assets/companies/members/logos/gatehub.svg'
import LogoGiveDirectly from '../../../../content/assets/companies/members/logos/give-directly.svg'
import LogoGivingBlock from '../../../../content/assets/companies/members/logos/giving-block.svg'
import LogoGlobalID from '../../../../content/assets/companies/members/logos/globalid.svg'
import LogoGoPay from '../../../../content/assets/companies/members/logos/gopay.svg'
import LogoHuobi from '../../../../content/assets/companies/members/logos/huobi.svg'
import LogoIndependentReserve from '../../../../content/assets/companies/members/logos/independent-reserve.svg'
import LogoLiquid from '../../../../content/assets/companies/members/logos/liquid.svg'
import LogoMercuryFX from '../../../../content/assets/companies/members/logos/mercury-fx.svg'
import LogoMercyCorps from '../../../../content/assets/companies/members/logos/mercy-corps.svg'
import LogoModusBox from '../../../../content/assets/companies/members/logos/modusbox.svg'
import LogoPolySign from '../../../../content/assets/companies/members/logos/polysign.svg'
import LogoRipple from '../../../../content/assets/companies/members/logos/ripple.svg'
import LogoSCVentures from '../../../../content/assets/companies/members/logos/scventures.svg'
import LogoSygnum from '../../../../content/assets/companies/members/logos/sygnum.svg'
import LogoTangem from '../../../../content/assets/companies/members/logos/tangem.svg'
import LogoTrisa from '../../../../content/assets/companies/members/logos/trisa.svg'
import LogoUnstoppableDomains from '../../../../content/assets/companies/members/logos/unstoppable-domains.svg'
import LogoUphold from '../../../../content/assets/companies/members/logos/uphold.svg'
import LogoWyre from '../../../../content/assets/companies/members/logos/wyre.svg'
import LogoXUMM from '../../../../content/assets/companies/members/logos/xumm.svg'
import Wave from '../../common/wave'

const Members: React.FC = () => {
  const members = [
    {
      icon: LogoBitGo,
      title: 'BitGo',
    },
    {
      icon: LogoBitpay,
      title: 'BitPay',
    },
    {
      icon: LogoBitso,
      title: 'Bitso',
    },
    {
      icon: LogoBitstamp,
      title: 'Bitstamp',
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
      icon: LogoBRD,
      title: 'BRD',
    },
    {
      icon: LogoCare,
      title: 'Care',
    },
    {
      icon: LogoCoinsDotPh,
      title: 'Coins.ph',
    },
    {
      icon: LogoCryptoDotCom,
      title: 'Crypto.com',
    },
    {
      icon: LogoDwolla,
      title: 'Dwolla',
    },
    {
      icon: LogoFlutterwave,
      title: 'Flutterwave',
    },
    {
      icon: LogoGiveDirectly,
      title: 'Give Directly',
    },
    {
      icon: LogoGoPay,
      title: 'GoPay',
    },
    {
      icon: LogoHuobi,
      title: 'Huobi',
    },
    {
      icon: LogoLiquid,
      title: 'Liquid',
    },
    {
      icon: LogoMercyCorps,
      title: 'Mercy Corps',
    },
    {
      icon: LogoSCVentures,
      title: 'SC Ventures',
    },
    {
      icon: LogoWyre,
      title: 'Wyre',
    },
    {
      icon: LogoBitBNS,
      title: 'BitBNS',
    },
    {
      icon: LogoBitrue,
      title: 'Bitrue',
    },
    {
      icon: LogoBTCMarkets,
      title: 'BTC Markets',
    },
    {
      icon: LogoCipherTrace,
      title: 'Cipher Trace',
    },
    {
      icon: LogoCoil,
      title: 'Coil',
    },
    {
      icon: LogoCoinfield,
      title: 'Coinfield',
    },
    {
      icon: LogoCoinme,
      title: 'Coinme',
    },
    {
      icon: LogoCoinone,
      title: 'Coinone',
    },
    {
      icon: LogoDeemoney,
      title: 'Deemoney',
    },
    {
      icon: LogoDharma,
      title: 'Dharma',
    },
    {
      icon: LogoFlashFX,
      title: 'FlashFX',
    },
    {
      icon: LogoForte,
      title: 'Forte',
    },
    {
      icon: LogoGatehub,
      title: 'Gatehub',
    },
    {
      icon: LogoGivingBlock,
      title: 'Giving Block',
    },
    {
      icon: LogoGlobalID,
      title: 'GlobalID',
    },
    {
      icon: LogoIndependentReserve,
      title: 'Independent Reserve',
    },
    {
      icon: LogoMercuryFX,
      title: 'Mercury FX',
    },
    {
      icon: LogoModusBox,
      title: 'ModusBox',
    },
    {
      icon: LogoPolySign,
      title: 'PolySign',
    },
    {
      icon: LogoSygnum,
      title: 'Sygnum',
    },
    {
      icon: LogoTangem,
      title: 'Tangem',
    },
    {
      icon: LogoTrisa,
      title: 'Trisa',
    },
    {
      icon: LogoUnstoppableDomains,
      title: 'Unstoppable Domains',
    },
    {
      icon: LogoUphold,
      title: 'Uphold',
    },
    {
      icon: LogoXUMM,
      title: 'XUMM',
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

      <div className="overflow-hidden">
        <div className="flex flex-wrap justify-around -mt-16 text-center sm:-mt-24 -mx-7">
          {members.map((member) => {
            return (
              <div
                key={member.title}
                className="flex flex-col w-full mt-16 sm:w-1/2 md:w-1/3 lg:w-1/4 sm:mt-24"
              >
                {
                  <member.icon className="self-center rounded-full shadow-logo h-30 w-30" />
                }
                <h3 className="self-center mt-8 text-2xl font-bold">
                  {member.title}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </Wave>
  )
}

export default Members
