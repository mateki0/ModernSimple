import * as React from 'react';
import Layout from '../components/Layout';

import PortfolioWrapper from '../components/PortfolioPage/styled/PortfolioWrapper';
import FiltersWrapper from '../components/PortfolioPage/styled/FiltersWrapper';
import ImagesWrapper from '../components/PortfolioPage/styled/ImagesWrapper';
import SingleImage from '../components/PortfolioPage/styled/SingleImage';
import ImageMask from '../components/PortfolioPage/styled/ImageMask';
import DescriptionSpan from '../components/PortfolioPage/styled/DescriptionSpan';
import FilterButtonSpan from '../components/PortfolioPage/styled/FilterButtonSpan';
import GatsbyImage from '../components/GatsbyImage';

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

        <ImagesWrapper>
          {data.pageContext.images.map((image, index) => (
            <React.Fragment key={index}>
              <SingleImage>
                <GatsbyImage filename={image.image} />
                <ImageMask>
                  <DescriptionSpan>{image.imgDescription}</DescriptionSpan>
                </ImageMask>
              </SingleImage>
            </React.Fragment>
          ))}
        </ImagesWrapper>
      </PortfolioWrapper>
    </Layout>
  );
};

export default PortfolioTemplate;
