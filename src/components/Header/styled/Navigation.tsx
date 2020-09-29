import styled from 'styled-components';

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 43px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eca72c;
  @media only screen and (min-width: 1024px) {
    height: 134px;
    padding: 0;
  }
`;

export default Navigation;
