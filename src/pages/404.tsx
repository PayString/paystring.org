import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'

interface NotFoundPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}
const NotFoundPage: React.FC<NotFoundPageProps> = (
  props: React.PropsWithChildren<NotFoundPageProps>,
) => {
  return (
    <Layout title={props.data.site.siteMetadata.title}>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
