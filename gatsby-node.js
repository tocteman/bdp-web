const _= require ('lodash')
const Promise = require('bluebird')
const path = require('path')
const parseFilepath = require('parse-filepath')
const fs = require ('fs-extra')
const slash = require ('slash')
const slugify = require('limax')
const {createFilePath} = require('gatsby-source-filesystem')
// const webpack = require('webpack');


const slugToAnchor = slug => 
  slug
    .split('/')
    .filter(item => item !== ``)
    .pop()

// exports.modifyWebpackConfig = ({ config, stage }) => {
//   switch (stage) {
//     case "build-html":
//       config.plugin('define', webpack.DefinePlugin, [{ "global.GENTLY": false }]);

//       break;
//   }

//   return config;
// };

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};
  
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
            slug: edge.node.fields.slug
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
   