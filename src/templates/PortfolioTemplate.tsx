import * as React from 'react';
import Layout from '../components/Layout';

import PortfolioWrapper from '../components/PortfolioPage/styled/PortfolioWrapper';
import FiltersWrapper from '../components/PortfolioPage/styled/FiltersWrapper';
import FilterLink from '../components/PortfolioPage/styled/FilterLink';
import GatsbyGallery from '../components/GatsbyGallery';
import AllLinkWrapper from '../components/PortfolioPage/styled/AllLinkWrapper';

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
  return (
    <Layout>
      <PortfolioWrapper>
        {/* <AllLinkWrapper>
          <FilterLink to="../">Wszystkie prace</FilterLink>
        </AllLinkWrapper> */}
        <FiltersWrapper>
          <FilterLink activeStyle={{ backgroundColor: '#27867f' }} to="../identyfikacje">
            Identyfikacja wizualna
          </FilterLink>
          <FilterLink activeStyle={{ backgroundColor: '#27867f' }} to="../metryczki">
            Metryczki
          </FilterLink>
          <FilterLink activeStyle={{ backgroundColor: '#27867f' }} to="../obrazki">
            Obrazki dla dzieci
          </FilterLink>
          <FilterLink activeStyle={{ backgroundColor: '#27867f' }} to="../zaproszenia">
            Zaproszenia
          </FilterLink>
        </FiltersWrapper>
        <GatsbyGallery
          images={data.pageContext.images.map(({ imgName, imgDescription, image }) => ({
            node: { frontmatter: { imgName, imgDescription, image } },
          }))}
        />
      </PortfolioWrapper>
    </Layout>
  );
};

export default PortfolioTemplate;
