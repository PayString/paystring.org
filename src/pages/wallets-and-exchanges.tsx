import React from 'react'

import Community from '../components/common/community'
import Layout from '../components/layout'
import CaseStudies from '../components/pages/wallets/casestudies'
import Integrate from '../components/pages/wallets/integrate'
import Introduction from '../components/pages/wallets/introduction'

const Companies: React.FC = () => {
  return (
    <Layout
      path="wallets-and-exchanges"
      title="Wallets and Exchanges"
      description="PayID improves the user experience of wallets and exchanges. Learn more about how PayID can improve your applications user experience."
    >
      <Introduction />
      <CaseStudies />
      <Integrate />
      <Community
        title="Join the Coalition"
        description="of 50+ Partners and 120+ Million users and Grow your business."
        orangeButton
      />
    </Layout>
  )
}

export default Companies
