import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import AboutMeDescription from '../AboutMe';
import AboutLogoWrapper from './styled/AboutLogoWrapper';
import AboutWrapper from './styled/AboutWrapper';
import LogoImage from './styled/LogoImg';
import Selfie from './styled/Selfie';

const AboutImg: React.FC = () => {
  const { logo } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "ms.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return (
    <AboutWrapper>
      <Selfie
        widthMobile="180px"
        heightMobile="271px"
        width="420px"
        height="632px"
        src="/images/selfie.png"
        alt="My Image"
      />
      <AboutMeDescription displayMobile={false} />
      <AboutLogoWrapper>
        <LogoImage fluid={logo.childImageSharp.fluid} />
      </AboutLogoWrapper>
    </AboutWrapper>
  );
};

export default AboutImg;
