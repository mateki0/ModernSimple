import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
const OfferBgImg = styled(BackgroundImage)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  background-repeat: no-repeat;
  background-size: cover;
  height: 179px;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    
    background-repeat: no-repeat;
    background-size: cover;
    height: 423px;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }
`;
export default OfferBgImg;
