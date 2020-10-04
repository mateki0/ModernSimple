import styled from 'styled-components';

const NavListItem = styled.li`
  margin: 0;
  padding: 1px 6px;

  &:last-of-type {
    padding-right: 0;
  }
  @media only screen and (min-width: 1024px) {
    margin-right: 169px;

    &:last-of-type {
      margin: 0;
    }
  }
`;

export default NavListItem;
