import React from 'react'
import Link from 'gatsby-link'

const UneteEquipo = ({ data }) => (
  <div>
    <h1 className="mx-auto mt-8 text-4xl font-medium text-center">Ünete a nuestro equipo</h1>
    <p className="font-light mx-auto p-4 text-center">Estamos buscando personas que quieran cambiar el mundo, un paso a la vez.</p>
    {data.allMarkdownRemark.edges.map(post => (
      <div className="flex mx-auto max-w-xl">
        <div className="w-full">
          <div className="flex flex-wrap group m-4 p-4 border rounded-lg text-center hover:bg-blue-lightest hover:text-white" key={post.node.id}>
            <div className="group w-1/2">
              <Link to={post.node.fields.slug} className="no-underline text-teal-darkest pb-1 font-medium hover:text-teal-darker">{post.node.frontmatter.title}</Link>
              <p className="no-underline text-sm font-light text-teal-darkest pb-1 hover:text-teal-darkest">{post.node.frontmatter.puesto}</p>
            </div>
            <div className="w-1/2">
              <Link to={post.node.fields.slug} className="no-underline"><button className="font-medium  bg-green-dark rounded p-2 text-sm shadow-md text-white hover:bg-green">Leer más.</button></Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export const pageQuery = graphql`
      query BlogIndexQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            id
            frontmatter {
              path
              title
              date
              puesto
            }
          }
        }
      }
    }
`
export default UneteEquipo