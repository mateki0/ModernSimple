import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

interface GalleryProps {
  images: {
    node: {
      frontmatter: {
        image: string;
        imgDescription: string;
        imgName: string;
      }
    }
  }[]
}

const GatsbyGallery: React.FC<GalleryProps> = ({ images }) => (
  <StaticQuery
    query={graphql`
      query ImagesForGallery {
        allFile (filter: {sourceInstanceName: {eq: "allImgs"}}){
          edges {
            node {
              id
              relativePath
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
      const galleryImages = data.allFile.edges.filter(item => images.some((image) => image.node.frontmatter.image === `/assets/${item.node.relativePath}`)).map(({node}) => {
        const imageDetails = images.find(image => image.node.frontmatter.image === `/assets/${node.relativePath}`).node.frontmatter
        return ({
          title: imageDetails.imgName,
          thumbAlt: imageDetails.imgName,
          caption: imageDetails.imgDescription,
          ...node.childImageSharp
        })
      })

      return <Gallery colWidth={50} mdColWidth={50} gutter="1vw" images={galleryImages}/>;
    }}
  />
);

export default GatsbyGallery;
