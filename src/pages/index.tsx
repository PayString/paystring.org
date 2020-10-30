import React from 'react'

import Community from '../components/common/community'
import Learn from '../components/common/learn'
import Layout from '../components/layout'
import Integrate from '../components/pages/home/integrate'
import Introduction from '../components/pages/home/introduction'
import Questions from '../components/pages/home/questions'
import Support from '../components/pages/home/support'

const Index: React.FC = () => {
  return (
    <Layout
      path=""
      title="Open Source, Universal Payment Identifier"
      description="PayID provides a single ID for anyone needing to send or receive money. Learn about PayID's open-source protocol & how to connect users on any payment network."
    >
      <Introduction />
      <Integrate />
      <Support />
      <Learn background="white" direction="rtl" />
      <Community direction="rtl" className="hidden md:block" />
      <Questions direction="rtl" className="md:hidden" />
    </Layout>
  )
}

export default Index
