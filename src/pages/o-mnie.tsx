import * as React from 'react';
import AboutImg from '../components/AboutImg';
import AboutMeDescription from '../components/AboutMe';

import Layout from '../components/Layout';
import SEO from '../components/seo';
const About: React.FC = () => {
  return (
    <Layout>
      <SEO title="O mnie" />
      <AboutImg />
      <AboutMeDescription displayMobile={true} />
    </Layout>
  );
};

export default About;
