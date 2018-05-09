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

const IndexPage = ({ data }) => (
  <div>  <div className="flex h-auto relative w-full mt-0 p-12 text-center self-center mb-8">
    <ReactGranimCanvas />
    <div className="flex flex-wrap p-4 text-center mx-auto">
      <div className="md:w-full lg:w-3/5 text-xl self-center">
        <h1 className="text-grey-lightest mb-4 leading-normal">Tu vida.<br /> Tus reglas.<br /> Tus ahorros.</h1>
        <p className="font-light mb-4 text-grey-light text-center leading-normal max-w-md mx-auto">Ûbank es la forma más fácil de cumplir tus objetivos financieros.</p>
        <button className="bg-green-dark rounded-full px-4 py-2 font-medium text-sm text-grey-lightest mb-8 hover:bg-green shadow-md">Download</button>
      </div>
      <div className="md:w-full lg:w-2/5 text-center text-xl mx-auto">
        <img src={IPhone} className="block mx-auto w-64" />
      </div>
    </div>
  </div>


    <div className="flex pt-8 px-8 pb-4 mx-auto text-blue-darkest max-w-xl mt-16">
      <div className="sm:w-full md:w-1/2 mx-auto">
        <h1 className="font-medium leading-normal">Qué es Übank</h1>
        <p className="max-w-sm leading-normal"><strong>Übank</strong> es la aplicación que te permite ahorrar según tu estilo de vida. A través de las <em>Reglas de Ahorro Automático</em>, puedes elegir cuándo ahorrar y seguir haciendo tu vida. Los ahorros se acumularán sin que te hayas cuenta.</p>
      </div>
    </div>
    <div className="flex flex-wrap p-4 max-w-xl mx-auto items-baseline mb-8">
      <div className="md:w-1/3 p-4 text-center">
        <Img resolutions={data.montaniaImage.resolutions} />
        <h2 className="leading-normal font-medium">Sueña</h2>
        <p className="max-w-sm leading-normal">Ahorra para las cosas que realmente te importan. Tú decides las <em>Reglas</em> que las harán realidad.</p>
      </div>
      <div className="md:w-1/3 p-4 text-center">
        <Img resolutions={data.coctelImage.resolutions} />
        <h2 className="leading-normal font-medium">Vive</h2>
        <p className="max-w-sm leading-normal">Ahorrar no tiene por qué significar sacrificarte. Vive tu vida y deja que <strong>Übank</strong> haga el trabajo difícil.</p>
      </div>
      <div className="md:w-1/3 p-4 text-center">
        <Img resolutions={data.creceImage.resolutions} />
        <h2 className="leading-normal font-medium">Crece</h2>
        <p className="max-w-sm leading-normal">Cuando las <em>Reglas</em> se activan, transferimos el dinero a una cuenta segura. Siempre estará disponible.</p>
      </div>
    </div>

    <div className="flex flex-wrap pt-8 m-8 mt-16 bg-blue-lightest max-w-xl mx-auto rounded-lg shadow-sm">
      <div className="sm:w-full md:w-1/2 pt-4 px-4 pb-0 mx-auto md:p-8">
        <div className="flex">
          <div className="wt-1/3 p-2">
            <div className="bg-green w-16 h-16 rounded-full shadow-md">
              <FaBuildingO className="mt-4 ml-4 text-3xl text-white text-center" />
            </div>
          </div>
          <div className="wt-2/3 p-2">
            <h4 className="leading-normal font-medium">Multibanco</h4>
            <p className="max-w-sm leading-normal">Conecta tus cuentas y tarjetas de tus bancos y elige desde cuáles quieres ahorrar.</p>
          </div>
        </div>
        <div className="flex">
          <div className="wt-1/3 p-2 pb-0">
            <div className="bg-green w-16 h-16 rounded-full shadow-md">
              <FaLightbulbO className="mt-4 ml-4 text-3xl text-white text-center" />
            </div>
          </div>
          <div className="wt-2/3 p-2">
            <h4 className="leading-normal font-medium">Recomendaciones</h4>
            <p className="max-w-sm leading-normal">Recibe recomendaciones de <em>Reglas</em> que podrías activar en base a tu estilo de vida.</p>
          </div>
        </div>
      </div>
      <div className="sm:w-full md:w-1/2 mx-auto pl-4 py-4 md:p-8">
        <div className="flex">
          <div className="wt-1/3 p-2">
            <div className="bg-green w-16 h-16 rounded-full shadow-md">
              <FaList className="mt-4 ml-4 text-3xl text-white text-center" />
            </div>
          </div>
          <div className="wt-2/3 p-2">
            <h4 className="leading-normal font-medium">Claridad</h4>
            <p className="max-w-sm leading-normal">Mira todas tus transacciones por categoría. Ahorra más, gasta mejor.</p>
          </div>
        </div>
        <div className="flex">
          <div className="wt-1/3 p-2">
            <div className="bg-green w-16 h-16 rounded-full shadow-md">
              <FaLineChart className="mt-4 ml-4 text-3xl text-white text-center" />
            </div>
          </div>
          <div className="wt-2/3 p-2">
            <h4 className="leading-normal font-medium">Rentabilidad</h4>
            <p className="max-w-sm leading-normal">Ahorrar fácil no es suficiente. Genera interés de todos los fondos que guardes mediante <strong>Übank</strong>.</p>
          </div>
        </div>
      </div>
    </div>
    
      <ul className="list-reset mt-16 lg:mt-32 border-t-2 bg-grey-lightest border-blue-lighter">
        {data.pasosHome.edges.map(post => (
        <li className="container m-0 p-0 w-full border-b-2 border-blue-lighter">
          <div className="sm:flex sm:flex-row sm:items-center">
            <div className="sm:w-1/3">
                <div className="z-20 my-8 sm:my-0 sm:mt-16 sm:ml-4 md:ml-16 lg:ml-32 xl:ml-48 sm:absolute mx-auto sm:flex justify-around items-center max-w-xl">
                  <div className="sm:w-1/3 sm:flex-shrink text-center sm:mx-0 sm:px-4 md:px-8 lg:px-16 xl:px-24">
                    <Img resolutions={post.node.frontmatter.imagenApp.childImageSharp.resolutions} />
                  </div>
                  <div className="sm:w-2/3 max-w-md sm:ml-8 lg:mx-16 px-4 sm:px-0 sm:pl-24 sm:pr-12 md:pl-16 md:pr-16 xl:pl-32 text-center sm:text-left w-full">
                  {/* <div className="sm:border-b-2 sm:border-blue-lighter mb-6"></div>  */}
                    {/* <h2 className="max-w-xs md:max-w-sm mx-auto">{post.node.frontmatter.titulo}</h2> */}
                    <h4 className="max-w-xs md:max-w-sm mx-auto">{post.node.frontmatter.subtitulo}</h4>
                    <p className="max-w-xs md:max-w-sm leading-normal mx-auto">{post.node.excerpt}</p>
                  </div>
                </div>
                <Img sizes={post.node.frontmatter.imagenFondo.childImageSharp.sizes} className="sm:h-160 z-10 sm:relative hidden sm:block" />
            </div>
            </div>
          </li>
        ))}
      </ul>
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
                    width:250
                    )  {
                      ...GatsbyImageSharpResolutions_noBase64
                    }
                }
              }
            }
            excerpt(pruneLength:300)
          }
        }
      }
    montaniaImage: imageSharp(id: { regex: "/icono-cordillera/"}){
      resolutions(width:90){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
    creceImage: imageSharp(id: { regex: "/crece/"}){
      resolutions(width:90){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
    coctelImage: imageSharp(id: { regex: "/coctel/"}){
      resolutions(width:90){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  }
`

export default IndexPage;
