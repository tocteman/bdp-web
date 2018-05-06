import React from 'react'
import _ from 'lodash'
import Link from 'gatsby-link'
import TiArrowBack from 'react-icons/lib/ti/arrow-back'
import FileUploadForm from '../components/FileUploadForm'
export default function VacanteTemplate({ data }) {
  const post = data.markdownRemark

  return (
    <div className="text-teal-darkest mx-auto font-light leading-normal m-8 p-4 sm:max-w-sm md:max-w-md">
      <Link to="/unete-equipo" className="no-underline py-12 text-grey-darker hover:text-teal-darker">
      <TiArrowBack className="text-3xl" /> Regresar</Link>
      <hr />
      <hr/>
      <h1 className="text-4xl p-4">{post.frontmatter.title}</h1>
      <div className="p-4">
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <div className="ml-4 mt-8">
      <h2>Déjanos echar un vistazo.</h2>
      <br/>
      <div className="flex flex-wrap mx-auto">
      <div className="w-full">
      <FileUploadForm/>
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
      }
      excerpt
    }
  }
`