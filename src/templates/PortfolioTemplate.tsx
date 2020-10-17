import * as React from 'react';
import Layout from '../components/Layout';

import PortfolioWrapper from '../components/PortfolioPage/styled/PortfolioWrapper';
import FiltersWrapper from '../components/PortfolioPage/styled/FiltersWrapper';
import FilterButtonSpan from '../components/PortfolioPage/styled/FilterButtonSpan';
import GatsbyGallery from '../components/GatsbyGallery';

interface PortfolioProps {
  pageContext: {
    images: {
      imgName: string;
      imgDescription: string;
      category: string;
      image: string;
    }[];
    categories: {
      slug: string;
      name: string;
    }[];
    currentCategoryName: string;
  };
}

const PortfolioTemplate: React.FC<PortfolioProps> = (data) => {
  console.log(data.pageContext.images.map(({imgName, imgDescription, image }) => ({ imgName, imgDescription, image })))
  return (
    <Layout>
      <PortfolioWrapper>
        <FiltersWrapper>
          <FilterButtonSpan activeStyle={{ backgroundColor: '#27867f' }} to="../identyfikacje">
            Identyfikacja wizualna
          </FilterButtonSpan>
          <FilterButtonSpan activeStyle={{ backgroundColor: '#27867f' }} to="../metryczki">
            Metryczki
          </FilterButtonSpan>
          <FilterButtonSpan activeStyle={{ backgroundColor: '#27867f' }} to="../obrazki">
            Obrazki dla dzieci
          </FilterButtonSpan>
          <FilterButtonSpan activeStyle={{ backgroundColor: '#27867f' }} to="../zaproszenia">
            Zaproszenia
          </FilterButtonSpan>
        </FiltersWrapper>
        <GatsbyGallery images={data.pageContext.images.map(({imgName, imgDescription, image }) => ({ node: { frontmatter: { imgName, imgDescription, image }}}))} />
      </PortfolioWrapper>
    </Layout>
  );
};

export default PortfolioTemplate;