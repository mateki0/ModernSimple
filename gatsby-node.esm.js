const path = require(`path`);
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

const buildPages = (edges, createPage) => {
  edges.map((page) => {
    console.log(`Creating page ${JSON.stringify(page.node)}`);

    createPage({
      path: page.node.fields.slug,
      component: path.resolve('./src/templates/PortfolioTemplate.tsx'),
      context: {
        slug: page.node.fields.slug,
      },
    });
  });
};
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const fetchAllImages = await graphql(`
    query {
      allFile(filter: { extension: { regex: "/(jpeg|jpg|gif|png)/" } }) {
        nodes {
          id
        }
      }
    }
  `);
  if (fetchAllImages.errors) {
    throw fetchAllImages.errors;
  }
  console.log(fetchAllImages);
  const result = await graphql(`
    query {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    throw result.errors;
  }
  console.log(result.data.allMarkdownRemark.edges);
  buildPages(result.data.allMarkdownRemark.edges, createPage);
};
