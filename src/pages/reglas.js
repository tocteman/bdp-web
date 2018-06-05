import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import IconoCafe from '../img/iconos-colores/icono-placer-culpable.png'
import ReglaCompletandose from '../img/fotos_reglas/regla_completandose.png'
import FlechaAbajo from '../img/fotos_reglas/flechaAbajo.png'
import IdeaRegla from '../components/IdeaRegla';
import CarouselOne from '../components/CarouselOne'
import HeaderAlt from '../components/HeaderAlt'


const Reglas = ({ data }) => (
  <div>
    <div className="pt-2 bg-solid-gradient-white-grey-lightest">
      <HeaderAlt />
      <div className="flex flex-col mx-auto max-w-xl text-center py-16">
        <h1 className="text-4xl sm:text-5xl pb-4 p-1 mb-2 leading-tight max-w-sm mx-auto text-grey-darkest">Ahorra mientras vives tu vida.</h1>
        <p className="text-xl text-grey-darkest leading-normal p-1 max-w-md mx-auto">Conoce las <strong>Reglas de Ahorro autómatico</strong> y descubre las miles de formas en las que puedes ahorrar sin esfuerzo.</p>
      </div>
      <div>
          <div className="absolute hidden sm:block pin-x mx-auto">
            <div className="mx-auto text-center">
              <Img resolutions={data.iphoneImageReglas.resolutions}/>
            </div>
          </div>

      <div className="relative mx-4 sm:mx-8 lg:mx-16"> 
        <div className="flex flex-col mx-auto max-w-lg  z-20 mb-16 sm:mb-32">
          <div className="flex max-w-lg justify-around sm:justify-between py-4">
            <div className=""><Img resolutions={data.headerFacebookReglas.resolutions} /></div>
              <div className="block sm:hidden"><Img resolutions={data.headerPlacerCulpableReglas.resolutions} /></div>
            <div className="block sm:hidden"><Img resolutions={data.headerDesafioReglas.resolutions} /></div>
            <div><Img resolutions={data.headerWeatherReglas.resolutions} /></div>
          </div>
          <div className="flex justify-around max-w-lg py-4">
                <div><Img resolutions={data.headerSpotifyReglas.resolutions} /></div>
                <div className="block sm:hidden"><Img resolutions={data.headerMontoFijoReglas.resolutions} /></div>
                <div className="block sm:hidden"><Img resolutions={data.headerTwitterReglas.resolutions} /></div>
                <div><Img resolutions={data.headerCabifyReglas.resolutions} /></div>
              
            </div>
          <div className="flex max-w-lg justify-around py-4">
              <div><Img resolutions={data.headerRunkeeperReglas.resolutions} /></div>
              <div><Img resolutions={data.headerUberReglas.resolutions} /></div>
              <div><Img resolutions={data.headerInstagramReglas.resolutions} /></div>
              <div><Img resolutions={data.headerEspnReglas.resolutions} /></div>
            </div>
          <div className="flex max-w-lg justify-around sm:justify-between py-8">
              <div><Img resolutions={data.headerCreditCardReglas.resolutions} /></div>
              <div><Img resolutions={data.headerCoinsReglas.resolutions} /></div>
              <div><Img resolutions={data.headerGoogleMapsReglas.resolutions} /></div>
              <div className="block sm:hidden"><Img resolutions={data.headerFitbitReglas.resolutions} /></div>
            </div>
        
        </div>
      </div>

      </div>
    </div>


    <div className="shadow-sm">
      <div className="mt-8 p-4 mx-auto leading-normal max-w-xs sm:max-w-sm md:max-w-md text-center">
        <div className="text-3xl sm:text-4xl font-bold pb-3 leading-tight">Por qué ahorrar en automático.</div>
        <hr />
        <p className="py-3 leading-normal">Las Reglas de Ahorro convierten tu estilo de vida y tus aplicaciones favoritas en ahorros automáticos. Con ellas podrás seguir haciendo lo que más te gusta y al mismo tiempo ahorrar para las cosas que más te importan.</p>
        <hr className="py-3"/>
        <p className="py-4">Cada regla está compuesta de una condición y una resolución.</p>
      </div>
      
      <div className="bg-white mx-2 sm:mx-4 md:mx-8">
        <CarouselOne />
      </div>
      
    
    
    </div>
    <div className="bg-grey-lightest border-grey pb-8">
      <ul className="flex flex-wrap px-3 sm:px-8 mx-auto justify-center py-16 max-w-3xl xl:max-w-4xl xl:py-24 xl:px-8">
        {data.datosReglas.edges.map(post => (
          <li className="flex m-3 md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-xs rounded-lg shadow-md overflow-hidden ">
            <div className="flex flex-col overflow-hidden bg-white overflow">
              <Img resolutions={post.node.frontmatter.featuredImage.childImageSharp.resolutions} fadeIn={false} />
              <div className="flex px-4 pt-4 pb-2 items-center">
                <Img resolutions={post.node.frontmatter.icono.childImageSharp.resolutions} fadeIn={false} />
                <h4 className="font-medium pl-2 leading-tight">{post.node.frontmatter.nombre}</h4>
              </div>
              <p className="px-6 max-w-xs leading-normal pt-2 pb-4">
                {post.node.excerpt}
              </p>
              <hr/>
              <div className="flex justify-center items-center">
                <Img resolutions={post.node.frontmatter.miniIcono.childImageSharp.resolutions} className="my-4" fadeIn={false} />
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
                    width: 65
                    height: 65
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
  iphoneImageReglas: imageSharp(id: { regex: "/home_pasos_home/"}){
      resolutions(width:225){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  headerCabifyReglas: imageSharp(id: { regex: "/header_reglas_cabify/"}){
      resolutions(width:65){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  headerCoinsReglas: imageSharp(id: { regex: "/header_reglas_coins/"}){
      resolutions(width:65){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  headerCreditCardReglas: imageSharp(id: { regex: "/header_reglas_credit-card/"}){
      resolutions(width:65){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  headerEspnReglas: imageSharp(id: { regex: "/header_reglas_espn/"}){
      resolutions(width:65){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  headerFacebookReglas: imageSharp(id: { regex: "/header_reglas_facebook/"}){
      resolutions(width:65){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  headerGoogleMapsReglas: imageSharp(id: { regex: "/header_reglas_googlemaps/"}){
      resolutions(width:65){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  headerInstagramReglas: imageSharp(id: { regex: "/header_reglas_instagram/"}){
      resolutions(width:65){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  headerPlacerCulpableReglas: imageSharp(id: { regex: "/header_reglas_placer_culpable/"}){
      resolutions(width:65){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  headerRunkeeperReglas: imageSharp(id: { regex: "/header_reglas_runkeeper/"}){
      resolutions(width:65){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  headerSpotifyReglas: imageSharp(id: { regex: "/header_reglas_spotify/"}){
      resolutions(width:65){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  headerUberReglas: imageSharp(id: { regex: "/header_reglas_uber/"}){
      resolutions(width:65){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  headerWeatherReglas: imageSharp(id: { regex: "/header_reglas_weather/"}){
      resolutions(width:65){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  headerFitbitReglas: imageSharp(id: { regex: "/header_reglas_fitbit/"}){
      resolutions(width:65){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  headerTwitterReglas: imageSharp(id: { regex: "/header_reglas_twitter/"}){
      resolutions(width:65){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  headerDesafioReglas: imageSharp(id: { regex: "/header_reglas_desafio/"}){
      resolutions(width:65){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
    headerMontoFijoReglas: imageSharp(id: { regex: "/header_reglas_monto-fijo/"}){
      resolutions(width:65){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
   
}
`

export default Reglas