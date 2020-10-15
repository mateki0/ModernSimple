import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import AboutMeDescription from '../AboutMe';
import AboutWrapper from './styled/AboutWrapper';
import Selfie from './styled/Selfie';

import SelfieWrapper from './styled/SelfieWrapper';
import GatsbyImage from '../GatsbyImage';
const AboutImg: React.FC = () => {

  return (
    <AboutWrapper>
      <SelfieWrapper widthMobile="180px"
        heightMobile="271px"
        width="420px"
        height="632px"
        >
       <GatsbyImage filename="/selfie.png" />
      </SelfieWrapper>
      <AboutMeDescription displayMobile={false} />
      
    </AboutWrapper>
  );
};

export default AboutImg;
