import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const SliderReglas = ({ frontmatter: { condicionTexto, explicacionResolucion, fotoRegla, fotoResolucion, explicacionRegla}}) => (
  <div className="flex flex-col max-w-xl mx-auto mb-8 pb-8">
    
      {/* {data.explicacionesDatos.edges.map(post => ( */}
    <Carousel autoPlay={true} infiniteLoop={true} width="100%" interval={5000} transitionTime={300} showStatus={false} showIndicators={false} showArrows={false} axis="vertical">
        <div>
        <img src={fotoRegla.childImageSharp.resolutions.src} alt=""/>
        </div>
    </Carousel>
  </div>
)

export const queryExplicacion = graphql`
fragment ExplicacionReglasFragment on MarkdownRemark{
      frontmatter {
        explicacionRegla
        explicacionResolucion
        condicionTexto
        fotoRegla {
              childImageSharp {
                resolutions (
                  quality:90
                  width: 125
                  height: 125
                  cropFocus: ENTROPY
                ){
                  ...GatsbyImageSharpResolutions_noBase64
                }
              }
            }
            fotoResolucion {
            childImageSharp {
              resolutions (
                quality:90
                width: 125
                height: 125
                cropFocus: ENTROPY
              ){
                ...GatsbyImageSharpResolutions_noBase64
              }
            }
          }
      }
      
}
`

export default SliderReglas;



{/* <div className="py-4 mx-auto">
  <div className="md:flex w-xl mx-auto text-center">
    <div className="flex items-center justify-around md:justify-around md:w-1/2">
      <div className="text-3xl md:text-4xl font-semibold">{condicionTexto}</div>
      <div className="flex flex-col items-center justify-center text-center">
        <img src={fotoRegla.childImageSharp.resolutions.src} />
        <div className="text-grey-dark text-sm">{explicacionRegla}</div>
      </div>
      <div></div>
    </div>
    <div className="flex items-center justify-around md:justify-around py-4 md:py-2 md:w-1/2">
      <div className="text-3xl md:text-4xl font-semibold text-center">ahorro para</div>
      <div className="flex flex-col items-center text-center mr-2">
        <img src={fotoResolucion.childImageSharp.resolutions.src} className="rounded" />
        <div className="text-grey-dark text-sm">{explicacionResolucion}</div>
      </div>
    </div>
  </div>
  <hr className="py-4" />
  {/* ))} */}
// </div> */}