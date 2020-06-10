import React from 'react'

import Extensions from '../components/common/extensions'
import Learn from '../components/common/learn'
import Questions from '../components/common/questions'
import Layout from '../components/layout'
import Introduction from '../components/pages/vision/introduction'

const Vision: React.FC = () => {
  return (
    <Layout title="Vision">
      <Introduction />
      <Extensions />
      <Learn background="white" />
      <Questions />
    </Layout>
  )
}

export default Vision
