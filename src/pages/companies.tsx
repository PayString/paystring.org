import React from 'react'

import Learn from '../components/common/learn'
import Questions from '../components/common/questions'
import Layout from '../components/layout'
import Introduction from '../components/pages/companies/introduction'
import Members from '../components/pages/companies/members'

const Companies: React.FC = () => {
  return (
    <Layout title="Companies">
      <Introduction />
      <Members />
      <Learn background="gray" />
      <Questions />
    </Layout>
  )
}

export default Companies
