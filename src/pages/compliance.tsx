import React from 'react'

import Learn from '../components/common/learn'
import Questions from '../components/common/questions'
import Layout from '../components/layout'
import Benefits from '../components/pages/compliance/benefits'
import Extensions from '../components/pages/compliance/extensions'
import Introduction from '../components/pages/compliance/introduction'
import Synergy from '../components/pages/compliance/synergy'
import Walkthrough from '../components/pages/compliance/walkthrough'

const Compliance: React.FC = () => {
  return (
    <Layout title="Compliance">
      <Introduction />
      <Benefits />
      <Synergy />
      <Walkthrough />
      <Extensions />
      <Learn background="white" />
      <Questions />
    </Layout>
  )
}

export default Compliance
