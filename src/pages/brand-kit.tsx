import React from 'react'

import Layout from '../components/layout'
import Introduction from '../components/pages/brand-kit/introduction'

const Companies: React.FC = () => {
  return (
    <Layout
      path="brand-kit"
      title="Brand Kit"
      description="Download and use the Paystring Brand Kit to share our vision of open payments"
    >
      <Introduction />
    </Layout>
  )
}

export default Companies
