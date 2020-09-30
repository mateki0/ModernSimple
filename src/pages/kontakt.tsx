import * as React from 'react';
import ContactPage from '../components/Contact';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';
import SEO from '../components/seo';
const Contact: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <ContactPage displayMobile={true} />
      <ContactForm displayMobile={true} />
    </Layout>
  );
};

export default Contact;
