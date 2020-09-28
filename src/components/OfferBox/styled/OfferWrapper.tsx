import styled from 'styled-components';

const OfferWrapper = styled.div`
  display: grid;
  background: url(/images/kompBg.png);
  background-repeat: no-repeat;
  background-size: cover;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;
  grid-row-gap: 50px;
  justify-content: space-between;
  row-gap: 50px;
  padding: 20px 0;
  border-top: 1px solid #eca72c;
  border-bottom: 1px solid #eca72c;
  height: 179px;
`;
export default OfferWrapper;
