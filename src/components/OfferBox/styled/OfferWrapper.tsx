import styled from 'styled-components';

const OfferWrapper = styled.div`
  padding: 23px 0;
  width: calc(100% + 2 * 18px);
  margin-left: -18px;
  @media only screen and (min-width: 1024px) {
    width: calc(100% + 2 * 44px);
    margin-left: -44px;
    padding: 50px 0;
  }
`;
export default OfferWrapper;
