import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, meta, title}) {
  const  site  = useStaticQuery(
    graphql`
      query {
        siteMetadata:
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
          }
        }
        ogImg:
        allFile(filter: {name: {eq: "kompBg"}}) {
          edges {
            node {
              id
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    `
  );
      
  const metaDescription = description || site.siteMetadata.siteMetadata.description;
  const defaultTitle = site.siteMetadata.siteMetadata?.title;
  return (
    <Helmet
      htmlAttributes={{
        lang: 'pl-PL',
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: site.ogImg.edges[0].node.childImageSharp.fluid.src,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
