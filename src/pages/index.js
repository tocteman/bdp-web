import React from "react";
import Link from "gatsby-link";
import ReactGranimCanvas from "../components/ReactGranimCanvas"
import IPhone from "../img/iphone7.png"
import FaLongArrowDown from 'react-icons/lib/fa/long-arrow-down'
import FaShield from 'react-icons/lib/fa/shield'
import FaDollar from 'react-icons/lib/fa/dollar'
import FaBuildingO from 'react-icons/lib/fa/building-o'
import FaLineChart from 'react-icons/lib/fa/line-chart'
import FaLightbulbO from 'react-icons/lib/fa/lightbulb-o'
import FaList from 'react-icons/lib/fa/list'
import Img from 'gatsby-image'
import StandardForm from '../components/StandardForm'
import RegistroForm from '../components/RegistroForm'
import AunNoLoTienes from "../components/AunNoLoTienes";
import AppleStore from "../img/aunNoTienes/apple_store.svg"
import GooglePlay from '../img/aunNoTienes/google_play.svg'
import {navigateTo} from "gatsby-link"

const IndexPage = ({ data }) => (
  <div>
     <div>
       <div className="flex flex-col w-full absolute z-10 h-screen2/3 sm:h-screen1/2 md:h-screen xl:h-casitoda justify-around md:justify-center items-center">
        <div className="sm:flex items-center justify-around mx-auto w-full max-w-xl">
          <div className="md:w-3/5 max-w-sm mx-auto">
            <h1 className="text-4xl lg:text-5xl p-2 py-4 mb-2 leading-tight max-w-sm text-white">Tu vida. Tus reglas. Tus ahorros.</h1>
            <p className="text-base lg:text-xl text-grey-lighter leading-normal max-w-xs mx-auto lg:max-w-sm p-2">Übank es la forma más fácil y entretenida para ahorrar y hacer tus sueños realidad.</p>
            <a href="/#solicitud"><button className="rounded bg-green text-white mx-2 px-8 py-4 my-3 hover:bg-green-dark shadow-light"> Descargar</button></a>
            <div className="sm:flex justify-between py-4 max-w-xs w-3/5">
              <img src={GooglePlay} className="w-32" />
              <img src={AppleStore} className="w-32" />
            </div>
          </div>
          <div className="md:w-2/5 mx-auto my-8 text-center">
            <Img resolutions={data.iphoneImage.resolutions} />
          </div>
        </div>
       </div>
      <Img sizes={data.headerEstrellas.sizes} className="h-screen2/3 sm:h-screen1/2 md:h-screen xl:h-casitoda m-0" />
     </div>
    <div className="w-full bg-grey-lightest">
    <div className="flex pt-16 px-8 pb-8 mx-auto text-grey-darkest max-w-xl bg-grey-lightest">
      <div className="sm:w-full md:w-1/2 mx-auto">
        <div className="text-3xl sm:text-4xl font-semibold pb-3 leading-tight text-center">¿Qué es Übank?</div>
        <hr/>
        <p className="pt-3 max-w-sm leading-normal text-center"><strong>Übank</strong> es la aplicación que te permite ahorrar según tu estilo de vida. A través de las <em>Reglas de Ahorro Automático</em>, puedes elegir cuándo ahorrar y seguir haciendo tu vida. Los ahorros se acumularán sin que te des cuenta.</p>
      </div>
    </div>
    <div className="flex flex-wrap p-4 max-w-xl mx-auto items-baseline pb-16">
      <div className="md:w-1/3 p-4 text-center">
        <Img resolutions={data.montaniaImage.resolutions} />
        <h4 className="leading-normal font-medium">Sueña</h4>
        <p className="max-w-sm leading-normal">Ahorra para las cosas que realmente te importan. Tú decides las <em>Reglas</em> que las harán realidad.</p>
      </div>
      <div className="md:w-1/3 p-4 text-center">
        <Img resolutions={data.coctelImage.resolutions} />
        <h4 className="leading-normal font-medium">Vive</h4>
        <p className="max-w-sm leading-normal">Ahorrar no tiene por qué significar sacrificarte. Vive tu vida y deja que <strong>Übank</strong> haga el trabajo difícil.</p>
      </div>
      <div className="md:w-1/3 p-4 text-center">
        <Img resolutions={data.creceImage.resolutions} />
        <h4 className="leading-normal font-medium">Crece</h4>
        <p className="max-w-sm leading-normal">Cuando las <em>Reglas</em> se activan, transferimos el dinero a una cuenta segura. Siempre estará disponible.</p>
      </div>
    </div>
    </div>
    <div className="bg-white">
      
      <ul className="list-reset border-t-2 border-b-2 bg-white border-grey-lightest mx-auto">
        {data.pasosHome.edges.map(post => (
        <li className="m-0 p-0 w-full md:border-b-2 md:border-grey-lightest py-2 sm:py-0">
          <div className="sm:flex sm:flex-row items-center">
            <div className="sm:w-1/3">
                <div className="z-20 my-8 sm:my-0 sm:mt-16 sm:ml-16 md:ml-24 lg:ml-32 xl:ml-1/5 sm:absolute mx-auto sm:flex justify-around items-center max-w-xl">
                <div className="sm:w-1/3 sm:flex-shrink items-center text-center sm:text-left mx-auto sm:mx-0 sm:px-4 md:px-8 lg:px-8 xl:px-24 py-2">
                  <Img resolutions={post.node.frontmatter.imagenApp.childImageSharp.resolutions}/>
                  </div>
                  <div className="sm:w-2/3 max-w-md sm:ml-24 md:ml-16 sm:max-w-xs text-center sm:text-left w-full">
                    <h3 className="px-2 pb-3">{post.node.frontmatter.titulo}</h3>
                    <div className="mx-auto sm:mx-2 border-t-6 border-green w-12" />
                    <h5 className="max-w-xs md:max-w-sm mx-auto mt-8 sm:mt-16 mb-2 px-2">{post.node.frontmatter.subtitulo}</h5>
                    <div dangerouslySetInnerHTML={{ __html: post.node.html }} className="max-w-xs md:max-w-sm leading-normal mx-auto px-2"/>
                  </div>
                </div>
                <Img sizes={post.node.frontmatter.imagenFondo.childImageSharp.sizes} className="sm:h-160 z-10 sm:relative hidden sm:block fadeIn:false" />
            </div>
            </div>
          </li>
        ))}
      </ul>
    </div>

    <div className="py-8 mt-16 mb-8 max-w-xl mx-auto">
    <div className="text-2xl sm:text-3xl font-semibold mb-4 mx-auto text-center pb-3">Funcionalidades</div>
    <hr/>
    <div className="sm:flex flex-wrap justify-around pt-3">
      <div className="sm:w-full md:w-1/2 pt-4 px-4 pb-0 mx-auto md:p-8">
        <div className="flex items-center">
          <div className="wt-1/3 p-2">
            <div className="bg-green w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-md">
              <FaBuildingO className="mt-3 ml-3 sm:mt-4 sm:ml-4 text-2xl sm:text-3xl text-white text-center" />
            </div>
          </div>
          <div className="wt-2/3 p-2 m-4">
              <div className="leading-normal font-normal text-xl font-medium">Multibanco</div>
            <p className="max-w-sm leading-normal">Conecta tus cuentas y tarjetas de tus bancos y elige desde cuáles quieres ahorrar.</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="wt-1/3 p-2 pb-0">
              <div className="bg-green w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-md">
                <FaLightbulbO className="mt-3 ml-3 sm:mt-4 sm:ml-4 text-2xl sm:text-3xl text-white text-center" />
            </div>
          </div>
          <div className="wt-2/3 p-2 m-4">
              <div className="leading-normal font-normal text-xl font-medium">Recomendaciones</div>
            <p className="max-w-sm leading-normal">Recibe recomendaciones de <em>Reglas</em> que podrías activar en base a tu estilo de vida.</p>
          </div>
        </div>
      </div>
      <div className="sm:w-full md:w-1/2 mx-auto pl-4 py-4 md:p-8">
        <div className="flex items-center">
          <div className="wt-1/3 p-2">
              <div className="bg-green w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-md">
                <FaList className="mt-3 ml-3 sm:mt-4 sm:ml-4 text-2xl sm:text-3xl text-white text-center" />
            </div>
          </div>
          <div className="wt-2/3 p-2 m-4">
              <div className="leading-normal font-normal text-xl font-medium">Claridad</div>
            <p className="max-w-sm leading-normal">Mira todas tus transacciones por categoría. Ahorra más, gasta mejor.</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="wt-1/3 p-2">
              <div className="bg-green w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-md">
                <FaLineChart className="mt-3 ml-3 sm:mt-4 sm:ml-4 text-2xl sm:text-3xl text-white text-center" />
            </div>
          </div>
          <div className="wt-2/3 p-2 m-4">
              <div className="leading-normal font-normal text-xl font-medium">Rentabilidad</div>
            <p className="max-w-sm leading-normal">Ahorrar fácil no es suficiente. Genera interés de todos los fondos que guardes mediante <strong>Übank</strong>.</p>
          </div>
        </div>
      </div>
    </div>
    </div>

  <div className="bg-grey-lightest md:py-16 border-1 border-t-grey-lighter border-b-grey-lighter">
    <div className="md:flex mx-auto justify-center items-center max-w-xl p-2">
      <div className="md:w-2/3 pt-8 sm:pb-8 mx-auto max-w-md px-8"><Img sizes={ data.seguridadImage.sizes} /></div>
        <div className="text-center md:text-left md:w-1/3 leading-normal max-w-xs md:max-w-sm mx-auto pb-24 sm:px-4 md:px-6 pt-4">
          <h3 className="pb-3">Seguridad</h3>
          <div className="mx-auto sm:mx-0 border-t-6 border-green w-12" />
          <h5 className="mt-16">Tu dinero seguro. Siempre.</h5>
          <p>Al registrate en Übank, aperturaremos automáticamente una cuenta de ahorros en un banco partner. Tus ahorros siempre estarán seguros y disponibles para usarlos cuando quieras. Dile adiós a ahorrar en la misma cuenta bancaria que no genera interés.</p>
        </div>
    </div>
  </div>

    <div className="text-center mx-auto text-2xl font-semibold sm:text-3xl mt-16 pb-3">Prensa</div>
    <hr/>
    <ul className="list-reset flex flex-wrap items-center mx-auto justify-around max-w-xs sm:max-w-sm md:max-w-xl pt-3">
      {data.prensaQuery.edges.map(post => (
      <li className="px-3 py-4 sm:py-4 md:py-2 w-1/2 sm:w-1/3 md:w-1/5 text-center mx-auto w-32"><a href={post.node.frontmatter.link} target="_blank"><Img resolutions={post.node.frontmatter.imagen.childImageSharp.resolutions}/></a></li>
      ))}
    </ul>

    <div className="text-2xl sm:text-3xl font-semibold mt-16 mx-auto text-center pb-3">Testimonios</div>
    <hr />
    <ul className="pt-3 flex flex-wrap justify-center max-w-xl mx-auto list-reset">{data.datosTestimonios.edges.map(post => (
      <li className="sm:w-1/2 lg:w-1/3 p-4 mx-auto text-center">
          <Img resolutions={post.node.frontmatter.imagen.childImageSharp.resolutions} className="rounded-full shadow-md" />
          <div className="max-w-sm mx-auto p-4">
          <div className="font-semibold text-xl sm:text-2xl mt-2 leading-tight text-center">{post.node.frontmatter.nombre} {post.node.frontmatter.apellido}</div>
            <p className="text-grey-darker font-light pb-2">{post.node.frontmatter.cargo}</p>
            <p className="max-w-xs leading-normal mx-auto text-sm italic font-light">{post.node.excerpt}</p>
          </div>
          
          </li>
      ))}
      </ul>
    <a name="solicitud" />
      <div className="bg-grey-lightest rounded shadow-md mx-auto mt-16 py-16">
        <div className="text-center mx-auto text-2xl font-semibold sm:text-3xl pb-3">Solicita tu invitación</div>
        <hr className="pb-3"/>
        <RegistroForm />
      </div>
      
      
      <AunNoLoTienes />
  </div>
);

export const query = graphql`
  query indexHomeQuery {
    pasosHome: allMarkdownRemark(
      filter: {fields: { slug: {regex: "/home-pasos/"}}}
      sort: {fields:[frontmatter___pasoNro], order:ASC}
      ){
        edges {
          node {
            frontmatter {
              titulo
              subtitulo
              imagenFondo {
                childImageSharp {
                  sizes (
                    maxWidth: 1200
                    quality: 70
                    duotone: {
                    highlight: "#1bb876",
                    shadow: "#388dd1",
                    opacity: 15  }
                    ) 
                    {
                      ...GatsbyImageSharpSizes_noBase64
                    }
                }
              }
              imagenApp {
                childImageSharp {
                  resolutions (
                    width:225
                    )  {
                      ...GatsbyImageSharpResolutions_noBase64
                    }
                }
              }
            }
            html
          }
        }
      }
    datosTestimonios: allMarkdownRemark(
    filter: {frontmatter: {relacion: {regex: "/testimonio/"}}}
  ) {
    edges {
      node{
        frontmatter {
          nombre
          apellido
          cargo
          imagen {
            childImageSharp {
              resolutions(
                width: 150
                height: 150
                cropFocus: ENTROPY
                duotone: {
                    highlight: "#1bb876",
                    shadow: "#388dd1",
                    opacity: 10  },
              ) {
                ...GatsbyImageSharpResolutions_noBase64
              }
            }
          }
        }
        excerpt 
      }
    }
  }
  prensaQuery: allMarkdownRemark(
    filter: {fields:{slug: {regex: "/home-prensa/"}}}
  ){
    edges {
      node {
        frontmatter {
          link
          imagen {
            childImageSharp {
              resolutions(
                width: 125
                duotone: {
                    highlight: "#ffffff",
                    shadow: "#2d3342"  },
                ){
                  ...GatsbyImageSharpResolutions_noBase64
                }
            }
          }
        }
      }
    }
  }
  headerEstrellas: imageSharp(id: { regex: "/header_estrellas/"}){
      sizes(maxWidth:1920, duotone: {highlight: "#151616", shadow: "#191b1c", opacity: 45} )
      {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
  seguridadImage: imageSharp(id: { regex: "/tres_capas_seguridad_fondo/"}){
      sizes(maxWidth:1200 quality:80){
        ...GatsbyImageSharpSizes_noBase64
      }
    }
  iphoneImage: imageSharp(id: { regex: "/home_welcome_iphone/"}){
      resolutions(width:225){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
    montaniaImage: imageSharp(id: { regex: "/icono-cordillera/"}){
      resolutions(width:90){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
    creceImage: imageSharp(id: { regex: "/icono-crece/"}){
      resolutions(width:90){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
    coctelImage: imageSharp(id: { regex: "/icono-coctel/"}){
      resolutions(width:90){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  }
`

export default IndexPage;
