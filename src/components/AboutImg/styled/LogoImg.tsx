import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
const LogoImage = styled(BackgroundImage)`
  width: 82px;
  height: 271px;
  @media only screen and (min-width: 1024px) {
    display: none;
    visiblity: none;
    opacity: 0;
  }
`;
export default LogoImage;
