import React from 'react'

import Learn from '../components/common/learn'
import Questions from '../components/common/questions'
import Layout from '../components/layout'
import Institutions from '../components/pages/home/institutions'
import Integrate from '../components/pages/home/integrate'
import Introduction from '../components/pages/home/introduction'
import JoinUs from '../components/pages/home/join-us'

const Index: React.FC = () => {
  return (
    <Layout title="Home">
      <Introduction />
      <JoinUs />
      <Integrate />
      <Institutions />
      <Learn background="white" direction="rtl" />
      <Questions direction="rtl" />
    </Layout>
  )
}

export default Index
