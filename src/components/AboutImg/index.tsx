import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import AboutMeDescription from '../AboutMe';

import AboutWrapper from './styled/AboutWrapper';

import Selfie from './styled/Selfie';
import  Img  from 'gatsby-image'

import SelfieWrapper from './styled/SelfieWrapper';
import AboutLogoWrapper from './styled/AboutLogoWrapper';
import LogoImage from './styled/LogoImg';
const AboutImg: React.FC = () => {

  const query= useStaticQuery(
    graphql`
     query{
        selfie: file(relativePath: { eq: "selfie.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 420) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
      console.log(query)
  return (
    <AboutWrapper>
      <SelfieWrapper
        width="420px"
        height="632px"
        >
       <Selfie fluid={query.selfie.childImageSharp.fluid} />
      </SelfieWrapper>
      <AboutMeDescription displayMobile={false} />
      
      <AboutLogoWrapper>
        <LogoImage fluid={query.logo.childImageSharp.fluid} />
      </AboutLogoWrapper>
      
      
    </AboutWrapper>
  );
};

export default AboutImg;
