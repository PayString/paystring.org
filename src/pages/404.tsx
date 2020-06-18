import React from 'react'

import Layout from '../components/layout'

const NotFoundPage: React.FC = () => {
  return (
    <Layout path="404" title="404" fixedNav>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&apos;t exist...</p>
    </Layout>
  )
}

export default NotFoundPage
