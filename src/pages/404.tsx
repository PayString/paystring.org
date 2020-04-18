import React from 'react'

import Layout from '../components/layout'

const NotFoundPage: React.FC = () => {
  return (
    <Layout title="404">
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
