import styled from 'styled-components';

const HamburgerMenu = styled.div<{ isMenuOpened: boolean }>`
  position: relative;
  align-self: center;
  width: 26px;
  height: 3px;
  background-color: ${(props) => (props.isMenuOpened ? '#fff' : '#eca72c')};
  transition: visibility 0s ease-in 0.3s;
  visibility: ${(props) => (props.isMenuOpened ? 'hidden' : 'visible')};
  z-index: 99;
  ::before {
    content: '';
    position: absolute;
    visibility: visible;
    width: 100%;
    height: 3px;
    background-color: ${(props) => (props.isMenuOpened ? '#fff' : '#eca72c')};
    top: ${(props) => (props.isMenuOpened ? '0' : '-10px')};
    left: ${(props) => (props.isMenuOpened ? '-5px' : 0)};
    transform: rotate(${(props) => (props.isMenuOpened ? '-45deg' : '0deg')});
    transition: ${(props) =>
      props.isMenuOpened
        ? 'top .2s ease-in, left .1s ease-in .2s, transform .2s ease-in .3s'
        : 'transform .2s ease-out, left .1s ease-out .2s, top .2s ease-out .3s'};
  }

  ::after {
    content: '';
    position: absolute;
    visibility: visible;
    width: 100%;
    height: 3px;
    background-color: ${(props) => (props.isMenuOpened ? '#fff' : '#eca72c')};
    bottom: ${(props) => (props.isMenuOpened ? '0' : '-10px')};
    right: ${(props) => (props.isMenuOpened ? '5px' : 0)};
    transform: rotate(${(props) => (props.isMenuOpened ? '45deg' : '0deg')});
    transition: ${(props) =>
      props.isMenuOpened
        ? 'top .2s ease-in, left .1s ease-in .2s, transform .2s ease-in .3s'
        : 'transform .2s ease-out, left .1s ease-out .2s, top .2s ease-out .3s'};
  }
`;

export default HamburgerMenu;
