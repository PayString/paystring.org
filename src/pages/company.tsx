import React from 'react'

import Learn from '../components/common/learn'
import Questions from '../components/common/questions'
import Layout from '../components/layout'
import Introduction from '../components/pages/company/introduction'
import Members from '../components/pages/company/members'

const Compliance: React.FC = () => {
  return (
    <Layout title="Company">
      <Introduction />
      <Members />
      <Learn background="gray" />
      <Questions />
    </Layout>
  )
}

export default Compliance
