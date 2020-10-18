import styled from 'styled-components';

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction:column;
  width: 100%;
  @media only screen and (min-width: 1024px) {
    padding: 0 22px;
    flex-direction:row;
`;

export default NavList;
