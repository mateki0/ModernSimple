import * as React from 'react';
import Layout from '../components/Layout';

const PortfolioTemplate: React.FC<any> = ( data ) => {
  console.log('all categories', data.pageContext.categories);
  console.log('current category', data.pageContext.currentCategoryName);
  console.log('category images', data.pageContext.images);

  return (
    <Layout>
      <div>asd</div>
    </Layout>
  );
}

export default PortfolioTemplate;
