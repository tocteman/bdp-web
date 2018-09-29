import React from "react";
import Link from "gatsby-link";
import Header from "../components/Header";
import IPhone from "../img/iphoneFilipinas.png"
import FaLongArrowDown from 'react-icons/lib/fa/long-arrow-down'
import FaShield from 'react-icons/lib/fa/shield'
import FaDollar from 'react-icons/lib/fa/dollar'
import FaBuildingO from 'react-icons/lib/fa/building-o'
import FaLineChart from 'react-icons/lib/fa/line-chart'
import FaLightbulbO from 'react-icons/lib/fa/lightbulb-o'
import FaList from 'react-icons/lib/fa/list'
import FaAndroid from 'react-icons/lib/fa/android'
import FaApple from 'react-icons/lib/fa/apple'
import Img from 'gatsby-image'
import StandardForm from '../components/StandardForm'
import RegistroForm from '../components/RegistroForm'
import AunNoLoTienes from "../components/AunNoLoTienes";
import AppleStore from "../img/aunNoTienes/app_store_alt.svg"
import GooglePlay from '../img/aunNoTienes/google_play.svg'
import { navigateTo } from "gatsby-link"

const IndexPage = ({ data }) => (
  <div>
    <div>
      <div className="flex flex-col w-full absolute h-screen2/3 xs:h-screen1/4 xl:h-casitoda md:h-screen mt-2">
        <div className="flex flex-col justify-between xs:justify-around md:justify-center z-10 md:items-center h-screen2/3 xs:h-screen1/4 xl:h-casitoda">
        <div className="md:flex md:items-center mx-auto w-full max-w-xl">
          <div className="md:w-3/5 max-w-sm mx-auto">
            <p className="text-center font-semibold md:text-left md:ml-8 lg:ml-0 text-4xl lg:text-5xl px-2 pt-4 leading-tight max-w-sm text-white font-serif">Tu vida. Tus reglas. </p>
            <p className="text-center font-semibold md:text-left md:ml-8 lg:ml-0 text-4xl lg:text-5xl px-2 mb-2 leading-tight max-w-sm text-white font-serif">Tus ahorros.</p>
            <p className="text-base text-center md:text-left lg:text-xl text-grey-lighter leading-normal max-w-sm lg:max-w-sm p-2 md:ml-8 lg:ml-0">Meta BdP es la forma más fácil y entretenida para ahorrar y hacer tus sueños realidad. </p>
            <div className="flex justify-center md:justify-start md:ml-8 lg:ml-0">
              <a href="/#solicitud"><button className="rounded bg-oceano text-white px-8 mx-2 py-4 my-3 hover:bg-oceano-dark shadow-light">Regístrate</button></a>
            </div>
            <div className="flex justify-around md:justify-between md:ml-8 lg:ml-0 py-4 max-w-sm md:w-3/5">
                <img src={GooglePlay} className="w-32"  />
                <img src={AppleStore} className="w-32"  />
            </div>
          </div>
          <div className="md:w-2/5 mx-auto my-8 text-center">
              <Img resolutions={data.iphoneImage.resolutions}  />
          </div>
        </div>
      </div>
      </div>
      <Img sizes={data.headerSunset.sizes} className="h-screen2/3 xs:h-screen1/4 md:h-screen xl:h-casitoda m-0" />
    </div>
    <div className="w-full bg-piedra-very-light">
      <div className="flex pt-16 px-8 pb-8 mx-auto text-piedra-very-dark max-w-xl">
        <div className="sm:w-full md:w-1/2 mx-auto">
          <div className="text-3xl sm:text-4xl font-semibold pb-3 leading-tight text-center font-serif">Piloto Meta BdP</div>
          <hr />
          <p className="pt-3 max-w-sm leading-normal mx-auto text-center">Banco del Pacífico te invita a probar una novedosa aplicación que te permite ahorrar según tu estilo de vida. Al usar las <em>Reglas de Ahorro Automático</em>, podrás elegir cuándo y cuánto ahorrar, y luego seguir viviendo tu vida. Mientras tanto, los ahorros se acumularán sin que lo notes.</p>
        </div>
      </div>
      <div className="flex flex-wrap p-4 max-w-xl mx-auto items-baseline pb-16">
        <div className="md:w-1/3 p-4 text-center mx-auto">
          <Img resolutions={data.descargaImage.resolutions} />
          <h4 className="leading-normal font-medium font-serif">Descarga la app</h4>
          <p className="max-w-sm leading-normal">Encuéntranos en la AppStore o en Google Play. Debes trabajar en el Banco del Pacífico para participar.</p>
        </div>
        <div className="md:w-1/3 p-4 text-center mx-auto">
          <Img resolutions={data.montaniaImage.resolutions} />
          <h4 className="leading-normal font-medium font-serif">Crea tu plan de ahorro</h4>
          <p className="max-w-sm leading-normal">Decide la meta que quieres conseguir y establece las Reglas de Ahorro que la harán realidad.</p>
        </div>
        <div className="md:w-1/3 p-4 text-center mx-auto">
          <Img resolutions={data.depositoImage.resolutions} />
          <h4 className="leading-normal font-medium font-serif">Activa tu cuenta</h4>
          <p className="max-w-sm leading-normal">Decide a qué cuenta transferiremos los ahorros. ¡Vive tu vida y mira cómo se van acumulando!</p>
        </div>
      </div>
    </div>
    <div className="bg-white">

      <ul className="list-reset border-t-2 border-b-2 bg-white border-piedra-lightest mx-auto">
        {data.pasosHome.edges.map(post => (
          <li className="m-0 p-0 w-full md:border-b-2 md:border-piedra-lightest py-2 sm:py-0">
            <div className="sm:flex sm:flex-row items-center">
              <div className="sm:w-1/3">
                <div className="z-20 my-8 sm:my-0 sm:mt-16 sm:ml-16 md:ml-24 lg:ml-32 xl:ml-1/5 sm:absolute mx-auto sm:flex justify-around items-center max-w-xl">
                  <div className="sm:w-1/3 sm:flex-shrink items-center text-center sm:text-left mx-auto sm:mx-0 sm:px-4 md:px-8 lg:px-8 xl:px-24 py-2">
                    <Img resolutions={post.node.frontmatter.imagenApp.childImageSharp.resolutions} />
                  </div>
                  <div className="sm:w-2/3 max-w-md sm:ml-24 md:ml-16 sm:max-w-xs text-center sm:text-left w-full">
                    <h3 className="px-2 pb-3 font-serif">{post.node.frontmatter.titulo}</h3>
                    <div className="mx-auto sm:mx-2 border-t-6 border-oceano w-12" />
                    <h5 className="max-w-xs md:max-w-sm mx-auto mt-8 sm:mt-16 mb-2 px-2 font-cielo">{post.node.frontmatter.subtitulo}</h5>
                    <div dangerouslySetInnerHTML={{ __html: post.node.html }} className="max-w-xs md:max-w-sm leading-normal mx-auto px-2" />
                  </div>
                </div>
                <Img sizes={post.node.frontmatter.imagenFondo.childImageSharp.sizes} className="sm:h-160 z-10 sm:relative hidden sm:block" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>


    <div className="bg-piedra-very-light pt-16">
    <div className="text-2xl sm:text-3xl font-semibold mx-auto text-center pb-4 font-serif">Detalles del Piloto</div>
    <hr />
      <div className="sm:flex max-w-xl mx-auto pb-8">
        <div className="flex flex-col mx-8 px-4 sm:px-12 sm:w-1/2 mx-auto text-center py-8 sm:py-0 max-w-sm leading-normal">
          <p className="pt-4">Regístrate en el piloto y sé parte de los 500 colaboradores que probarán esta nueva forma de ahorrar para luego ofrecer este producto a nuestro clientes.</p>
          <p className="pt-4">Para participar solo debes registrate y descargar la aplicación.</p>
          <p className="pt-4">Cierre de registros: <strong>25 de Septiembre de 2018</strong></p>
          <p className="pt-4">Inicio del piloto: <strong>28 de Septiembre de 2018</strong></p>
        </div>
        <div className="flex flex-wrap sm:w-1/2 mx-auto text-center pt-8 sm:py-0 max-w-xs items-end justify-center">
            <div className="flex flex-col content-center sm:w-1/2">
            <Img resolutions={data.detallesPilotoReloj.resolutions} />
              <strong>Duración</strong>
              <p>Tres meses</p><br/>
            </div>
          <div className="flex flex-col px-4 sm:w-1/2 text-center max-w-xs">
              <Img resolutions={data.detallesPilotoCupos.resolutions} />
              <strong>Cupos limitados</strong>
              <p>500 participantes</p><br />
            </div>
            <div className="flex flex-col sm:w-1/2 py-4">
              <div className="flex text-ocean text-center text-5xl justify-center">
              <FaAndroid className="text-oceano-lighter mx-1" stroke="#222222" strokeWidth="1"/>
              <FaApple className="text-oceano-lighter mx-1" stroke="#222222" strokeWidth="1"/>
              </div>
              <p className="pt-4"><strong>Disponible en</strong></p>
              <p>iOS y Android</p><br />
            </div>
          </div>    
    </div>

    <a name="requisitos" />
    <div className="text-2xl sm:text-3xl font-semibold mt-4 sm:mt-16 mx-auto text-center pb-4 font-serif">Requisitos del Piloto</div>
    <hr />
    <div className="sm:flex max-w-xl mx-auto pb-24">
      <div className="flex flex-col mx-8 px-4 sm:px-12 sm:w-1/2 mx-auto text-center py-8 sm:py-0 max-w-sm">
        <Img resolutions={data.requisitosPilotoChanchito.resolutions} />
        <h4 className="pt-4">Tener cuenta de ahorro activa en el Banco del Pacífico</h4>
        <p className="leading-normal pt-4">La cuenta es necesaria para que Übank separe tus ahorros de tu cuenta de gastos.</p>
        <p className="leading-normal pt-4">Si no tienes una cuenta de ahorro activa, debes abrir una antes del inicio del piloto. Contrátala desde aquí:</p>
          <a href="https://www.bancodelpacifico.com/personas/canales-de-atencion/virtuales/onboard-bdp" className="no-underline text-white" target="_blank">
            <button className="bg-cielo rounded-lg my-6 shadow-md max-w-md mx-auto px-4 py-4 text-white hover:bg-cielo-dark">
              Contrata tu cuenta Onboard BdP
            </button>
          </a>
      </div>
      <div className="flex flex-col mx-8 px-4 sm:px-12 sm:w-1/2 mx-auto text-center max-w-sm">
        <Img resolutions={data.requisitosPilotoTarjeta.resolutions} />
        <h4 className="pt-4">Usar tu cuenta Banco del Pacífico como cuenta principal</h4>
        <p className="leading-normal pt-4">Usa tus tarjetas del Banco del Pacífico para hacer tus gastos y compras diarias. Conforme las uses irás generando ahorros.</p>
        <p className="leading-normal pt-4">Al usar tus tarjetas Banco del Pacífico podrás visualizar todas tus compras categorizadas y ordenadas de forma automática.</p>
      </div>
    </div>
    </div>

    <a name="solicitud" />
    <div className="mx-auto py-16 bg-piedra-quite-dark">
      <h3 className="text-center mx-auto font-semibold sm:text-3xl pb-3 text-piedra-lightest font-serif">Se acabaron las excusas para no ahorrar.</h3>
      <div className="text-center max-w-sm p-3 leading-normal mx-auto text-piedra-lighter">Regístrate y sé parte de los 500 usuarios del piloto.</div>
      <hr className="pb-3" />
      <RegistroForm className="my-8" />
    </div>
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
  headerSunset: imageSharp(id: { regex: "/sunsetAmarillo/"}){
      sizes(maxWidth:1920, duotone: {highlight: "#151616", shadow: "#191b1c", opacity: 45} ){
        ...GatsbyImageSharpSizes_noBase64
      }
    }
  seguridadImage: imageSharp(id: { regex: "/tres_capas_seguridad_fondo/"}){
      sizes(maxWidth:1200 quality:80){
        ...GatsbyImageSharpSizes_noBase64
      }
    }
  iphoneImage: imageSharp(id: { regex: "/iphoneVacaciones/"}){
      resolutions(width:230){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
    montaniaImage: imageSharp(id: { regex: "/icono-cordillera/"}){
      resolutions(width:90){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
    depositoImage: imageSharp(id: { regex: "/icono-deposito/"}){
      resolutions(width:88){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
    descargaImage: imageSharp(id: { regex: "/icono-descarga/"}){
      resolutions(width:75){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
    detallesPilotoReloj: imageSharp(id: { regex: "/icono-cronometro/"}){
      resolutions(width:80){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
    detallesPilotoCupos: imageSharp(id: { regex: "/icono-conferencia/"}){
      resolutions(width:80){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
    requisitosPilotoChanchito: imageSharp(id: { regex: "/icono-chanchito/"}){
      resolutions(width:80){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
    requisitosPilotoTarjeta: imageSharp(id: { regex: "/icono-pago-tarjeta/"}){
      resolutions(width:80){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  }
`

export default IndexPage;