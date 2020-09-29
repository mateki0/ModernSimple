import * as React from 'react';
import ContentSpan from './styled/ContentSpan';
import ContentTitle from './styled/ContentTitle';

import FooterSectionTitle from './styled/FooterSectionTitle';
import FooterWrapper from './styled/FooterWrapper';
import SectionContent from './styled/SectionContent';
import SectionContentWrapper from './styled/SectionContentWrapper';

const Footer = () => {
  return (
    <footer>
      <FooterWrapper>
        <div>
          <FooterSectionTitle>Napisz lub zadzwoń</FooterSectionTitle>
          <SectionContentWrapper>
            <SectionContent>
              <ContentTitle>Telefon</ContentTitle>
              <ContentSpan>Klaudia Ryś</ContentSpan>
              <ContentSpan>605 999 089</ContentSpan>
            </SectionContent>
            <SectionContent>
              <ContentTitle>Mail</ContentTitle>
              <ContentSpan>klaudiarys1996@gmail.com </ContentSpan>
              <ContentSpan>modernsimple00@gmail.com</ContentSpan>
            </SectionContent>
          </SectionContentWrapper>
        </div>
        <div>
          <FooterSectionTitle>Godziny otwarcia</FooterSectionTitle>
          <SectionContent>
            <ContentTitle>Poniedziałek-piątek</ContentTitle>
            <ContentSpan>09:00-17:00</ContentSpan>
          </SectionContent>
        </div>
        <div>
          <FooterSectionTitle>Social Media</FooterSectionTitle>
          <SectionContent>
            <ContentTitle>Facebook</ContentTitle>
            <ContentSpan>Modern Simple</ContentSpan>
          </SectionContent>
        </div>
        <div>
          <FooterSectionTitle>Polityka prywatności</FooterSectionTitle>
          <SectionContent>
            <ContentTitle>Informacje ogólne</ContentTitle>
          </SectionContent>
        </div>
      </FooterWrapper>
    </footer>
  );
};

export default Footer;
