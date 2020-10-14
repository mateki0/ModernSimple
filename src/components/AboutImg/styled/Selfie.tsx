import styled from 'styled-components';
import  Img  from 'gatsby-image'
const Selfie = styled(Img)<{ widthMobile: string; heightMobile: string; width:string; height:string; fluid:any }>`
  width: 100%;
  height: ${(props) => props.heightMobile};
  border-radius: 25px;
  @media only screen and (min-width: 1024px) {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  }
`;
export default Selfie;
