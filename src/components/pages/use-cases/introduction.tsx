import { withPrefix } from 'gatsby'
import React from 'react'

import Wave from '../../common/wave'

const bgShadow = {
  boxShadow: '0px 0px 118.944px #001B66',
}

const Introduction: React.FC = () => {
  return (
    <Wave waveClassNames="vision-bg" spacing="sm">
      <div className="max-w-4xl pt-16 lg:pt-70">
        <h1 className="text-4xl font-bold md:text-h1 md:leading-tighter">
          PayString is used in apps across a variety of payment use cases
        </h1>
      </div>

      {/* P2P */}
      <div className="flex flex-col-reverse items-center justify-center mt-32 md:flex-row md:mt-64">
        <div className="w-full md:mr-18">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Peer to Peer Payment
          </h2>
          <p className="mt-4 md:mt-6 md:text-xl">
            P2P app users can send and receive payments from people on other
            payment networks and in any currency by simply sharing their unique
            PayString address.
          </p>
          <p className="mt-4 md:mt-6 md:text-xl">
            Key benefit: PayString reduces friction in the payment experience,
            increasing conversion, and helping the company reach new users
            across a broader more connected network.
          </p>
        </div>
        <div className="w-full">
          <img
            src={withPrefix('/assets/use-cases/p2p.png')}
            className="object-contain m-auto"
            style={bgShadow}
          />
        </div>
      </div>

      {/* E-Commerce Checkout */}
      <div className="flex flex-col items-center justify-center mt-32 md:flex-row md:mt-64">
        <div className="w-full md:mr-18">
          <img
            src={withPrefix('/assets/use-cases/checkout.png')}
            className="transform md:-ml-16 md:scale-125"
            style={bgShadow}
          />
        </div>
        <div className="w-full mt-10 md:mt-0">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            E-Commerce Checkout
          </h2>
          <p className="mt-4 md:mt-6 md:text-xl">
            E-commerce customers can use any digital wallet to complete their
            purchases when PayString is offered as a payment method.
          </p>
          <p className="mt-4 md:mt-6 md:text-xl">
            Key benefit: PayString helps shoppers check out faster and enhances
            transaction security.
          </p>
        </div>
      </div>

      {/* Subscription Payment  */}
      <div className="flex flex-col-reverse items-center justify-center mt-32 md:flex-row md:mt-64">
        <div className="w-full md:mr-18">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Subscription Payment
          </h2>
          <p className="mt-4 md:mt-6 md:text-xl">
            Companies can use PayString to request recurring payments from their
            subscribers’ digital and crypto wallets.
          </p>
          <p className="mt-4 md:mt-6 md:text-xl">
            Key benefit: PayString offers customers a much easier, simple way to
            renew their subscriptions, using any currency or wallet.
          </p>
        </div>
        <div className="w-full">
          <img
            src={withPrefix('/assets/use-cases/subscription.png')}
            className="object-contain m-auto"
            style={bgShadow}
          />
        </div>
      </div>

      {/* Invoice Payment */}
      <div className="flex flex-col items-center justify-center mt-32 md:flex-row md:mt-64">
        <div className="w-full md:mr-18">
          <img
            src={withPrefix('/assets/use-cases/invoice.png')}
            className="transform md:-ml-16 md:scale-125"
            style={bgShadow}
          />
        </div>
        <div className="w-full mt-10 md:mt-0">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Invoice Payment
          </h2>
          <p className="mt-4 md:mt-6 md:text-xl">
            Services can use PayString to send invoice requests directly to a
            customer&apos;s PayString, and the payment transaction can be
            completed in just a few clicks.
          </p>
          <p className="mt-4 md:mt-6 md:text-xl">
            Key benefit: Streamlined experience for both client and provider
            that works for any payment method and any wallet that supports
            PayString.
          </p>
        </div>
      </div>
    </Wave>
  )
}

export default Introduction
