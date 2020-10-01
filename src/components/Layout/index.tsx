import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../Header';
import Footer from '../Footer';
import StyledMain from './StyledMain';

interface LayoutProps {
  children: React.ReactNode;
  siteTitle?: string;
}
const GlobalStyle = createGlobalStyle`
body{
  width:95%;
  display:flex;
  flex-direction:column;
  margin:0 auto;
  @media only screen and (min-width: 1024px) {
    overflow-y:hidden;
    padding:0;
    width:95%;
  }
  
}
`;
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title} />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
};
export default Layout;
