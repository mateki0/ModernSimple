import * as React from 'react';
import Navigation from './styled/Navigation';
import LogoWrapper from './styled/LogoWrapper';
import Menu from './styled/Menu';
import NavList from './styled/NavList';
import NavListItem from './styled/NavListItem';
import LinkButton from './styled/LinkButton';

import Logo from '../../assets/logo.svg';
import HamburgerMenu from './styled/HamburgerMenu';
import HamburgerWrapper from './styled/HamburgerWrapper';

interface HeaderProps {
  siteTitle: string;
}
const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);
  const menuEl = React.useRef<HTMLDivElement>();
  const closeOnClickOutside = (event) => {
    if (menuEl && !menuEl.current.contains(event.target)) {
      setIsMenuOpened(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener('click', closeOnClickOutside);

    return () => window.removeEventListener('click', closeOnClickOutside);
  });
  return (
    <header>
      <Navigation>
        <LogoWrapper href="/">
          <Logo />
        </LogoWrapper>
        <Menu isOpen={isMenuOpened} ref={menuEl}>
          <NavList>
            <NavListItem isOpen={isMenuOpened}>
              <LinkButton to="/o-mnie" activeStyle={{ color: '#27867f' }}>
                O mnie
              </LinkButton>
            </NavListItem>
            <NavListItem isOpen={isMenuOpened}>
              <LinkButton to="/portfolio" activeStyle={{ color: '#27867f' }}>
                Portfolio
              </LinkButton>
            </NavListItem>
            <NavListItem isOpen={isMenuOpened}>
              <LinkButton to="/uslugi" activeStyle={{ color: '#27867f' }}>
                Usługi
              </LinkButton>
            </NavListItem>
            <NavListItem isOpen={isMenuOpened}>
              <LinkButton to="/kontakt" activeStyle={{ color: '#27867f' }}>
                Kontakt
              </LinkButton>
            </NavListItem>
          </NavList>
        </Menu>
        <HamburgerWrapper ref={menuEl} onClick={() => setIsMenuOpened(!isMenuOpened)}>
          <HamburgerMenu isMenuOpened={isMenuOpened} />
        </HamburgerWrapper>
      </Navigation>
    </header>
  );
};

export default Header;
