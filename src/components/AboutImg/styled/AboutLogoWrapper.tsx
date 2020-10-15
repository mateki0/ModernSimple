import styled from 'styled-components';

const AboutLogoWrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  @media only screen and (min-width: 1024px) {
    display: none;
    visiblity: none;
    opacity: 0;
  }
}
`;
export default AboutLogoWrapper;
