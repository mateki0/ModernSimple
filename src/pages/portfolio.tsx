import * as React from 'react';
import Layout from '../components/Layout';
import PortfolioPage from '../components/PortfolioPage';
import SEO from '../components/seo';
const Portfolio: React.FC = () => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <PortfolioPage />
    </Layout>
  );
};

export default Portfolio;
