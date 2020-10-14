import styled from 'styled-components';

const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  padding: 50px 9px 20px 9px;
  position: absolute;
  top: 0;
  right: 15px;
  background: #eca72c;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 50vh;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  transition: ${(props) =>
    props.isOpen
      ? 'all 1000ms cubic-bezier(0, 0.995, 0.99, 1)'
      : 'all 500ms cubic-bezier(0, 0.995, 0.99, 1)'};
  @media only screen and (min-width: 1024px) {
    position: static;
    visibility: visible;
    opacity: 1;
    width: auto;
    height: auto;
    border-radius: 0;
    background-color: #fff;
    flex-direction: row;
    padding: 0 22px;
  }
`;
export default Menu;
