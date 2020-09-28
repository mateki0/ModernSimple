import * as React from 'react';
import Heading from '../Cooperation/styled/Heading';
import LastProjectsWrapper from './styled/LastProjectsWrapper';
import BackgroundSlider from 'gatsby-image-background-slider';
import { useStaticQuery, graphql } from 'gatsby';
import SliderWrapper from './styled/SliderWrapper';

const LastProjects: React.FC = () => {
  const ImgQuery = useStaticQuery(graphql`
    query {
      backgrounds: allFile(filter: { sourceInstanceName: { eq: "backgrounds" } }) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 241, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);
  return (
    <LastProjectsWrapper>
      <Heading>Ostatnie Projekty</Heading>
      <SliderWrapper>
        <BackgroundSlider
          query={ImgQuery}
          images={['gallery.png', 'hacker.png', 'pokebase.png', 'restaurant.png']}
        />
      </SliderWrapper>
    </LastProjectsWrapper>
  );
};

export default LastProjects;
