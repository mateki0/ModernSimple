import styled from 'styled-components';

const HamburgerWrapper = styled.div`
  display: flex;
  align-self: center;
  width: 33px;
  height: 33px;
  cursor: pointer;
  z-index: 2;
  padding: 15px;
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

export default HamburgerWrapper;
