import * as React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import PortfolioWrapper from '../components/PortfolioPage/styled/PortfolioWrapper';
import FiltersWrapper from '../components/PortfolioPage/styled/FiltersWrapper';
import ImagesWrapper from '../components/PortfolioPage/styled/ImagesWrapper';
import SingleImage from '../components/PortfolioPage/styled/SingleImage';
import ImageMask from '../components/PortfolioPage/styled/ImageMask';
import DescriptionSpan from '../components/PortfolioPage/styled/DescriptionSpan';
import StyledImg from '../components/PortfolioPage/styled/StyledImg';
import FilterButtonSpan from '../components/PortfolioPage/styled/FilterButtonSpan';

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
          <Link to="../identyfikacje">
            <FilterButtonSpan>Identyfikacja wizualna</FilterButtonSpan>
          </Link>
          <Link to="../metryczki">
            <FilterButtonSpan>Metryczki</FilterButtonSpan>
          </Link>
          <Link to="../obrazki">
            <FilterButtonSpan>Obrazki dla dzieci</FilterButtonSpan>
          </Link>
          <Link to="../zaproszenia">
            <FilterButtonSpan>Zaproszenia</FilterButtonSpan>
          </Link>
        </FiltersWrapper>

        <ImagesWrapper>
          {data.pageContext.images.map((image, index) => (
            <React.Fragment key={index}>
              <SingleImage>
                <StyledImg src={image.image} />
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
