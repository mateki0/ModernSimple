import * as React from 'react';
import ContactPage from '../components/ContactPage';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';
import SEO from '../components/seo';
const Contact: React.FC = () => {
  return (
    <Layout>
      <SEO title="Kontakt" />
      <ContactPage displayMobile={true} />
      <ContactForm displayMobile={true} />
    </Layout>
  );
};

export default Contact;
