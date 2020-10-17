import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FiltersWrapper from './styled/FiltersWrapper';
import ImagesWrapper from './styled/ImagesWrapper';
import PortfolioWrapper from './styled/PortfolioWrapper';
import SingleImage from './styled/SingleImage';
import DescriptionSpan from './styled/DescriptionSpan';
import ImageMask from './styled/ImageMask';
import FilterButtonSpan from './styled/FilterButtonSpan';
import GatsbyImage from '../GatsbyImage';
import GatsbyGallery from '../GatsbyGallery';

const PortfolioPage: React.FC = () => {
  const allFile = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              imgDescription
              imgName
              image
            }
          }
        }
      }
    }
  `);
  const allImages = allFile.allMarkdownRemark.edges.filter(
    (item) => item.node.frontmatter.image !== null
  );

  return (
    <PortfolioWrapper>
      <FiltersWrapper>
        <FilterButtonSpan to="./identyfikacje">Identyfikacja wizualna</FilterButtonSpan>
        <FilterButtonSpan to="./metryczki">Metryczki</FilterButtonSpan>
        <FilterButtonSpan to="./obrazki">Obrazki dla dzieci</FilterButtonSpan>
        <FilterButtonSpan to="./zaproszenia">Zaproszenia</FilterButtonSpan>
      </FiltersWrapper>
        <GatsbyGallery images={allImages} />
    </PortfolioWrapper>
  );
};

export default PortfolioPage;
