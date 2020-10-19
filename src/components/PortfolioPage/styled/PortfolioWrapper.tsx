import styled from 'styled-components';

const PortfolioWrapper = styled.div`
  padding-top: 23px;
  @media only screen and (min-width: 1024px) {
    padding-top: 50px;
  }
  .galleryImg {
    transition:all 0.5s;
    &:hover {
      filter: brightness(60%);
      cursor: pointer;
      opacity:0.7;
      
    }
  }
`;

export default PortfolioWrapper;
