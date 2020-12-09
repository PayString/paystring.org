import React from 'react'

import { getDocsLocation } from '../../../utils/config'
import Button from '../../common/button'
import Wave from '../../common/wave'

const Integrate: React.FC = () => {
  return (
    <Wave background="light-blue" wave="orange" direction="rtl">
      {/* Header */}
      <div className="flex justify-center">
        <div className="flex flex-col self-center max-w-xl text-left md:items-center md:text-center">
          <h2 className="mb-6 text-3xl font-bold md:mb-8 sm:text-5xl">
            PayString is Free, Easy and Simple to Implement
          </h2>
          <p className="font-bold lg:text-2xl">
            Build on your choice of platform and programs.
          </p>
          <p className="mb-10 font-bold sm:mb-2 lg:text-2xl">
            Deploy in minutes with just a few lines of code
          </p>
        </div>
      </div>

      <div className="justify-center md:flex">
        <div className="w-full max-w-xl overflow-hidden lg:pl-5 lg:pr-5">
          <div className="mt-10 md:mt-16">
            <p className="font-medium">Clone Repo</p>
          </div>
          <div className="mt-6 overflow-x-auto font-mono text-sm font-normal text-white rounded bg-blue-dark-900 md:mt-3">
            <div className="flex w-full p-4">
              <div className="px-4 py-6 text-center rounded bg-blue-dark-700">
                <p>1</p>
                <p>2</p>
                <p className="md:hidden">3</p>
                <p className="md:hidden">4</p>
              </div>
              <div className="px-8 py-6 whitespace-no-wrap">
                <div className="hidden md:block">
                  <span className="text-blue-dark-300">git</span> clone
                  git@github.com:paystring/paystring.git
                </div>
                <div className="md:hidden">
                  <span className="text-blue-dark-300">git</span> clone
                </div>
                <div className="md:hidden">git@github.com:paystring/pay</div>
                <div className="md:hidden">string.git</div>
                <div>
                  <span className="text-orange-300">cd</span> paystring
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-16">
            <p className="font-medium">Run Script</p>
          </div>
          <div className="mt-6 overflow-x-auto font-mono text-sm font-normal text-white rounded bg-blue-dark-900 md:mt-8">
            <div className="flex w-full p-4">
              <div className="px-4 py-6 text-center rounded bg-blue-dark-700">
                <p>1</p>
              </div>
              <div className="px-8 py-6 whitespace-no-wrap">
                <div>npm run devEnvUp</div>
              </div>
            </div>
          </div>
          <div className="mt-6 overflow-x-auto font-mono text-sm font-normal md:text-center">
            <a href={getDocsLocation()}>
              <Button label="Read More" className="mt-10 md:mt-16" />
            </a>
          </div>
        </div>
      </div>
    </Wave>
  )
}

export default Integrate
