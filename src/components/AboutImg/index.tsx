import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import AboutMeDescription from '../AboutMe';
import AboutLogoWrapper from './styled/AboutLogoWrapper';
import AboutWrapper from './styled/AboutWrapper';
import LogoImage from './styled/LogoImg';
import Selfie from './styled/Selfie';

const AboutImg: React.FC = () => {
  const { selfie } = useStaticQuery(
    graphql`
      query {
        selfie: file(relativePath: { eq: "selfie.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
//   const query= useStaticQuery(graphql`
//      query{
//         logo: file(relativePath: { eq: "ms.png" }) {
//           childImageSharp {
//             fluid(quality: 90, maxWidth: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         selfie: file(relativePath: { eq: "selfie.png" }) {
//           childImageSharp {
//             fluid(quality: 90, maxWidth: 420) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `
// )
  console.log(selfie)
  return (
    <AboutWrapper>
      <div style={{width:'420px'}} >
      <Selfie
        widthMobile="180px"
        heightMobile="271px"
        width="420px"
        height="632px"
        fluid={selfie.childImageSharp.fluid}
        alt="My Image"
      />
      </div>
      <AboutMeDescription displayMobile={false} />
      <AboutLogoWrapper>
        <LogoImage fluid={selfie.childImageSharp.fluid} />
      </AboutLogoWrapper>
    </AboutWrapper>
  );
};

export default AboutImg;
