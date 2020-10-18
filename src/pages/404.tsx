import * as React from 'react';

import ErrorPage from '../components/ErrorPage';
import SEO from '../components/seo';

const NotFoundPage: React.FC = () => (
  <>
    <SEO title="404: Not found" />
    <ErrorPage />
  </>
);

export default NotFoundPage;
