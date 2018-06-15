import React from 'react'
import _ from 'lodash'
import Link from 'gatsby-link'
import Header from "../components/Header";
import TiArrowBack from 'react-icons/lib/ti/arrow-back'
import FileUploadForm from '../components/FileUploadForm'
import Img from 'gatsby-image'

export default function VacanteTemplate({ data }) {
  const post = data.markdownRemark

  return (
    <div>
    <div className="w-full bg-grey-darkest">
    <Header/>
    </div>
    
    <div className="mx-auto font-light leading-normal m-12 sm:max-w-sm md:max-w-md">
      <Link to="/unete-equipo" className="no-underline py-12 text-grey-darker hover:text-grey-darkest">
        <TiArrowBack className="text-3xl" /> Regresar</Link>
      <hr />

      <h1 className="text-4xl p-4">{post.frontmatter.title}</h1>
      <div className="p-4">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      </div> 
      <div className="mt-8 py-12 mx-auto bg-grey-lightest">
        <h2 className="text-center py-4">Déjanos echar un vistazo.</h2>
        <br />
        <div className="flex flex-wrap mx-auto">
          <div className="w-full">
            <FileUploadForm />
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