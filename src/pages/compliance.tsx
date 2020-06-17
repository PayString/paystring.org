import React from 'react'

import Community from '../components/common/community'
import Extensions from '../components/common/extensions'
import Learn from '../components/common/learn'
import Layout from '../components/layout'
import Benefits from '../components/pages/compliance/benefits'
import Introduction from '../components/pages/compliance/introduction'
import Synergy from '../components/pages/compliance/synergy'
import Walkthrough from '../components/pages/compliance/walkthrough'

const Compliance: React.FC = () => {
  return (
    <Layout path="compliance" title="Compliance">
      <Introduction />
      <Benefits />
      <Synergy />
      <Walkthrough />
      <Extensions />
      <Learn background="white" />
      <Community />
    </Layout>
  )
}

export default Compliance
