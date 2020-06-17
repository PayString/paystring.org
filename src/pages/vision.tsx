import React from 'react'

import Community from '../components/common/community'
import Extensions from '../components/common/extensions'
import Learn from '../components/common/learn'
import Layout from '../components/layout'
import Introduction from '../components/pages/vision/introduction'

const Vision: React.FC = () => {
  return (
    <Layout path="vision" title="Vision">
      <Introduction />
      <Extensions />
      <Learn background="white" />
      <Community />
    </Layout>
  )
}

export default Vision
