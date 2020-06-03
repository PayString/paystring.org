import React from 'react'

import Wave from '../../common/wave'

const Benefits: React.FC = () => {
  const sectionCopy = [
    {
      title: 'Simplicity',
      description:
        'PayID uses existing web standards and infrastructure that companies already run on.',
    },
    {
      title: 'Compatibility',
      description:
        'PayID works across jurisdictions — without a patchwork of central registries.',
    },
    {
      title: 'Privacy and Security',
      description:
        'PayID uses existing web security procedures, does not expose service addresses and allows for real-time management of addresses.',
    },
    {
      title: 'Neutrality',
      description: 'PayID is decentralized and agnostic to payment rail.',
    },
  ]

  return (
    <Wave background="white" wave="gray">
      <div className="flex justify-center">
        <h2 className="max-w-2xl mb-16 text-3xl font-bold sm:text-5xl sm:text-center sm:mb-28">
          Benefits of Using PayID for Travel Rule
        </h2>
      </div>
      <div className="grid grid-cols-1 px-0 gap-15 sm:row-gap-28 sm:col-gap-20 md:grid-cols-2 sm:px-29">
        {sectionCopy.map((copy) => {
          return (
            <div key={copy.title}>
              <h3 className="text-2xl font-bold sm:text-3xl">{copy.title}</h3>
              <p className="mt-3 sm:mt-4 sm:text-xl">{copy.description}</p>
            </div>
          )
        })}
      </div>
    </Wave>
  )
}

export default Benefits
