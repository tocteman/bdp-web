const _= require ('lodash')
const Promise = require('bluebird')
const path = require('path')
const parseFilepath = require('parse-filepath')
const fs = require ('fs-extra')
const slash = require ('slash')
const slugify = require('limax')


const slugToAnchor = slug => 
  slug
    .split('/')
    .filter(item => item !== ``)
    .pop()

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage, createRedirect } = boundActionCreators
  return new Promise ((resolve, reject) => {
    const blogTemplate = path.resolve('src/templates/blog-post.js')
    const vacanteTemplate = path.resolve('src/templates/puesto-vacante.js')
    resolve(
      graphql(
        `
        query {
          allMarkdownRemark (
            sort: { order: DESC, fields: [frontmatter___date]}
            limit: 1000
          ) {
            edges {
              node{
                html
                fields{
                  slug
                }
                frontmatter {
                  title
                  date
                }
              }
            }
          }
        }
        `
      ).then(result =>{
        if(result.errors){
          reject(result.errors)
        }

        const blogPosts = _.filter(
          result.data.allMarkdownRemark.edges,
          edge => {
            const slug = _.get(edge, 'node.fields.slug')
            if (!slug) return

            if (_.includes(slug, `/blog/`)){
              return edge
            }
          }
        )
        blogPosts.forEach((edge, index) => {
          // const next = index === 0 ? null : blogPosts[index - 1].node
          // const prev = index === blogPosts.length -1 ? null : blogPosts[index + 1].node

        createPage({
          path: `${edge.node.fields.slug}`,
          component: slash(blogTemplate),
          context: {
            slug: edge.node.fields.slug,
            prev,
            next
          },
        })
      })

      result.data.allMarkdownRemark.edges.forEach(edge=>{
        const slug = _.get(edge, 'node.fields.slug')
        if (!slug) return
        if (!_.includes(slug, `/blog/`)) {
          createPage({
            path: `${edge.node.fields.slug}`,
            component: slash (vacanteTemplate),
            context: {
              slug: edge.node.fields.slug,
            },
          })
        }
      })

      return
      })
    )
  })
}

exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
  const {createNodeField} = boundActionCreators
  let slug
  if (node.internal.type === `File`) {
    const parsedFilepath = parseFilepath(node.relativePath)
    if(node.sourceInstanceName === `vacante`){
      if (parsedFilepath.name !== 'index' && parsedFilepath.dir !== ''){
        slug = `${parsedFilepath.dir}/${parsedFilepath.name}/`
      } else if (parsedFilepath === ``) {
        slug = `/${parsedFilepath.name}`
      } else {
        slug = `/${parsedFilepath.dir}/`
      }
    }
    if (slug){
      createdNodeField({node, name: 'slug', value: slug})
    }
  } else if (
    node.internal.type === 'MarkDownRemark'
  ) {
    const fileNode = getNode(node.parent)
    const parsedFilepath = parseFilepath(fileNode.relativePath)
    if (fileNode.sourceInstanceName === 'blog'){
      if (parsedFilePath.name !== `index` && parsedFilePath.dir !== ``) {
        slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
      } else if (parsedFilePath.dir === ``) {
        slug = `/${parsedFilePath.name}/`
      } else {
        slug = `/${parsedFilePath.dir}/`
      }
    }
  }
}
   