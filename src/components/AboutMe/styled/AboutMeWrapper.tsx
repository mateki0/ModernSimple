import styled from 'styled-components';

const AboutMeWrapper = styled.div<{ displayMobile?: boolean }>`
  flex-direction: column;
  padding: 20px 0;
  display: ${(props) => (!props.displayMobile ? 'none' : 'flex')};
  @media only screen and (min-width: 1024px) {
    padding-left: 40px;
    display: ${(props) => (props.displayMobile ? 'none' : 'flex')};
  }
`;

export default AboutMeWrapper;
