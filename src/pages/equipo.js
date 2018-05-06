import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'


const Equipo = ({ data }) => (
<div>
  <div>
    {data.Integrantes.edges.map(post => (
      <div key={post.node.id}>
        {post.node.nombre} 
        Wiririri
      </div>))}
  </div>
    <div>
      {data.Relacionados.edges.map(post => (
        <div key={post.node.id}>
          {post.node.nombre}
          Wiririri
      </div>))}
    </div>
</div>
  )

export const equipoQuery = graphql`
query IntegrantesQuery {
  Integrantes: allGenteJson(
    filter: {relacion: {regex: "/equipo/"}}
  ) {
    edges {
      node{
        nombre
      }
    }
  }
  Relacionados: allGenteJson(
    filter: {relacion: {regex: "/mentor/"}}
  ) {
    edges {
      node {
        nombre
      }
    }
  }
}
`
export default Equipo 