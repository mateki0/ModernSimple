import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 50px;
  margin-top: 23px;
  padding-bottom: 25px;
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding-top: 40px;
  }
`;
export default FooterWrapper;
