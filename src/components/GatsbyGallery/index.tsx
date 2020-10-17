import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'
interface IGalleryProps{
  filename:string;
  imgDescription:string;
  imgName:string;
}

const GatsbyGallery: React.FC = () => (
  
  <StaticQuery
    query={graphql`
      query ImagesForGallery {
        allFile (filter: {sourceInstanceName: {eq: "allImgs"}}){
          edges {
            node {
              childImageSharp {
                thumb: fluid(maxWidth: 906, maxHeight:660) {
                  ...GatsbyImageSharpFluid
                }
                full: fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const allImgs = data.allFile.edges.filter(item => item.node.childImageSharp !== null).map(({node}) => node.childImageSharp)
      console.log(allImgs)
      
      return <Gallery colWidth="50" mdColWidth="50" gutter="1vw" images={allImgs}/>;
    }}
  />
);

export default GatsbyGallery;
