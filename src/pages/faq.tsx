import React from 'react'

import Learn from '../components/common/learn'
import Questions from '../components/common/questions'
import Layout from '../components/layout'
import Introduction from '../components/pages/faq/introduction'

const FAQ: React.FC = () => {
  return (
    <Layout title="FAQ">
      <Introduction />
      <Learn background="white" />
      <Questions />
    </Layout>
  )
}

export default FAQ
