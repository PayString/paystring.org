import { Link, graphql } from 'gatsby'
import React from 'react'

import Bio from '../components/blog/bio'
import Layout from '../components/layout'
import { FrontMatter } from '../utils/types'

const BlogPost: React.FC<BlogPostProps> = (props: BlogPostProps) => {
  const post = props.data.markdownRemark
  const { previous, next } = props.pageContext

  return (
    <Layout
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    >
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr />
        <Bio />

        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default BlogPost

interface BlogPostProps {
  data: {
    markdownRemark: {
      id: string
      excerpt: string
      html: string
      frontmatter: FrontMatter
    }
  }
  pageContext: {
    next: {
      frontmatter: FrontMatter
      fields: {
        slug: string
      }
    }
    previous: {
      frontmatter: FrontMatter
      fields: {
        slug: string
      }
    }
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
