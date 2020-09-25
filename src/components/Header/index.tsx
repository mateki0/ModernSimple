import * as React from 'react'
import { Link } from 'gatsby'
import Navigation from './styled/Navigation'

interface HeaderProps {
  siteTitle: string
}
const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  return <Navigation>{siteTitle}</Navigation>
}

export default Header
