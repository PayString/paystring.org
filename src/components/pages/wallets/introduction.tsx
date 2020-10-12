import { withPrefix } from 'gatsby'
import lottie, { AnimationItem } from 'lottie-web'
import React, { useCallback, useState } from 'react'

import ExchangesIcon from '../../../assets/wallets/introduction/exchangesIcon.svg'
import WalletIcon from '../../../assets/wallets/introduction/walletIcon.svg'
import Button from '../../common/button'
import Wave from '../../common/wave'

import * as wallets from './lottiefiles/wallets.json'

const Introduction: React.FC = () => {
  const [walletAnimation, setWalletAnimation] = useState<AnimationItem>()
  const setWalletRef = useCallback((node) => {
    if (walletAnimation) {
      walletAnimation.destroy()
    }

    if (node) {
      setWalletAnimation(
        lottie.loadAnimation({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          container: node,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          animationData: wallets.default,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }),
      )
    }
  }, [])

  const sectionCopy = [
    {
      title: 'Wallets',
      icon: WalletIcon,
      description:
        'Users can move money with an easy to remember PayID that connects to any currency',
    },
    {
      title: 'Exchanges',
      icon: ExchangesIcon,
      description:
        'Users can use PayIDs to easily deposit any currency into an exchange',
    },
  ]

  return (
    <Wave
      wave="gray"
      spacing="sm"
      waveClassNames="bg-contain lg:bg-auto xl:bg-contain"
      no-gutter
      no-spacing
      background="blue"
      waveVectorClassNames="bg-blue-dark-800"
    >
      <div className="flex flex-col">
        <div className="flex flex-col w-full pt-16 bg-blue-dark-900 md:items-center lg:px-40 lg:pt-70">
          <h1 className="text-3xl font-bold text-center lg:text-h1">
            Easy P2P Payments for
          </h1>
          <h1 className="mb-6 text-3xl font-bold text-center lg:text-h1 md:mb-8">
            Wallets & Exchanges
          </h1>
          <p className="mb-10 ml-6 mr-6 text-center md:mb-20 md:max-w-md sm:text-xl">
            Grow your business with the easiest way to send and receive crypto
          </p>
        </div>
        <div className="flex flex-col bg-blue-dark-900 md:items-center">
          <div ref={setWalletRef} className="w-full h-112 lg:h-auto" />
        </div>
        <div className="flex flex-col w-full px-6 md:items-center lg:px-40 bg-blue-dark-800">
          <div className="grid grid-cols-1 gap-16 mt-24 lg:mt-36 lg:gap-28 lg:grid-cols-2">
            {sectionCopy.map((copy) => {
              return (
                <div key={copy.title} className="max-w-sm sm:max-w-lg">
                  <copy.icon className="mb-10" />
                  <h3 className="text-3xl font-bold mb-7">{copy.title}</h3>
                  <p className="sm:text-xl">{copy.description}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col w-full px-6 -mb-20 md:items-center lg:px-20 bg-blue-dark-800">
          <h2 className="max-w-3xl pt-16 mb-10 text-3xl font-bold text-left md:text-center sm:leading-tighter lg:pt-30 sm:text-5xl">
            PayID in Numbers
          </h2>
          <img
            className="hidden w-full lg:block"
            src={withPrefix('/assets/wallets/numbersBig.svg')}
          />
          <img
            className="w-full lg:hidden"
            src={withPrefix('/assets/wallets/numbersSmall.svg')}
          />
          <div className="overflow-x-auto font-mono text-sm font-normal text-center lg:hidden">
            <Button
              label="See More"
              className="mt-10 md:mt-16"
              to={withPrefix('/about-us')}
            />
          </div>
        </div>
      </div>
    </Wave>
  )
}

export default Introduction
