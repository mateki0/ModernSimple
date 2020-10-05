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
  box-sizing:border-box;
  display:flex;
  flex-direction:column;
  margin:0 auto;
  padding:0 9px;
  font-family: 'Nunito', sans-serif;
  @media only screen and (min-width: 1024px) {
    
    padding:0 22px;
    
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
