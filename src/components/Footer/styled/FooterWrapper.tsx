import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 50px;
  margin-top: 23px;
  padding-bottom: 23px;
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 50px;
    padding-bottom: 50px;
  }
`;
export default FooterWrapper;
