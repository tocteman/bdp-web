import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'


const Equipo = ({ data }) => (
<div>
    <div>
      <div className="flex absolute z-10 text-white flex-wrap h-160 justify-end content-end items-end w-full">
        <div className="flex-1"></div>
        <div className="flex-2 p-8 md:p-32 max-w-md">
          <h1 className="p-1 leading-tight text-right bg-blue-darkest mb-2">Nuestra misión es que consigas la independencia financiera.</h1>
          <p className="p-1 font-medium text-xl leading-normal text-right bg-blue-darkest">Empecemos por el ahorro. Conoce al equipo y por qué estamos haciendo esto.</p>
        </div>
      </div>
      <Img sizes={data.columpioImage.sizes} className="h-160 m-0" />
    </div>
    <div className="shadow-sm">
      <div className="m-8 p-4 mx-auto leading-normal text-blue-darkest sm:max-w-sm md:max-w-md">
        <h1>Predeciblemente irracionales.</h1>
        <p>Uno de los conceptos más repetidos en finanzas personales es ahorrar. Todos dicen que hay que ahorrar para el retiro, ahorrar para emergencias, ahorrar para la casa propia. Pero no es tan fácil como dicen.</p><br/>
        <p>Una de las razones es porque ahorrar significa sacrificar dinero que podemos gastar hoy y guardarlo para un futuro, donde sabemos qué podemos conseguir con esos $100 pesos más. En el futuro no podemos percibirlo; ahora mismo sí. ¿Pero qué sucede cuando los acumulamos, $100 pesos diarios, una y otra vez?</p><br />
        <p>A través de mucha investigación, pruebas y análisis, hemos identificado que la mejor manera de conseguir el ahorro es haciéndolo automático. Que sea tan fácil y simple que solo debamos decidir ahorrar una vez y que luego todo funcione en segundo plano.</p>
      </div>
      </div>
    <div>
        <div className="bg-grey-lightest border-t-1 border-grey">
        <div>
          <h1 className="mx-auto text-center pt-8 mt-8">Equipo</h1>
          <p className="mx-auto text-center max-w-md mt-4">Procedemos de todo el mundo; nos hemos reunido para facilitarte la vida.</p>
        </div>
          
          <ul className="flex flex-wrap items-stretch px-6 mx-auto justify-center my-6 max-w-xl">
            {data.datosIntegrantes.edges.map(post => (
              <li className="m-6 max-w-sm overflow-hidden text-center">
              <Img resolutions={post.node.frontmatter.imagen.childImageSharp.resolutions} className="rounded shadow-md "/>
                  <h4 className="font-medium mt-2">{post.node.frontmatter.nombre} {post.node.frontmatter.apellido}</h4>
                  <p>{post.node.frontmatter.cargo}</p>
              </li>
            ))}
          </ul>
      <div>
        <h1 className="mx-auto text-center pt-8 mt-8">Mentores e Inversionistas</h1>
        <p className="mx-auto text-center max-w-md mt-4">Si queremos cambiar el mundo, necesitamos de los mejores. Ellos son quienes nos ayudan a llevar a cabo nuestra misión.</p>
      </div>

      <ul className="flex flex-wrap items-stretch px-6 mx-auto justify-center my-6 max-w-xl">
        {data.datosMentores.edges.map(post => (
          <li className="m-4 max-w-sm overflow-hidden text-center">
            <Img resolutions={post.node.frontmatter.imagen.childImageSharp.resolutions} className="rounded shadow-md " />
            <h4 className="font-medium mt-2">{post.node.frontmatter.nombre} {post.node.frontmatter.apellido}</h4>
            <p>{post.node.frontmatter.cargo}</p>
          </li>
        ))}
      </ul>
    </div>
        </div>
        <hr/>
    </div>

  )

export const equipoQuery = graphql`
query IntegrantesQuery {
  datosIntegrantes: allMarkdownRemark(
    filter: {frontmatter: {relacion: {regex: "/integrante/"}}}
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
                    opacity: 10  },
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
                    opacity: 10  },
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
    highlight: "#388dd1",
    shadow: "#327dba",
    opacity: 20
  }){
      ...GatsbyImageSharpSizes_noBase64
      }
    }
}
`
export default Equipo 