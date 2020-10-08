import * as React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

const PortfolioTemplate: React.FC<{ data: any }> = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  console.log(data);
  return (
    <Layout>
      <div>{frontmatter.title}</div>
      <div>asd</div>
    </Layout>
  );
};
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        pageTitle
        title
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "backgrounds" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 906, maxHeight: 680) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default PortfolioTemplate;
