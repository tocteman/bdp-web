import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default function BlogTemplate({ data }) {
  const post = data.markdownRemark

  return(
    <div>
      <h1>{post.frontmatter.title}</h1>
    </div>
  )
}

export const blogQuery = graphql`
query BlogPosts($slug: String!){
  markdownRemark(fields: { slug: { eq: $slug } }){
    html
    fields {
      slug
    }
    frontmatter {
      title
      date
      tipo
      thumbnail
      public
    }
    excerpt
  }
}
`