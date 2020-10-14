import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const GatsbyImage: React.FC<{ filename: string }> = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 906) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const file = props.filename.substr(8).replace(/ /g, '');
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(file);
      });
      if (!image) {
        return null;
      }
      return <Img fluid={image.node.childImageSharp.fluid} />;
    }}
  />
);

export default GatsbyImage;