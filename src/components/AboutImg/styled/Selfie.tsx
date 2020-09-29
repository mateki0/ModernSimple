import styled from 'styled-components';

const Selfie = styled.img<{ widthMobile: string; heightMobile: string }>`
  width: ${(props) => props.widthMobile};
  height: ${(props) => props.heightMobile};
  border-radius: 25px;
  @media only screen and (min-width: 1024px) {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  }
`;
export default Selfie;
