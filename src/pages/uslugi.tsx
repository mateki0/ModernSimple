import * as React from 'react';
import Layout from '../components/Layout';
import OfferBox from '../components/OfferBox';
import OurServices from '../components/OurServices';
import SEO from '../components/seo';
const Services: React.FC = () => {
  return (
    <Layout>
      <SEO title="Usługi" />
      <OfferBox />
      <OurServices />
    </Layout>
  );
};

export default Services;
