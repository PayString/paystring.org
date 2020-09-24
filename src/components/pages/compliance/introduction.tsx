import { withPrefix } from 'gatsby'
import React from 'react'

import Wave from '../../common/wave'

const Introduction: React.FC = () => {
  const bgImgStyle = {
    backgroundImage: `url(${withPrefix('/assets/compliance/background.svg')})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
  }

  return (
    <Wave style={bgImgStyle} spacing="sm" waveClassNames="bg-auto xl:bg-cover">
      <div className="pt-16 lg:pt-70 lg:flex">
        <div className="max-w-xl lg:flex lg:flex-col lg:mr-12">
          <h1 className="mb-10 text-3xl font-bold sm:mb-16 sm:text-h1 sm:leading-tighter">
            Travel Rule Compliance
          </h1>
          <div className="sm:text-xl">
            <p>
              PayID is built to be a simple and flexible extension of existing
              payment networks, making it best-in-class in compliance messaging
              — such as Travel Rule and AML.
            </p>
            <p className="mt-8">
              <a
                href="https://www.fatf-gafi.org/media/fatf/documents/recommendations/RBA-VA-VASPs.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-orange-500"
              >
                Learn More
              </a>{' '}
              about Travel Rule in crypto
            </p>
          </div>
        </div>
      </div>
    </Wave>
  )
}

export default Introduction
