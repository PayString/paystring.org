import React from 'react'

import Community from '../components/common/community'
import Learn from '../components/common/learn'
import Layout from '../components/layout'
import Introduction from '../components/pages/faq/introduction'

const FAQ: React.FC = () => {
  return (
    <Layout
      path="universal-payment-identifier-faqs"
      title="Understanding, Deploying, and Using PayString"
      description="Get familiar with PayString through our development FAQs. You'll learn about who PayString is for, how to use it, and how to get started with your business today."
    >
      <Introduction />
      <Learn background="white" />
      <Community />
    </Layout>
  )
}

export default FAQ
