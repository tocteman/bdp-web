import React from 'react'
import _ from 'lodash'
import Link from 'gatsby-link'
import TiArrowBack from 'react-icons/lib/ti/arrow-back'
import FileUploadForm from '../components/FileUploadForm'
import Img from 'gatsby-image'

export default function VacanteTemplate({ data }) {
  const post = data.markdownRemark

  return (
    <div>
      {/* <div>
        <div className="flex flex-col w-full absolute z-10 text-white h-medio justify-center">
          <div className="mx-auto lg:max-w-xl md:ml-1/5 w-3/4">
            <h1 className="text-4xl sm:text-5xl pb-4 p-1 mb-2 leading-tight tracking-tight max-w-sm text-white">Ünete a nuestro equipo.</h1>
            <p className="text-xl text-grey-lighter leading-normal p-1 max-w-sm">Ayúdanos a construir esta nueva forma de ahorrar e invertir.</p>
          </div>
        </div>
        <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} className="h-medio m-0" />
      </div> */}
    <div className="mx-auto font-light leading-normal m-8 p-4 sm:max-w-sm md:max-w-md">
      <Link to="/unete-equipo" className="no-underline py-12 text-grey-darker hover:text-green-darker">
        <TiArrowBack className="text-3xl" /> Regresar</Link>
      <hr />

      <h1 className="text-4xl p-4">{post.frontmatter.title}</h1>
      <div className="p-4">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <div className="ml-4 mt-8">
        <h2>Déjanos echar un vistazo.</h2>
        <br />
        <div className="flex flex-wrap mx-auto">
          <div className="w-full">
            <FileUploadForm />
          </div>
        </div>
      </div>
    </div>  
  </div>
  )
}

export const vacanteQuery = graphql`
  query VacantePosts($slug: String!){
    markdownRemark(fields: { slug: {eq: $slug}}){
      html
      fields{
        slug
      }
      frontmatter {
        title
        date
        puesto
        featuredImage {
          childImageSharp{
            sizes(
              maxWidth: 1920
              duotone: {
                highlight: "#151616",
                shadow: "#191b1c",
                opacity: 60
              }
            )
            {
             ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
      excerpt
    }
  }
`