import styled from 'styled-components';

const OfferWrapper = styled.div`
  padding: 23px 0;
  width: calc(100% + 2 * 9px);
  margin-left: -9px;
  @media only screen and (min-width: 1024px) {
    width: calc(100% + 2 * 22px);
    margin-left: -22px;
    padding: 50px 0;
  }
`;
export default OfferWrapper;
