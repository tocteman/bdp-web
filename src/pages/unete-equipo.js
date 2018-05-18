import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const UneteEquipo = ({ data }) => (

<div>
    <div>
      <div className="flex flex-col w-full absolute z-10 text-white h-medio justify-center">
        <div className="mx-auto lg:max-w-xl md:ml-1/5 w-3/4">
          <h1 className="text-4xl sm:text-5xl pb-4 p-1 mb-2 leading-tight tracking-tight max-w-md text-white">Ünete a nuestro equipo.</h1>
          <p className="text-xl text-grey-lighter leading-normal p-1 max-w-md">Ayúdanos a construir esta nueva forma de ahorrar e invertir.</p>
        </div>
      </div>
      <Img sizes={data.escritorioImage.sizes} className="h-medio m-0" />
    </div>
    <div className="mb-16">
    <h3 className="mt-8 mb-4 mx-auto py-4 text-center pb-3">Ünete a la familia</h3>
    <hr/>
    <p className="pt-3 pb-8 text-center">Estamos buscando personas que quieran cambiar el mundo, un paso a la vez.</p>
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
    <p className="text-center mx-auto py-12">¿No encuentras lo que estás buscando? <span className="text-green">Escríbenos</span> y veremos algo para ti.</p>
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
      sizes(maxWidth: 3840, cropFocus: ENTROPY, duotone: {
   highlight: "#151616",
    shadow: "#191b1c",
    opacity: 60
  }){
      ...GatsbyImageSharpSizes_noBase64
      }
    }
    }
`
export default UneteEquipo