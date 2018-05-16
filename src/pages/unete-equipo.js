import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const UneteEquipo = ({ data }) => (

<div>
    <div>
      <div className="flex absolute z-10 flex-wrap h-160  w-full">
        <div className="flex-1"></div>
        <div className="flex-2 p-8 md:p-32 max-w-md mt-8">
          <h1 className="p-1 leading-tight text-right mb-2 bg-grey-lightest sm:bg-transparent">Ünete a nuestro equipo.</h1>
          <p className="p-1 font-medium text-xl leading-normal text-right bg-grey-lightest sm:bg-transparent">Ayúdanos a construir esta nueva forma de ahorrar e invertir.</p>
        </div>
      </div>
      <Img sizes={data.escritorioImage.sizes} className="h-160 m-0" />
    </div>
    <div className="mb-16">
    <p className="mt-8 mb-4 mx-auto p-4 text-center text-xl max-w-md leading-normal font-medium">Estamos buscando personas que quieran cambiar el mundo, un paso a la vez.</p>
    {data.vacanteIndexQuery.edges.map(post => (
      <div className="flex mx-auto max-w-xl">
        <div className="w-full">
          <div className="flex flex-wrap group m-4 p-4 border rounded-lg text-center hover:bg-grey-lightest hover:text-white" key={post.node.id}>
            <div className="group w-1/2">
              <Link to={post.node.fields.slug} className="no-underline text-grey-darkest pb-1 font-medium hover:text-teal-darker">{post.node.frontmatter.title}</Link>
              <p className="no-underline text-sm font-light text-blue-darkest pb-1 hover:text-blue-darker">{post.node.frontmatter.puesto}</p>
            </div>
            <div className="w-1/2">
              <Link to={post.node.fields.slug} className="no-underline"><button className="font-medium  bg-green-dark rounded p-2 text-sm shadow-md text-white hover:bg-green">Leer más.</button></Link>
            </div>
          </div>
        </div>
        <br/>
      </div>
    ))}
    </div>
  </div>
)

export const uneteQuery = graphql`
  query UneteQuery {
    vacanteIndexQuery:  allMarkdownRemark (
        filter: {fields: {slug: { regex: "/paginas/"}}}
      ){
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
    escritorioImage: imageSharp(id: {regex: "/header_escritorio/"}){
      sizes(maxWidth: 1920, cropFocus: ENTROPY, duotone: {
   highlight: "#184059",
    shadow: "#191b1c",
    opacity: 5
  }){
      ...GatsbyImageSharpSizes_noBase64
      }
    }
    }
`
export default UneteEquipo