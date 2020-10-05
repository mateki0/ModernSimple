import styled from 'styled-components';

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 9px;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  background-color: #fff;
  border-bottom: 2px solid #eca72c;
  @media only screen and (min-width: 1024px) {
    height: 134px;

    margin-bottom: 100px;
  }
`;

export default Navigation;
