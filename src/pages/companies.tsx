import React from 'react'

import Community from '../components/common/community'
import Learn from '../components/common/learn'
import Layout from '../components/layout'
import Introduction from '../components/pages/companies/introduction'
import Members from '../components/pages/companies/members'

const Companies: React.FC = () => {
  return (
    <Layout path="companies" title="Companies">
      <Introduction />
      <Members />
      <Learn background="gray" />
      <Community />
    </Layout>
  )
}

export default Companies
