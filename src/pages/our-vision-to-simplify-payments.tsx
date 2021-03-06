import React from 'react'

import Community from '../components/common/community'
import Extensions from '../components/common/extensions'
import Learn from '../components/common/learn'
import Layout from '../components/layout'
import Introduction from '../components/pages/vision/introduction'

const Vision: React.FC = () => {
  return (
    <Layout
      path="our-vision-to-simplify-payments"
      title="Our Vision for Simplifying Payments"
      description="Simplify sending & receiving payments across any network with PayString. Our open-source platform is the next leap for accelerating growth in the payments industry."
    >
      <Introduction />
      <Extensions />
      <Learn background="white" />
      <Community />
    </Layout>
  )
}

export default Vision
