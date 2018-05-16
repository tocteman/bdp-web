import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import IconoCafe from '../img/iconos-colores/icono-placer-culpable.png'
import ReglaCompletandose from '../img/fotos_reglas/regla_completandose.png'
import FlechaAbajo from '../img/fotos_reglas/flechaAbajo.png'

const Reglas = ({ data }) => (
  <div>
    <div>
      <div className="flex absolute z-10 text-white max-w-xl flex-wrap h-160 sm:h-128 lg:items-center">
        <div className="mt-84 sm:mt-4 md:flex-2 sm:ml-4 mt-4 p-4 max-w-sm lg:ml-16 xl:ml-32 lg:p-16">
          <p className="text-3xl sm:text-4xl font-semibold pb-4 p-1 bg-gradient-blue-dark-to-blue mb-2">Transforma tu vida con ahorros automáticos.</p>
          <p className="text-xl leading-normal bg-gradient-blue-dark-to-blue p-1">Conoce las <strong>Reglas de Ahorro autómatico</strong> y descubre las miles de formas en las que puedes ahorrar sin esfuerzo.</p>
        </div>
        <div className="flex-1"></div>
      </div>

      <Img sizes={data.surfImage.sizes} className="h-160 m-0" />
    </div>
    <div className="shadow-sm">
      <div className="mt-8 p-4 mx-auto leading-normal text-black max-w-xs sm:max-w-sm md:max-w-md">
        <div className="text-3xl sm:text-4xl font-bold pb-3 leading-tight">Por qué ahorrar en automático.</div>
        <p>Ahorrar siempre ha sido difícil y solo unos pocos han conseguido hacerlo de manera constante. Hasta ahora.</p>
        <p>Las <em>Reglas de Ahorro</em> son la mejor forma de ahorrar de manera entretenida y sin esfuerzo. Configura las <em>Reglas</em> según tu estilo de vida y deja que te lleven hacia tus sueños y metas.</p>
        

      </div>
      <div className="max-w-xs sm:max-w-sm mx-auto bg-blue-lightest rounded-lg">
        <div className="italic p-4 ">Las reglas son condiciones que se componen de dos partes: un evento y un ahorro.</div>
      <div className="flex mb-8">
      <div className="w-4/5 mx-auto">
        <ul className="list-reset mx-auto text-black max-w-sm">
          <li className="p-4 m-4 rounded-lg bg-white shadow-md flex items-center justify-around">
              <div>Cada que compro un</div>
              <div><img src={IconoCafe} width="50" className="ml-2"/></div>
            </li>
            <li className="p-4 m-4 rounded-lg bg-white shadow-md flex items-center justify-around">
              <div>ahorro</div>  
              <div><span className="text-green text-4xl font-bold">$30</span></div>
            </li>
            <li className="p-4 m-4 rounded-lg bg-white shadow-md flex items-center justify-around">
              <div>para mi meta.</div>
              <div><img src={ReglaCompletandose} width="50" className="ml-4"/></div>
            </li>
        </ul>
        </div>
        <div className="flex flex-col justify-center -ml-8 pt-4">
          <div><img src={FlechaAbajo} width="25" className="pb-8 pt-12 mr-16 sm:mr-32"/></div>
          <div><img src={FlechaAbajo} width="25" className="pb-8 -mt-2 mr-16 sm:mr-32"/></div>
        </div>
      </div>
    </div>
    </div>
    <div className="bg-grey-lightest border-t-1 border-grey">
      <ul className="flex flex-wrap px-3 sm:px-8 mx-auto justify-center py-16 max-w-3xl">
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
                    shadow: "#117c41",
                    opacity: 1  }
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
      sizes(maxWidth: 1920, cropFocus: ENTROPY){
      ...GatsbyImageSharpSizes_noBase64
      }
    }
     cafeImage: allMarkdownRemark(
       filter: {fields: {slug:{regex:"/regla_placer-culposo/"} }}
     ){
       edges{
         node{
           frontmatter{
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
           }
         }
       }
     }
  }
`

export default Reglas