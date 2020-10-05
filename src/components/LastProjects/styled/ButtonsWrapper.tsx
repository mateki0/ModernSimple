import styled from 'styled-components';

const ButtonsWrapper = styled.div`
  position: absolute;
  top: 53%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 300px;

  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 1024px) {
    width: 960px;
  }
  @media only screen and (min-width: 1280px) {
    width: 1100px;
  }
`;

export default ButtonsWrapper;
