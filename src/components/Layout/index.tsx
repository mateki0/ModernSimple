import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import IdentityModal, {
  useIdentityContext,
  IdentityContextProvider,
} from 'react-netlify-identity-widget';
import 'react-netlify-identity-widget/styles.css';
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
  const identity = useIdentityContext();
  const [dialog, setDialog] = React.useState(false);
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.name) ||
    'NoName';
  const isLoggedIn = identity && identity.isLoggedIn;
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
    <IdentityContextProvider url={'https://modernsimple.pl/.netlify/identity'}>
      <nav>
        Login Status:
        <button onClick={() => setDialog(true)}>
          {isLoggedIn ? `Hello ${name}, Log out here!` : 'LOG IN'}
        </button>
      </nav>
      <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title} />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </IdentityContextProvider>
  );
};
export default Layout;
