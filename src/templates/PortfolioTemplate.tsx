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
import FilterButtonSpan from '../components/PortfolioPage/styled/FilterButtonSpan';
import ModalImgWrapper from '../components/PortfolioPage/styled/ModalImgWrapper';
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        pageTitle
        title
      }
    }
    allFile(filter: { sourceInstanceName: { eq: $slug } }) {
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
`;
const PortfolioTemplate: React.FC<{ data: any }> = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  console.log(data);
  // React.useEffect(() => {
  //   StyledModal.setAppElement('#___gatsby');
  //   setIsOpen(false);
  // }, []);
  // const [isOpen, setIsOpen] = React.useState(false);
  // const [modalImg, setModalImg] = React.useState();
  // const handleModalOpen = (index) => {
  //   setIsOpen(true);
  //   setModalImg(node[index].node.childImageSharp.fluid);
  // };
  // const handleModalClose = () => {
  //   setIsOpen(false);
  // };

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

        {/* <ImagesWrapper>
          {pageQuery.allFile.edges.map((image, index) => (
            <React.Fragment key={index}>
              <SingleImage onClick={() => handleModalOpen(index)}>
                <Img fluid={image.node.childImageSharp.fluid} />
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
          ))}
        </ImagesWrapper> */}
      </PortfolioWrapper>
    </Layout>
  );
};

export default PortfolioTemplate;
