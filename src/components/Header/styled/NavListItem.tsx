import styled from 'styled-components';

const NavListItem = styled.li`
  padding: 0;
  margin: 0;
  @media only screen and (min-width: 1024px) {
    margin-right: 169px;

    &:last-of-type {
      margin: 0;
    }
  }
`;

export default NavListItem;
