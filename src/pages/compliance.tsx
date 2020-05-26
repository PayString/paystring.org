import React from 'react'

import Wave from '../components/common/wave'
import Layout from '../components/layout'

const Compliance: React.FC = () => {
  return (
    <Layout title="Compliance">
      <Wave className="flex items-center justify-center flex-grow text-3xl">
        Travel Rule Compliance
      </Wave>
      <Wave
        background="white"
        wave="gray"
        className="flex items-center justify-center flex-grow text-3xl"
      >
        Benefits of Using PayID for Travel Rule
      </Wave>
      <Wave
        background="gray"
        wave="blue"
        className="flex items-center justify-center flex-grow text-3xl"
      >
        Synergy with Other Proposals
      </Wave>
      <Wave
        background="blue"
        wave="gray"
        className="flex items-center justify-center flex-grow text-3xl"
      >
        How Travel Rule Works with PayID
      </Wave>
      <Wave
        background="gray"
        wave="white"
        className="flex items-center justify-center flex-grow text-3xl"
      >
        Other Extensions for PayID
      </Wave>
      <Wave
        background="white"
        wave="orange"
        className="flex items-center justify-center flex-grow text-3xl"
      >
        Learn More
      </Wave>
      <Wave
        background="orange"
        wave="blue"
        className="flex items-center justify-center flex-grow text-3xl"
      >
        Have Questions
      </Wave>
    </Layout>
  )
}

export default Compliance
