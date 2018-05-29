import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import IconoCafe from '../img/iconos-colores/icono-placer-culpable.png'
import ReglaCompletandose from '../img/fotos_reglas/regla_completandose.png'
import FlechaAbajo from '../img/fotos_reglas/flechaAbajo.png'
import IdeaRegla from '../components/IdeaRegla';
import CarouselOne from '../components/CarouselOne'
import '../layouts/carousel.css'


const Reglas = ({ data }) => (
  <div>
    <div>
      <div className="flex flex-col w-full absolute z-10 text-white h-americano justify-center">
        <div className="mx-auto lg:max-w-xl md:ml-1/5 w-3/4">
          <h1 className="text-4xl sm:text-5xl pb-4 p-1 mb-2 leading-tight max-w-sm text-white">Transforma tu vida en ahorros automáticos.</h1>
          <p className="text-xl text-grey-lighter leading-normal p-1 max-w-sm">Conoce las <strong>Reglas de Ahorro autómatico</strong> y descubre las miles de formas en las que puedes ahorrar sin esfuerzo.</p>
        </div>
      </div>
      <Img sizes={data.surfImage.sizes} className="h-americano m-0" />
    </div>
    <div className="shadow-sm">
      <div className="mt-8 p-4 mx-auto leading-normal text-black max-w-xs sm:max-w-sm md:max-w-md text-center">
        <div className="text-3xl sm:text-4xl font-bold pb-3 leading-tight">Por qué ahorrar en automático.</div>
        <hr />
        <p className="py-3 leading-normal">Ahorrar siempre ha sido difícil y solo unos pocos han conseguido hacerlo de manera constante. Hasta ahora. Las <em>Reglas de Ahorro</em> son la mejor forma de ahorrar de manera entretenida y sin esfuerzo. Configura las <em>Reglas</em> según tu estilo de vida y deja que te lleven hacia tus sueños y metas.</p>
        <hr className="py-3"/>
        <p className="py-4">Cada regla está compuesta de una condición y una resolución.</p>
      </div>
      
      <div className="bg-white mx-2 sm:mx-4 md:mx-8">
        <CarouselOne />
      </div>
      
    
    
    </div>
    <div className="bg-grey-lightest border-t-1 border-grey pb-8">
      <ul className="flex flex-wrap px-3 sm:px-8 mx-auto justify-center py-16 max-w-3xl">
        {data.datosReglas.edges.map(post => (
          <li className="flex m-3 md:w-1/2 lg:w-1/3 max-w-xs rounded-lg shadow-md overflow-hidden ">
            <div className="flex flex-col overflow-hidden bg-white overflow">
              <Img resolutions={post.node.frontmatter.featuredImage.childImageSharp.resolutions} />
              <div className="flex px-4 pt-4 pb-2 items-center">
                <Img resolutions={post.node.frontmatter.icono.childImageSharp.resolutions} />
                <h4 className="font-medium pl-2 leading-tight">{post.node.frontmatter.nombre}</h4>
              </div>
              <p className="px-6 max-w-xs leading-normal pt-2 pb-4">
                {post.node.excerpt}
              </p>
              <hr/>
              <div className="flex justify-center items-center">
                <Img resolutions={post.node.frontmatter.miniIcono.childImageSharp.resolutions} className="my-4" />
                <p className="p-2 text-xs font-light">{post.node.frontmatter.requerimento}</p>

              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <IdeaRegla/>
  </div>
)

export const queryReglas = graphql`
query indexReglasQuery {
    datosReglas: allMarkdownRemark(
    filter: {fields: {slug:{regex:"/ejemplo-regla_/"} }}
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
            miniIcono{
              childImageSharp {
                resolutions(
                  width: 25
                  height: 25
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
                  height: 200
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
      sizes(maxWidth: 1920, cropFocus: ENTROPY
                    duotone: {
                    highlight: "#151616",
                    shadow: "#191b1c",
                    opacity: 50  }){
      ...GatsbyImageSharpSizes_noBase64
      }
    }
   
}
`

export default Reglas