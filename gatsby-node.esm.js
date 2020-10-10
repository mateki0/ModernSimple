const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: 'portfolio/categories' })
    createNodeField({
      node,
      name: `slug`,
      value: `/portfolio${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              imgName
              imgDescription
              category
              image
            }
          }
        }
      }
    }
  `)

  const allImages = Array.from(result.data.allMarkdownRemark.edges.filter(({ node }) => node.fields.slug.startsWith('/portfolio/images')), ({ node }) => node.frontmatter)
  const allCategories = Array.from(result.data.allMarkdownRemark.edges.filter(({ node }) => node.fields.slug.startsWith('/portfolio') && !node.fields.slug.startsWith('/portfolio/images')), ({ node }) => ({ slug: node.fields.slug, name: node.fields.slug[node.fields.slug.length - 1] === '/' ? node.fields.slug.replace('/portfolio/', '').slice(0, -1) : node.fields.slug.replace('/portfolio/', '')}))
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (!node.fields.slug.startsWith('/portfolio/images')) {
      const categoryName = node.fields.slug[node.fields.slug.length - 1] === '/' ? node.fields.slug.replace('/portfolio/', '').slice(0, -1) : node.fields.slug.replace('/portfolio/', '')
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/PortfolioTemplate.tsx`),
        context: {
          images: allImages.filter(image => image.category === categoryName),
          categories: allCategories,
          currentCategoryName: categoryName
        },
      })
    }
  })
}
