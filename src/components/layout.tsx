import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import './layout.css';

interface LayoutProps {
  data: {
    site?: {
      siteMetadata?: {
        title?: string;
      };
    };
  };
  children: React.ReactNode;
  siteTitle?: string;
}
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
      <Header siteTitle={data.site.siteMetadata?.title} />

      <main>{children}</main>
    </>
  );
};

export default Layout;
