import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import StyledCarousel from './StyledCarousel';
import Arrow from '../../assets/forward.svg';
import SliderButton from './SliderButton';
interface ICarouselProps{
  images:{
    node:{
      id:string;
      frontmatter:{
        imgDescription:string;
        imgName:string;
        image:string;
        category:string;
      }
    }
  }[]
}
const CustomCarousel: React.FC<ICarouselProps> = ({images}) =>(
<StaticQuery
    query={graphql`
      query sliderImgs {
        allFile(filter: { sourceInstanceName: { eq: "allImgs" } }) {
          edges {
            node {
              id
              relativePath
              childImageSharp {
                fluid(maxWidth: 906, maxHeight: 660) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const carouselImages = data.allFile.edges
      .filter((item) =>
        images.some(
          (image) => image.node.frontmatter.image === `/assets/${item.node.relativePath}`
        )
      )
      .map(({node}) => {
        return node.childImageSharp;
      })
      return (
        <StyledCarousel autoplay autoplayInterval={5000} pauseOnHover wrapAround dragging
        transitionMode="fade" easing={"easeExpOut"} speed={1600}
        renderCenterLeftControls={({ previousSlide }) => (
          <SliderButton onClick={previousSlide} rotate="true"><Arrow/></SliderButton>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <SliderButton onClick={nextSlide}><Arrow/></SliderButton>
        )}
        >
          
          {carouselImages.map((image,index) =>(
            <Img key={index} fluid={image.fluid} />
          ))}
        </StyledCarousel>
      )
      
    }}
    />
    );

    export default CustomCarousel;