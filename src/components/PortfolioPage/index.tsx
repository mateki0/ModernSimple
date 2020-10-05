import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import FilterButton from './styled/FilterButton';
import FilterButtonSpan from './styled/FilterButtonSpan';
import FiltersWrapper from './styled/FiltersWrapper';
import ImagesWrapper from './styled/ImagesWrapper';
import PortfolioWrapper from './styled/PortfolioWrapper';
import SingleImage from './styled/SingleImage';
import DescriptionSpan from './styled/DescriptionSpan';
import ImageMask from './styled/ImageMask';

const PortfolioPage: React.FC = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "backgrounds" } }) {
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
  `);
  const { node } = allFile.edges;
  console.log(allFile);
  console.log('node', node);
  return (
    <PortfolioWrapper>
      <FiltersWrapper>
        <FilterButton>
          <FilterButtonSpan>Identyfikacja wizualna</FilterButtonSpan>
        </FilterButton>
        <FilterButton>
          <FilterButtonSpan>Metryczki</FilterButtonSpan>
        </FilterButton>
        <FilterButton>
          <FilterButtonSpan>Obrazki dla dzieci</FilterButtonSpan>
        </FilterButton>
        <FilterButton>
          <FilterButtonSpan>Zaproszenia</FilterButtonSpan>
        </FilterButton>
      </FiltersWrapper>

      <ImagesWrapper>
        {allFile.edges.map((image, index) => (
          <SingleImage key={index}>
            <Img fluid={image.node.childImageSharp.fluid} />
            <ImageMask>
              <DescriptionSpan>Something</DescriptionSpan>
            </ImageMask>
          </SingleImage>
        ))}
      </ImagesWrapper>
    </PortfolioWrapper>
  );
};

export default PortfolioPage;
