import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FiltersWrapper from './styled/FiltersWrapper';
import PortfolioWrapper from './styled/PortfolioWrapper';
import FilterLink from './styled/FilterLink';
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
        <FilterLink to="./identyfikacje">Identyfikacja wizualna</FilterLink>
        <FilterLink to="./metryczki">Metryczki</FilterLink>
        <FilterLink to="./obrazki">Obrazki dla dzieci</FilterLink>
        <FilterLink to="./zaproszenia">Zaproszenia</FilterLink>
      </FiltersWrapper>
      <GatsbyGallery images={allImages} />
    </PortfolioWrapper>
  );
};

export default PortfolioPage;
