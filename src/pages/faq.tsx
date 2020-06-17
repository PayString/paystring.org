import React from 'react'

import Community from '../components/common/community'
import Learn from '../components/common/learn'
import Layout from '../components/layout'
import Introduction from '../components/pages/faq/introduction'

const FAQ: React.FC = () => {
  return (
    <Layout title="FAQ">
      <Introduction />
      <Learn background="white" />
      <Community />
    </Layout>
  )
}

export default FAQ
