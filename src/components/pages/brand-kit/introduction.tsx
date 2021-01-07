import { withPrefix } from 'gatsby'
import React from 'react'

import DownloadGrey from '../../../assets/brand-kit/download_icon_grey.svg'
import DownloadWhite from '../../../assets/brand-kit/download_icon_white.svg'
import PayStringDark from '../../../assets/brand-kit/logos/paystring-dark.svg'
import PayStringWhite from '../../../assets/brand-kit/logos/paystring-white.svg'
import Wave from '../../common/wave'

const Introduction: React.FC = () => {
  return (
    <Wave
      waveClassNames="brandkit-bg"
      waveVectorClassNames="hidden"
      spacing="sm"
      wave="blue"
      no-gutter
    >
      <div className="max-w-4xl pt-16 lg:pt-70">
        <h1 className="mb-10 text-4xl font-bold md:text-h1 md:leading-tighter">
          Brand Kit
        </h1>
        <p className="mb-10 mr-6 md:mb-20 md:max-w-md sm:text-xl">
          Download and use the Paystring Brand Kit to share our vision of open
          payments
        </p>
      </div>

      {/* P2P */}
      <div className="mt-32 md:mt-64">
        <div className="mb-6 ml-1 text-2xl font-bold">Logos</div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full mb-10">
            <div className="relative flex items-center justify-center w-full h-48 border border-blue-dark-800 bg-blue-dark-800 rounded-2xl md:h-45 lg:h-64">
              <PayStringWhite className="w-1/2" />
              <div className="absolute" style={{ right: 20, bottom: 20 }}>
                <a
                  href={withPrefix(
                    '/assets/brand-kit/downloads/PayString_Logo_White.zip',
                  )}
                  download
                >
                  <DownloadWhite className="w-6 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2" />
          <div className="w-full">
            <div className="relative flex items-center justify-center w-full h-48 rounded-2xl bg-gray-50 md:h-45 lg:h-64">
              <PayStringDark className="w-1/2" />
              <div className="absolute" style={{ right: 20, bottom: 20 }}>
                <a
                  href={withPrefix(
                    '/assets/brand-kit/downloads/PayString_Logo_Dark.zip',
                  )}
                  download
                >
                  <DownloadGrey className="w-6 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28">
        <div className="flex flex-col md:flex-row">
          <div className="w-full mb-20">
            <div className="mb-6 ml-1 text-2xl font-bold">
              PayString Brand Guidelines
            </div>
            <div className="relative flex items-center justify-center w-full h-48 border border-blue-dark-600 rounded-2xl md:h-45 lg:h-64">
              <img
                className="w-4/12"
                src={withPrefix('/assets/brand-kit/guide.png')}
              />
              <div className="absolute" style={{ right: 20, bottom: 20 }}>
                <a
                  href={withPrefix(
                    '/assets/brand-kit/downloads/PayString_BrandGuidelines.pdf',
                  )}
                  download
                >
                  <DownloadWhite className="w-6 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2" />
          <div className="w-full" />
        </div>
      </div>
    </Wave>
  )
}

export default Introduction
