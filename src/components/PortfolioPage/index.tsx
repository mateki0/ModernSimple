import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import FiltersWrapper from './styled/FiltersWrapper';
import ImagesWrapper from './styled/ImagesWrapper';
import PortfolioWrapper from './styled/PortfolioWrapper';
import SingleImage from './styled/SingleImage';
import DescriptionSpan from './styled/DescriptionSpan';
import ImageMask from './styled/ImageMask';
import FilterButtonSpan from './styled/FilterButtonSpan';
import StyledImg from './styled/StyledImg';
import GatsbyImage from '../GatsbyImage';

const PortfolioPage: React.FC = () => {
  const allFile = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            id
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
  console.log(allFile);
  const allImages = allFile.allMarkdownRemark.edges.filter(
    (item) => item.node.frontmatter.image !== null
  );

  return (
    <PortfolioWrapper>
      <FiltersWrapper>
        <Link to="./identyfikacje">
          <FilterButtonSpan>Identyfikacja wizualna</FilterButtonSpan>
        </Link>
        <Link to="./metryczki">
          <FilterButtonSpan>Metryczki</FilterButtonSpan>
        </Link>
        <Link to="./obrazki">
          <FilterButtonSpan>Obrazki dla dzieci</FilterButtonSpan>
        </Link>
        <Link to="./zaproszenia">
          <FilterButtonSpan>Zaproszenia</FilterButtonSpan>
        </Link>
      </FiltersWrapper>

      <ImagesWrapper>
        {allImages.map((image, index) => (
          <React.Fragment key={index}>
            <SingleImage>
              <GatsbyImage filename={image.node.frontmatter.image} />
              <ImageMask>
                <DescriptionSpan>{image.node.frontmatter.imgDescription}</DescriptionSpan>
              </ImageMask>
            </SingleImage>

            {/* <StyledModal isOpen={isOpen} onRequestClose={handleModalClose}>
              {modalImg && modalImg !== undefined ? (
                <ModalImgWrapper>
                  <StyledGatsbyImgWrapper>
                    <Img fluid={modalImg} />
                  </StyledGatsbyImgWrapper>
                  <ModalName>Nazwa</ModalName>
                  <ModalDescription>Opis</ModalDescription>
                </ModalImgWrapper>
              ) : (
                ''
              )}
            </StyledModal> */}
          </React.Fragment>
        ))}
      </ImagesWrapper>
    </PortfolioWrapper>
  );
};

export default PortfolioPage;
