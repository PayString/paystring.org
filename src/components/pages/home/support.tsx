import { withPrefix } from 'gatsby'
import React from 'react'

import Button from '../../common/button'
import Wave from '../../common/wave'

const Institutions: React.FC = () => {
  return (
    <Wave background="gray" wave="white" direction="rtl" no-gutter>
      <div className="flex flex-col text-left md:items-center md:text-center">
        <h2 className="mb-6 text-3xl font-bold md:mb-8 sm:text-5xl">
          Supported by Leading Institutions
        </h2>
        <p className="max-w-xl mb-3 sm:text-xl">
          Be a part of a community of financial and tech organizations dedicated
          to improving the payment experience
        </p>
      </div>
      <img
        src={withPrefix('/assets/home/institutions/institutions.svg')}
        className="hidden w-full md:block"
      />
      <img
        src={withPrefix('/assets/home/institutions/institutions-mobile.svg')}
        className="w-7/12 mx-auto md:hidden"
      />
      <div className="flex justify-center mt-16 sm:mt-32">
        <Button label="See More" to={withPrefix('/about-us')} />
      </div>
    </Wave>
  )
}

export default Institutions
