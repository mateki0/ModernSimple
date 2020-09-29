import styled from 'styled-components';

const LogoImage = styled.img`
  width: 82px;
  height: 271px;
  border-radius: 25px;
  @media only screen and (min-width: 1024px) {
    display: none;
    visiblity: none;
    opacity: 0;
  }
`;
export default LogoImage;
