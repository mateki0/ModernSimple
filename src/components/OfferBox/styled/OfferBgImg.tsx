import styled from 'styled-components';

const OfferBgImg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: url(/images/kompBg.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 179px;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    height: 423px;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }
`;
export default OfferBgImg;
