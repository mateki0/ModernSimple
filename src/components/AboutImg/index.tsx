import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import AboutMeDescription from '../AboutMe';
import AboutLogoWrapper from './styled/AboutLogoWrapper';
import AboutWrapper from './styled/AboutWrapper';
import LogoImage from './styled/LogoImg';
import Selfie from './styled/Selfie';
import  Img  from 'gatsby-image'
const AboutImg: React.FC = () => {

  const query= useStaticQuery(graphql`
     query{
        logo: file(relativePath: { eq: "ms.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        selfie: file(relativePath: { eq: "selfie.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 420) {
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
      <div style={{width:'420px'}} >
      {/* <Selfie
        widthMobile="180px"
        heightMobile="271px"
        width="420px"
        height="632px"
        fluid={query.selfie.childImageSharp.fluid}
        alt="My Image"
      /> */}
      <Img fluid={query.selfie.childImageSharp.fluid} />
      </div>
      <AboutMeDescription displayMobile={false} />
      <AboutLogoWrapper>
        <Img fluid={query.selfie.childImageSharp.fluid} />
      </AboutLogoWrapper>
    </AboutWrapper>
  );
};

export default AboutImg;
