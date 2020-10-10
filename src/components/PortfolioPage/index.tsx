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
import StyledModal from './styled/StyledModal';
import ModalImgWrapper from './styled/ModalImgWrapper';

const PortfolioPage: React.FC = () => {
  React.useEffect(() => {
    StyledModal.setAppElement('#___gatsby');
    setIsOpen(false);
  }, []);
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalImg, setModalImg] = React.useState();
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "backgrounds" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 1500, maxHeight: 680) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const node = allFile.edges;
  const handleModalOpen = (index) => {
    setIsOpen(true);
    setModalImg(node[index].node.childImageSharp.fluid);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };

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
        {node.map((image, index) => (
          <React.Fragment key={index}>
            <SingleImage onClick={() => handleModalOpen(index)}>
              <Img fluid={image.node.childImageSharp.fluid} />
              <ImageMask>
                <DescriptionSpan>Opis</DescriptionSpan>
              </ImageMask>
            </SingleImage>

            <StyledModal isOpen={isOpen} onRequestClose={handleModalClose}>
              <ModalImgWrapper>
                <Img fluid={modalImg} />
              </ModalImgWrapper>
            </StyledModal>
          </React.Fragment>
        ))}
      </ImagesWrapper>
    </PortfolioWrapper>
  );
};

export default PortfolioPage;
