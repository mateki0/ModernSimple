import styled from 'styled-components';
import Img from 'gatsby-image';
const LogoImage = styled(Img)<{ fluid:any }>`
  width: 82px;
  height: 271px;
  @media only screen and (min-width: 1024px) {
    display: none;
    visiblity: none;
    opacity: 0;
  }
`;
export default LogoImage;
