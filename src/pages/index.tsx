import * as React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import OfferBox from '../components/OfferBox';
import Cooperation from '../components/Cooperation';
import LastProjects from '../components/LastProjects';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Strona główna" />
    <OfferBox />
    <Cooperation />
    <LastProjects />
  </Layout>
);

export default IndexPage;
