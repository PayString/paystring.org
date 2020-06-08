import React, { useState } from 'react'

import Arrow from '../../../../content/assets/compliance/walkthrough/arrow.svg'
import GraphMobile from '../../../../content/assets/compliance/walkthrough/graph-mobile.svg'
import GraphWeb from '../../../../content/assets/compliance/walkthrough/graph-web.svg'
import Wave from '../../common/wave'

const Walkthrough: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1)

  const sectionCopy = [
    {
      title: 'Initiate Transaction',
      description: [
        'The originating user, Alice, instructs her custodial wallet, VASP A, to send a transaction to the beneficiary user, Bob, to his PayID, bob$vaspb.com, provided by his custodial wallet VASP B.',
      ],
    },
    {
      title: 'Kick off PayID Handshake',
      description: [
        'VASP A initiates a secure HTTP connection with VASP B through the PayID URL. This kicks off the PayID handshake that determines whether Travel Rule applies to this transaction.',
      ],
    },
    {
      title: 'Counterparty Indentification',
      description: [
        'VASP B sends a secure response affirming that Travel Rule applies based on their compliance requirements and the transaction data.',
      ],
    },
    {
      title: 'Exchange Travel Rule Payload',
      description: [
        'VASP A sends a signed Travel Rule data payload to the VASP B. This payload can conform to FinCEN, FATF, or other regulatory standards.',
      ],
    },
    {
      title: 'Beneficiary Institution Reviews Payload',
      description: [
        'VASP B reviews the Payload and sends either:',
        'Authorization to proceed with the transaction, including the PayID to address mapping on the desired network and (optionally) a proof-of-control signature; or',
        'Rejection for the proposed transaction (digitally signed receipt).',
        'Both institutions are free to implement any compliance policy the desire at any point.',
      ],
    },
    {
      title: 'Transaction Execution and Receipt',
      description: [
        'If the VASP A receives an authorization, it executes the transaction and sends a proof-of-payment message to VASP B.',
        'Otherwise, VASP A drops the transaction.',
      ],
    },
  ]

  return (
    <Wave background="blue" wave="gray" direction="rtl" className="max-w-6xl">
      <h2 className="max-w-xl mx-auto mb-6 text-3xl font-bold text-left sm:text-5xl sm:mb-10 sm:text-center">
        How Travel Rules works with PayID
      </h2>
      <GraphWeb className="hidden max-w-full my-28 md:block" />
      <GraphMobile className="block max-w-full my-20 md:hidden" />
      <div className="flex justify-center flex-grow text-left">
        <div className="grid grid-cols-1 gap-10 px-0 sm:block md:hidden">
          {sectionCopy.map((copy, i) => {
            return (
              <div key={i + 1}>
                <p className="text-gray-200">Step {i + 1}</p>
                <h3 className="my-8 text-3xl font-bold sm:text-2xl">
                  {copy.title}
                </h3>
                {copy.description.map((d, n) => {
                  return (
                    <p className="mb-6 white" key={n}>
                      {d}
                    </p>
                  )
                })}
              </div>
            )
          })}
        </div>

        <div className="grid hidden grid-cols-1 gap-8 px-0 md:block">
          {sectionCopy.map((copy, i) => {
            return (
              <div key={i + 1}>
                {i + 1 === currentStep ? (
                  <div className="max-w-2xl mb-16">
                    <h3 className="mb-8 text-2xl font-bold sm:text-3xl">
                      {copy.title}
                    </h3>
                  </div>
                ) : (
                  <div className="hidden"></div>
                )}
              </div>
            )
          })}
          <div className="flex justify-between my-16">
            {sectionCopy.map((_copy, i) => {
              return (
                <div key={i}>
                  <button
                    className="flex items-center justify-center mr-4 text-gray-200 hover:text-orange-500 focus:outline-none"
                    onClick={(): void => setCurrentStep(i + 1)}
                  >
                    <span className="">Step {i + 1}</span>
                    {i + 1 < 6 ? (
                      <Arrow className="inline-block h-2 ml-6 fill-current" />
                    ) : (
                      <div className="hidden"></div>
                    )}
                  </button>
                </div>
              )
            })}
          </div>
          {sectionCopy.map((copy, i) => {
            return (
              <div key={i + 1}>
                {i + 1 === currentStep ? (
                  <div className="max-w-2xl">
                    {copy.description.map((d, n) => {
                      return (
                        <p className="mb-6 text-xl white" key={n}>
                          {d}
                        </p>
                      )
                    })}
                  </div>
                ) : (
                  <div className="hidden"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </Wave>
  )
}

export default Walkthrough
