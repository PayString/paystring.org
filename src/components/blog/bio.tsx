import { useStaticQuery, graphql } from 'gatsby'
import Image, { FixedObject } from 'gatsby-image'
import React from 'react'

interface BioData {
  site: {
    siteMetadata: {
      social: {
        twitter: string
      }
    }
  }
  avatar: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
}

const Bio: React.FC = () => {
  const data = useStaticQuery<BioData>(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          social {
            twitter
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata
  return (
    <div className="flex">
      <Image fixed={data.avatar.childImageSharp.fixed} />
      <p>
        Written by <strong>Ripple</strong> Ripple is cool
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow us on Twitter
        </a>
      </p>
    </div>
  )
}

export default Bio
