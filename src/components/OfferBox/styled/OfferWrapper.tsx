import styled from 'styled-components';

const OfferWrapper = styled.div`
  padding: 23px 0;
  width: calc(100% + 2 * 10px);
  margin-left: -10px;
  @media only screen and (min-width: 1024px) {
    width: calc(100% + 2 * 50px);
    margin-left: -50px;
  }
`;
export default OfferWrapper;
