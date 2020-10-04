import styled from 'styled-components';

const FooterSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  :nth-of-type(2) {
    margin-left: 10px;
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 15px;
    :nth-of-type(2) {
      margin-left: 50px;
    }
  }
`;

export default FooterSectionContent;
