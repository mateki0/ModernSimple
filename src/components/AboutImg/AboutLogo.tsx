import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import AboutLogoWrapper from './styled/AboutLogoWrapper';
import LogoImage from './styled/LogoImg';

const AboutLogo:React.FC = () => {
  const {logo}= useStaticQuery(
    graphql`
     query{
        logo: file(relativePath: { eq: "ms.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
`
)
  return (
    <AboutLogoWrapper>
      <LogoImage fluid={logo.childImageSharp.fluid} />
    </AboutLogoWrapper>
  )
}

export default AboutLogo;