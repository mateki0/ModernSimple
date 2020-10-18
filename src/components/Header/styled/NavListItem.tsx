import styled from 'styled-components';

const NavListItem = styled.li<{ isOpen: boolean }>`
  margin-bottom: ${(props) => (props.isOpen ? '30px' : '0')};
  @media only screen and (min-width: 1024px) {
    margin-right: 5vw;
    padding: 1px 6px;
    &:last-of-type {
      margin: 0;
      padding-right: 0;
    }
  }
`;

export default NavListItem;
