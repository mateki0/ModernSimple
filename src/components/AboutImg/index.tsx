import * as React from 'react';
import AboutMeDescription from '../AboutMe';
import AboutLogoWrapper from './styled/AboutLogoWrapper';

import AboutWrapper from './styled/AboutWrapper';
import LogoImage from './styled/LogoImg';
import Selfie from './styled/Selfie';

const AboutImg: React.FC = () => {
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
        <LogoImage src="/images/ms.png" />
      </AboutLogoWrapper>
    </AboutWrapper>
  );
};

export default AboutImg;
