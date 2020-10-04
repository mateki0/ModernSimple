import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Heading from '../Cooperation/styled/Heading';
import LastProjectsWrapper from './styled/LastProjectsWrapper';
import SliderWrapper from './styled/SliderWrapper';
import ButtonsWrapper from './styled/ButtonsWrapper';
import SliderButton from './styled/SliderButton';
import Arrow from '../../assets/forward.svg';

const LastProjects: React.FC = () => {
  const [index, setIndex] = React.useState(0);
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "backgrounds" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 906) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const length = allFile.edges.length - 1;
  const handleNext = () => {
    index === length ? setIndex(0) : setIndex(index + 1);
  };
  const handlePrevious = () => {
    index === 0 ? setIndex(length) : setIndex(index - 1);
  };
  const { node } = allFile.edges[index];
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
        <Img fluid={node.childImageSharp.fluid} key={node.id} alt="project img" />
      </SliderWrapper>
      <ButtonsWrapper>
        <SliderButton onClick={() => handlePrevious()} rotate={true}>
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
