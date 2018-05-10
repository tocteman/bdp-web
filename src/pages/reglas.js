import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Reglas = ({ data }) => (
  <div>
    <div>
      <div className="flex absolute z-10 text-white max-w-xl flex-wrap h-128 items-center">
        <div className="md:flex-2 self-center mt-24 sm:mt-4 p-8 sm:p-32 max-w-md">
          <p className="text-4xl sm:text-5xl font-extrabold pb-4">Transforma tu vida con ahorros automáticos.</p>
          <p className="font-medium text-xl leading-normal">Conoce las <strong>Reglas de Ahorro autómatico</strong> y descubre las miles de formas en las que puedes ahorrar sin esfuerzo.</p>
        </div>
        <div className="flex-1"></div>
      </div>

      <Img sizes={data.surfImage.sizes} className="h-160 m-0" />
    </div>
    <div className="shadow-sm">
      <div className="mt-8 p-4 mx-auto leading-normal text-black max-w-xs sm:max-w-sm md:max-w-md">
        <h1 className="leading-tight mb-4">Por qué ahorrar en automático</h1>
        <p>Ahorrar siempre ha sido difícil y solo unos pocos han conseguido hacerlo de manera constante. Hasta ahora.</p>
        <p>Las <em>Reglas de Ahorro</em> son la mejor forma de ahorrar de manera entretenida y sin esfuerzo. Configura las <em>Reglas</em> según tu estilo de vida y deja que te lleven hacia tus sueños y metas.</p><br />
        <p>Las reglas son condiciones que se componen de dos partes: un evento y un ahorro.</p>

      </div>
      <h4 className="mx-auto font-light p-4 pb-16 text-black italic max-w-xs sm:max-w-sm md:max-w-md">"Ya tengo suficientes camisetas. Le diré a Übank que si me compro otra, guarde $10 para mi viaje a la playa".</h4>
    </div>
    <div className="bg-grey-lightest border-t-1 border-grey">
      <ul className="flex flex-wrap px-3 sm:px-8 mx-auto mt-8 justify-center py-16 max-w-3xl">
        {data.datosReglas.edges.map(post => (
          <li className="flex m-3 md:w-1/2 lg:w-1/3 max-w-xs rounded-lg shadow-md overflow-hidden ">
            <div className="flex flex-col overflow-hidden bg-white overflow">
              <Img resolutions={post.node.frontmatter.featuredImage.childImageSharp.resolutions} />
              <div className="flex px-4 pt-4 pb-2 items-center">
                <Img resolutions={post.node.frontmatter.icono.childImageSharp.resolutions} />
                <h3 className="font-medium pl-2 leading-tight">{post.node.frontmatter.nombre}</h3>
              </div>
              <p className="px-4 pb-2 text-grey-darker max-w-xs leading-normal">
                {post.node.excerpt}
              </p>
              <p className="p-4 text-sm italic font-light">{post.node.frontmatter.requerimento}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export const queryReglas = graphql`
  query indexReglasQuery {
    datosReglas: allMarkdownRemark(
    filter: {fields: {slug:{regex:"/regla_/"} }}
  ){
      edges {
        node{
          frontmatter {
            nombre
            requerimento
            icono{
              childImageSharp{
                resolutions(
                  width: 50
                  height: 50
                ){
                  ...GatsbyImageSharpResolutions_noBase64
                }
              }
            }
            featuredImage {
              childImageSharp {
                resolutions (
                  duotone: {
                    highlight: "#1bb876",
                    shadow: "#388dd1",
                    opacity: 10  }
                  width: 400
                  height: 300
                  cropFocus: ENTROPY
                ){
                  ...GatsbyImageSharpResolutions_noBase64
                }
              }
            }
          }
          excerpt
        }
      }
    }
    surfImage: imageSharp(id: {regex: "/header_surf/"}){
      sizes(maxWidth: 1920, cropFocus: ENTROPY, duotone: {
    highlight: "#184059",
    shadow: "#191b1c",
    opacity: 55
  }){
      ...GatsbyImageSharpSizes_noBase64
      }
    }
  }
`

export default Reglas