import styled from 'styled-components';

const ButtonsWrapper = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 1024px) {
    left: 15%;
    width: 70%;
  }
`;

export default ButtonsWrapper;
