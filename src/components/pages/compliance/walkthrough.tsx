import classNames from 'classnames'
import React, { useState } from 'react'

import Arrow from '../../../assets/compliance/walkthrough/arrow.svg'
import GraphMobile from '../../../assets/compliance/walkthrough/graph-mobile.svg'
import GraphWeb from '../../../assets/compliance/walkthrough/graph-web.svg'
import Wave from '../../common/wave'

const Walkthrough: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0)

  const sectionCopy = [
    {
      title: 'Initiate Transaction',
      descriptions: [
        'The originating user, Alice, instructs her custodial wallet, VASP A, to send a transaction to the beneficiary user, Bob, to his PayID, bob$vaspb.com, provided by his custodial wallet VASP B.',
      ],
    },
    {
      title: 'Kick off PayID Handshake',
      descriptions: [
        'VASP A initiates a secure HTTP connection with VASP B through the PayID URL. This kicks off the PayID handshake that determines whether Travel Rule applies to this transaction.',
      ],
    },
    {
      title: 'Counterparty Indentification',
      descriptions: [
        'VASP A and B exchange information about themselves per the TRISA standard and determine whether Travel Rule applies based on their compliance requirements and the transaction data.',
      ],
    },
    {
      title: 'Exchange Travel Rule Payload',
      descriptions: [
        'VASP A sends a signed Travel Rule data payload to VASP B via the TRISA protocol. This payload can conform to FinCEN, FATF, or other regulatory standards.',
      ],
    },
    {
      title: 'Beneficiary Institution Reviews Payload',
      descriptions: [
        'VASP B reviews the Payload and sends either authorization to proceed with the transaction, including the PayID to address mapping on the desired network or a rejection.',
        'Both institutions are free to implement any compliance policy they desire at any point.',
      ],
    },
    {
      title: 'Transaction Execution and Receipt',
      descriptions: [
        'If the VASP A receives an authorization, it executes the transaction and sends a proof-of-payment message to VASP B.',
        'Otherwise, VASP A drops the transaction.',
      ],
    },
  ]

  return (
    <Wave background="blue" wave="gray" direction="rtl">
      <div className="flex flex-col items-center">
        <h2 className="max-w-xl text-3xl font-bold mb-14 sm:text-5xl sm:text-center md:mb-25">
          How Travel Rules works with PayID
        </h2>
        <GraphWeb className="hidden max-w-5xl mb-25 md:block" />
        <GraphMobile className="block mb-14 md:hidden" />

        {/* Desktop Steps */}
        <div className="hidden w-full max-w-2xl md:block">
          <h3 className="text-3xl font-bold">
            {sectionCopy[currentStep].title}
          </h3>
          <div className="flex my-10">
            {sectionCopy.map((_copy, i) => {
              return (
                <button
                  key={i}
                  className={classNames(
                    'py-4 mr-6 hover:text-orange-500 focus:text-orange-500 focus:outline-none',
                    {
                      'text-orange-500': i === currentStep,
                      'text-gray-300': i !== currentStep,
                    },
                  )}
                  onClick={(): void => setCurrentStep(i)}
                >
                  Step {i + 1}
                  {i !== 5 && <Arrow className="inline-block h-2 ml-6" />}
                </button>
              )
            })}
          </div>
          {sectionCopy[currentStep].descriptions.map((description) => {
            return (
              <p className="mb-6 text-xl text-white" key={description}>
                {description}
              </p>
            )
          })}
        </div>

        {/* Mobile Steps */}
        <div className="w-full max-w-2xl md:hidden">
          {sectionCopy.map((copy, i) => {
            return (
              <div key={i} className="mb-14">
                <p className="mb-8 text-gray-200">Step {i + 1}</p>
                <h3 className="my-8 text-2xl font-bold">{copy.title}</h3>
                {copy.descriptions.map((description) => {
                  return (
                    <p className="mb-6 text-white" key={description}>
                      {description}
                    </p>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </Wave>
  )
}

export default Walkthrough
