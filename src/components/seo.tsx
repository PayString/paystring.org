import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

interface SEOProps {
  description?: string
  lang?: string
  meta?: []
  title: string
}

interface Site {
  site: {
    siteMetadata: {
      title: string
      description: string
      social: {
        twitter: string
      }
    }
  }
}

const SEO: React.FC<SEOProps> = (props: SEOProps) => {
  const { site } = useStaticQuery<Site>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `,
  )
  const metaDescription = props.description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang: props.lang,
      }}
      title={props.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: props.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: props.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(props.meta || [])}
    />
  )
}

export default SEO
