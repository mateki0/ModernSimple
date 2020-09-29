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
            fluid(maxWidth: 906, quality: 100) {
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
          images={[
            '1.png',
            '2.png',
            '3.png',
            '4.png',
            '5.png',
            '6.png',
            '7.png',
            '8.png',
            '9.png',
            '10.png',
            '11.png',
            '12.png',
            '13.png',
            '14.png',
            '15.png',
            '16.png',
            '17.png',
            '18.png',
            '19.png',
            '20.png',
          ]}
        />
      </SliderWrapper>
    </LastProjectsWrapper>
  );
};

export default LastProjects;
