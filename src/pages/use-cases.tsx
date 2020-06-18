import React from 'react'

import Community from '../components/common/community'
import Learn from '../components/common/learn'
import Layout from '../components/layout'
import Introduction from '../components/pages/use-cases/introduction'

const Companies: React.FC = () => {
  return (
    <Layout
      path="use-cases"
      title="Use Cases"
      description="PayID has a plethora of use cases. Learn more about how PayID can improve your applications user experience."
    >
      <Introduction />
      <Learn background="white" />
      <Community />
    </Layout>
  )
}

export default Companies
