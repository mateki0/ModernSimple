import * as React from 'react';
import { Link } from 'gatsby';
import Navigation from './styled/Navigation';
import LogoWrapper from './styled/LogoWrapper';
import LogoIconWrapper from './styled/LogoIconWrapper';
import LogoText from './styled/LogoText';
import Menu from './styled/Menu';
import NavList from './styled/NavList';
import NavListItem from './styled/NavListItem';
import LinkButton from './styled/LinkButton';

import Logo from '../../assets/logo.svg';
import StyledHeader from './styled/StyledHeader';

interface HeaderProps {
  siteTitle: string;
}
const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <Navigation>
        <LogoWrapper href="/">
          <Logo />
        </LogoWrapper>
        <Menu>
          <NavList>
            <NavListItem>
              <Link to="/o-mnie">
                <LinkButton>O mnie</LinkButton>
              </Link>
            </NavListItem>
            <NavListItem>
              <Link to="/portfolio">
                <LinkButton>Portfolio</LinkButton>
              </Link>
            </NavListItem>
            <NavListItem>
              <Link to="/uslugi">
                <LinkButton>Usługi</LinkButton>
              </Link>
            </NavListItem>
            <NavListItem>
              <Link to="/kontakt">
                <LinkButton>Kontakt</LinkButton>
              </Link>
            </NavListItem>
          </NavList>
        </Menu>
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
