import * as React from 'react';
import Layout from '../components/Layout';
import Privacy from '../components/Privacy';
import SEO from '../components/seo';

const PrivacyPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Polityka Prywatności" />
      <Privacy />
    </Layout>
  );
};
export default PrivacyPage;
