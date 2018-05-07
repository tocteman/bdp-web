import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Reglas = ({ data }) => (
  <div>
    <div>
      <div className="flex absolute z-10 text-white max-w-xl flex-wrap h-128">
        <div className="md:flex-2 self-center p-8 md:p-32 max-w-md">
          <p className="text-5xl font-extrabold pb-4">Transforma tu vida con ahorros automáticos.</p>
          <p className="font-medium text-xl leading-normal">Conoce las <strong>Reglas de Ahorro autómatico</strong> y descubre las miles de formas en las que puedes ahorrar sin esfuerzo.</p>
        </div>
        <div className="flex-1"></div>
      </div>
        
        <Img sizes={data.surfImage.sizes} className="h-160 m-0" />
      </div>
    <div className="shadow-sm">
        <div className="m-8 p-4 mx-auto leading-normal text-blue-darkest sm:max-w-sm md:max-w-md">
          <h1>Por qué ahorrar en automático</h1>
          <p>Ahorrar siempre ha sido difícil y solo unos pocos han conseguido hacerlo de manera constante. Hasta ahora.</p>
          <p>Las <em>Reglas de Ahorro</em> son la mejor forma de ahorrar de manera entretenida y sin esfuerzo. Configura las <em>Reglas</em> según tú estilo de vida y deja que te lleven hacia tus sueños y metas.</p><br/>
          <p>Las reglas son dos condiciones que se componen de dos partes: un evento y un ahorro.</p>
          
        </div>
        <h3 className="text-center pb-16 text-blue-darkest">Si compro un café entonces ahorro $10 para la playa</h3>
      </div>
      <div className="bg-grey-light border-t-1 border-grey">
        <div className="flex">
          <div className="w-full md:w-1/2 lg:w-1/3">
          {/* {data.Relacionados.edges.map(post => ( */}
            <div class="max-w-sm rounded overflow-hidden shadow-md">
              <Img resolutions/>
            </div>
            
            {/* ))} */}
          </div>
        </div>    
      </div>
    </div>
)
    
  export const queryReglas = graphql`
  query indexReglasQuery {
    datosReglas: allReglasJson{
      edges {
        node{
          id
          nombre
          descripcion
          requerimento
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
    zapatoReglasImage: imageSharp(id: {regex: "/reglas_zapatos/"}){
      resolutions(
        duotone: {
          highlight: "#1bb876",
          shadow: "#184059",
          opacity: 55
        },
        cropFocus: ENTROPY,
        width:300
      ){
      ...GatsbyImageSharpResolutions_noBase64
      }
    }
    mexicoReglasImage: imageSharp(id: {regex: "/reglas_mexico/"}){
      resolutions(width: 300){
      ...GatsbyImageSharpResolutions_noBase64
      }
    }
    correrReglasImage: imageSharp(id: {regex: "/reglas_correr/"}){
      resolutions(width: 300){
      ...GatsbyImageSharpResolutions_noBase64
      }
    }
    frascosReglasImage: imageSharp(id: {regex: "/reglas_frascos-monedas/"}){
      resolutions(width: 300){
      ...GatsbyImageSharpResolutions_noBase64
      }
    }
    cenaReglasImage: imageSharp(id: {regex: "/reglas_cena-amig/"}){
      resolutions(width:300){
      ...GatsbyImageSharpResolutions_noBase64
      }
    }
  }
`

export default Reglas