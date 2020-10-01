import * as React from 'react';
import ContentSpan from './styled/ContentSpan';
import ContentTitle from './styled/ContentTitle';

import FooterSectionTitle from './styled/FooterSectionTitle';
import FooterWrapper from './styled/FooterWrapper';
import FooterSectionContent from './styled/FooterSectionContent';
import SectionContentWrapper from './styled/SectionContentWrapper';

const Footer = () => {
  return (
    <footer>
      <FooterWrapper>
        <div>
          <FooterSectionTitle>Napisz lub zadzwoń</FooterSectionTitle>
          <SectionContentWrapper>
            <FooterSectionContent>
              <ContentTitle>Telefon</ContentTitle>
              <ContentSpan>Klaudia Ryś</ContentSpan>
              <ContentSpan>605 999 089</ContentSpan>
            </FooterSectionContent>
            <FooterSectionContent>
              <ContentTitle>Mail</ContentTitle>
              <ContentSpan>klaudiarys1996@gmail.com </ContentSpan>
              <ContentSpan>modernsimple00@gmail.com</ContentSpan>
            </FooterSectionContent>
          </SectionContentWrapper>
        </div>
        <div>
          <FooterSectionTitle>Godziny otwarcia</FooterSectionTitle>
          <FooterSectionContent>
            <ContentTitle>Poniedziałek-piątek</ContentTitle>
            <ContentSpan>09:00-17:00</ContentSpan>
          </FooterSectionContent>
        </div>
        <div>
          <FooterSectionTitle>Social Media</FooterSectionTitle>
          <FooterSectionContent>
            <ContentTitle>Facebook</ContentTitle>
            <ContentSpan as="a" href="https://www.facebook.com/Modern-Simple-101772301672898">
              Modern Simple
            </ContentSpan>
          </FooterSectionContent>
        </div>
        <div>
          <FooterSectionTitle>Polityka prywatności</FooterSectionTitle>
          <FooterSectionContent>
            <ContentTitle as="a" href="/polityka-prywatnosci">
              Informacje ogólne
            </ContentTitle>
          </FooterSectionContent>
        </div>
      </FooterWrapper>
    </footer>
  );
};

export default Footer;
