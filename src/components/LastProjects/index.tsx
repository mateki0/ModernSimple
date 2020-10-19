import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Heading from '../Cooperation/styled/Heading';
import LastProjectsWrapper from './styled/LastProjectsWrapper';
import SliderWrapper from './styled/SliderWrapper';
import CustomCarousel from '../CustomCarousel';

const LastProjects: React.FC = () => {
  const allFile = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              imgDescription
              imgName
              image
              category
            }
          }
        }
      }
    }
  `);
  const identifications = allFile.allMarkdownRemark.edges.filter(
    (item) => item.node.frontmatter.category === 'identyfikacje'
  );
  return (
    <LastProjectsWrapper>
      <Heading>Ostatnie Projekty</Heading>
      <SliderWrapper>
        <CustomCarousel images={identifications} />
      </SliderWrapper>
      
    </LastProjectsWrapper>
  );
};

export default LastProjects;
