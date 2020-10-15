import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import AboutMeDescription from '../AboutMe';
import AboutWrapper from './styled/AboutWrapper';
import Selfie from './styled/Selfie';
import AboutLogo from './AboutLogo';
import SelfieWrapper from './styled/SelfieWrapper';
const AboutImg: React.FC = () => {

  const {selfie}= useStaticQuery(
    graphql`
     query{
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
  return (
    <AboutWrapper>
      <SelfieWrapper widthMobile="180px"
        heightMobile="271px"
        width="420px"
        height="632px"
        >
       <Selfie alt="My Image" fluid={selfie.childImageSharp.fluid} />
      </SelfieWrapper>
      <AboutMeDescription displayMobile={false} />
      <AboutLogo/>
    </AboutWrapper>
  );
};

export default AboutImg;
