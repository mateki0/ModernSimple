import styled from 'styled-components';

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;

  :nth-of-type(2) {
    margin-left: 10px;
  }
  @media only screen and (min-width: 1024px) {
    :nth-of-type(2) {
      margin-left: 50px;
    }
  }
`;

export default SectionContent;
