import React from 'react'
import Link from 'gatsby-link'
import Header from "../components/Header";
import Img from 'gatsby-image'
import QuieresTrabajar from '../components/QuieresTrabajar';


const Equipo = ({ data }) => (
<div>
    <div>
      <div className="flex flex-col w-full absolute h-americano mt-2">
      <Header />
      <div className="flex flex-col z-10 text-white h-americano justify-center -mt-2">
        <div className="mx-auto lg:max-w-xl md:ml-1/5 w-3/4">
          <h1 className="text-2xl sm:text-5xl pb-4 p-1 mb-2 leading-tight max-w-lg text-white">Nuestra misión es ayudarte a lograr tu independencia financiera, comenzando por el ahorro.</h1>
          <p className="text-xl text-grey-lighter leading-normal p-1 max-w-sm ">Conoce al equipo y por qué estamos haciendo esto.</p>
        </div>
      </div>
      </div>
      <Img sizes={data.columpioImage.sizes} className="h-americano m-0" />
    </div>
    <div className="shadow-sm">
      <div className="m-8 p-4 mx-auto leading-normal max-w-xs sm:max-w-sm md:max-w-md text-center">
        <div className="text-3xl sm:text-4xl font-bold pb-3 leading-tight text-center">Predeciblemente irracionales.</div>
        <hr />
        <p className="pt-3">Uno de los conceptos más repetidos en finanzas personales es ahorrar. Todos dicen que hay que ahorrar para el retiro, ahorrar para emergencias, ahorrar para la casa propia. Pero no es tan fácil como dicen.</p><br/>
        <p>Una de las razones es porque ahorrar significa sacrificar dinero que podemos gastar hoy y guardarlo para un futuro, donde sabemos qué podemos conseguir con esos $100 pesos más. En el futuro no podemos percibirlo; ahora mismo sí. ¿Pero qué sucede cuando los acumulamos, $100 pesos diarios, una y otra vez?</p><br />
        <p>A través de mucha investigación, pruebas y análisis, hemos identificado que la mejor manera de conseguir el ahorro es haciéndolo automático. Que sea tan fácil y simple que solo debamos decidir ahorrar una vez y que luego todo funcione en segundo plano.</p>
      </div>
      </div>
    <div>
        <div className="bg-grey-lightest border-t-1 border-grey py-8">
        <div>
          <div className="text-3xl sm:text-4xl mx-auto text-center mt-4 font-semibold pb-3">Equipo</div>
          <hr />
          <p className="mx-auto text-center max-w-xs sm:max-w-sm mt-4 leading-normal px-4 pt-3">Venimos de todo el mundo, con la misión de hacer tu vida más fácil y entretenida.</p>
        </div>
          
          <ul className="flex flex-wrap items-stretch px-6 mx-auto justify-center mt-6 max-w-xl">
            {data.datosIntegrantes.edges.map(post => (
              <li className="m-6 max-w-sm overflow-hidden text-center">
              <Img resolutions={post.node.frontmatter.imagen.childImageSharp.resolutions} className="rounded shadow-md "/>
                  <div className="font-medium text-2xl mt-2 max-w-xxs leading-normal">{post.node.frontmatter.nombre} {post.node.frontmatter.apellido}</div>
              <p className="font-light text-grey-darker">{post.node.frontmatter.cargo}</p>
              </li>
            ))}
          </ul>
      <div>
          <div className="text-3xl sm:text-4xl mx-auto text-center mt-8 font-semibold pb-3">Mentores & Inversionistas</div>
          <hr />
          <p className="mx-auto text-center max-w-xs sm:max-w-md mt-4 leading-normal px-4 pt-3">Si queremos cambiar el mundo, necesitamos de los mejores. Ellos son quienes nos ayudan a llevar a cabo nuestra misión.</p>
      </div>

      <ul className="flex flex-wrap items-stretch px-6 mx-auto justify-center mt-6 max-w-xl">
        {data.datosMentores.edges.map(post => (
          <li className="m-4 max-w-sm overflow-hidden text-center">
            <Img resolutions={post.node.frontmatter.imagen.childImageSharp.resolutions} className="rounded shadow-md " />
              <div className="font-semibold text-xl sm:text-2xl mt-2 max-w-xxs leading-tight">{post.node.frontmatter.nombre} {post.node.frontmatter.apellido}</div>
            <p className="font-light text-grey-darker">{post.node.frontmatter.cargo}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
    <QuieresTrabajar />
    </div>

  )

export const equipoQuery = graphql`
query IntegrantesQuery {
  datosIntegrantes: allMarkdownRemark(
    filter: {frontmatter: {relacion: {regex: "/integrante/"}}}
    sort: {fields:[frontmatter___orden], order:ASC}

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
                width: 200
                height: 200
                cropFocus: ENTROPY
                duotone: {
                    highlight: "#1bb876",
                    shadow: "#388dd1",
                    opacity: 5  },
              ) {
                ...GatsbyImageSharpResolutions_noBase64
              }
            }
          }
        }
        
      }
    }
  }
  datosMentores: allMarkdownRemark(
    filter: {frontmatter: {relacion: {regex: "/mentor/"}}}
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
                width: 200
                height: 200
                cropFocus: ENTROPY
                duotone: {
                    highlight: "#1bb876",
                    shadow: "#388dd1",
                    opacity: 5  },
              ) {
                ...GatsbyImageSharpResolutions_noBase64
              }
            }
          }
        }
        
      }
    }
  }
  columpioImage: imageSharp(id: {regex: "/header_columpio/"}){
      sizes(maxWidth: 1920, cropFocus: ENTROPY, duotone: {
    highlight: "#151616",
    shadow: "#151616",
    opacity: 50
  }){
      ...GatsbyImageSharpSizes_noBase64
      }
    }
}
`
export default Equipo 