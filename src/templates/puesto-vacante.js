import React from 'react'
import Link from 'gatsby-link'
import TiArrowBack from 'react-icons/lib/ti/arrow-back'
export default function Template({ data }) {
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
      <form name="contact" method="POST" netlify>
          <label className="font-medium uppercase mr-3">Nombre</label>
          <input type="text" className="md:w-md block text-teal-darker bg-white focus:bg-grey-light focus:text-grey-darkest  border border-teal-darker rounded-lg shadow-md mb-4 p-3"/>

          <label className="font-medium uppercase mr-3">Apellido</label>
          <input type="text" className="md:w-md block text-teal-darker bg-white focus:bg-grey-light focus:text-grey-darkest  border border-teal-darker rounded-lg shadow-md mb-4 p-3" />
          
          <label className="font-medium uppercase mr-3">Email</label>
          <input type="email" className="md:w-md block text-teal-darker bg-white focus:bg-grey-light focus:text-grey-darkest  border border-teal-darker rounded-lg shadow-md mb-4 p-3" />
          <label className="block font-medium uppercase mr-3">Sube tu CV</label>
          <input type="file" className="md:w-md block text-teal-darker bg-white focus:bg-grey-light focus:text-grey-darkest  border border-teal-darker rounded-lg shadow-md mb-4 p-3" />
        
          <button type="submit" className="mt-4 rounded text-white bg-teal-darker hover:bg-grey-light hover:border hover:border-teal-darker hover:text-teal-darker px-6 py-2 shadow-md ">Enviar</button>
        </form>
        </div>
        </div>
      </div>
        </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!){
    markdownRemark(frontmatter: { path: {eq: $path}}){
      html
      frontmatter {
        path
        title
        date
        puesto
      }
      excerpt
    }
  }
`