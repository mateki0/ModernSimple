import styled from 'styled-components';
const SelfieWrapper = styled.div<{ width: string }>`
  width: 40vw;
  height: auto;
  @media only screen and (min-width: 1024px) {
    width: ${(props) => props.width};
    height: 100%;
  }
`;
export default SelfieWrapper;
