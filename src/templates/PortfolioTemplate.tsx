import * as React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import PortfolioWrapper from '../components/PortfolioPage/styled/PortfolioWrapper';
import FiltersWrapper from '../components/PortfolioPage/styled/FiltersWrapper';
import FilterButton from '../components/PortfolioPage/styled/FilterButton';
import ImagesWrapper from '../components/PortfolioPage/styled/ImagesWrapper';
import SingleImage from '../components/PortfolioPage/styled/SingleImage';
import ImageMask from '../components/PortfolioPage/styled/ImageMask';
import DescriptionSpan from '../components/PortfolioPage/styled/DescriptionSpan';
import StyledModal from '../components/PortfolioPage/styled/StyledModal';
import Img from 'gatsby-image';

import ModalImgWrapper from '../components/PortfolioPage/styled/ModalImgWrapper';
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
  console.log(data);
  console.log('all categories', data.pageContext.categories);
  console.log('current category', data.pageContext.currentCategoryName);
  console.log('category images', data.pageContext.images);
  React.useEffect(() => {
    StyledModal.setAppElement('#___gatsby');
    setIsOpen(false);
  }, []);
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalImg, setModalImg] = React.useState();
  const handleModalOpen = () => {
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <Layout>
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
          <React.Fragment>
            <SingleImage onClick={() => handleModalOpen()}>
              <StyledImg src={`/assets/Zaproszenia/${data.pageContext.images[0].image}`} />
              <ImageMask>
                <DescriptionSpan>Opis</DescriptionSpan>
              </ImageMask>
            </SingleImage>
            <SingleImage onClick={() => handleModalOpen()}>
              <StyledImg src={`/assets/Zaproszenia/${data.pageContext.images[0].image}`} />
              <ImageMask>
                <DescriptionSpan>Opis</DescriptionSpan>
              </ImageMask>
            </SingleImage>
            <StyledModal isOpen={isOpen} onRequestClose={handleModalClose}>
              {modalImg && modalImg !== undefined ? (
                <ModalImgWrapper>
                  <Img fluid={modalImg} />
                </ModalImgWrapper>
              ) : (
                ''
              )}
            </StyledModal>
          </React.Fragment>
        </ImagesWrapper>
      </PortfolioWrapper>
    </Layout>
  );
};

export default PortfolioTemplate;
