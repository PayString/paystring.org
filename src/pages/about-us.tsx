import React from 'react'

import Community from '../components/common/community'
import Learn from '../components/common/learn'
import Layout from '../components/layout'
import Introduction from '../components/pages/companies/introduction'
import Members from '../components/pages/companies/members'

const Companies: React.FC = () => {
  return (
    <Layout
      path="about-us"
      title="About the Open Payments Coalition"
      description="PayID joins companies across all industries to provide an open-source solution for cross network payments. Learn more about the Open Payments Coalition."
    >
      <Introduction />
      <Members />
      <Learn background="gray" />
      <Community />
    </Layout>
  )
}

export default Companies
