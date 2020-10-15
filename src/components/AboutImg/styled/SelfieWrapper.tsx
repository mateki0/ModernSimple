import styled from 'styled-components';
const SelfieWrapper = styled.div<{widthMobile: string; heightMobile: string; width:string; height:string;}>`
  width: ${(props) => props.widthMobile};
  height: ${(props) => props.heightMobile};
  @media only screen and (min-width: 1024px) {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  }
`
export default SelfieWrapper;