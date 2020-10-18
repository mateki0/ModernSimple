import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Heading from '../Cooperation/styled/Heading';
import LastProjectsWrapper from './styled/LastProjectsWrapper';
import SliderWrapper from './styled/SliderWrapper';
import ButtonsWrapper from './styled/ButtonsWrapper';
import SliderButton from './styled/SliderButton';
import Arrow from '../../assets/forward.svg';
import GatsbyImage from '../GatsbyImage';

const LastProjects: React.FC = () => {
  const [index, setIndex] = React.useState(0);
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
  const length = identifications.length - 1;
  const handleNext = () => {
    index === length ? setIndex(0) : setIndex(index + 1);
  };
  const handlePrevious = () => {
    index === 0 ? setIndex(length) : setIndex(index - 1);
  };
  React.useEffect(() => {
    const slideChange = setTimeout(() => {
      index === length ? setIndex(0) : setIndex(index + 1);
    }, 5000);
    return () => clearTimeout(slideChange);
  }, [index]);
  return (
    <LastProjectsWrapper>
      <Heading>Ostatnie Projekty</Heading>
      <SliderWrapper>
        <GatsbyImage filename={identifications[index].node.frontmatter.image} />
      </SliderWrapper>
      <ButtonsWrapper>
        <SliderButton onClick={() => handlePrevious()} rotate="true">
          <Arrow />
        </SliderButton>
        <SliderButton onClick={() => handleNext()}>
          <Arrow />
        </SliderButton>
      </ButtonsWrapper>
    </LastProjectsWrapper>
  );
};

export default LastProjects;
