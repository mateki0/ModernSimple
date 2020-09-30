import * as React from 'react';
import ComponentWrapper from '../AboutMe/styled/ComponentWrapper';
import SectionContent from '../AboutMe/styled/SectionContent';
import SectionTitleSpan from '../AboutMe/styled/SectionTitleSpan';
import SectionTitleWrapper from '../AboutMe/styled/SectionTitleWrapper';
import SectionWrapper from '../AboutMe/styled/SectionWrapper';
import ContactSubheading from './styled/ContactSubheading';

const ContactPage: React.FC<{ displayMobile?: boolean }> = ({ displayMobile }) => {
  return (
    <ComponentWrapper displayMobile={displayMobile}>
      <SectionTitleWrapper>
        <SectionTitleSpan>Kontakt</SectionTitleSpan>
      </SectionTitleWrapper>
      <ContactSubheading>Masz pytania? Skontaktuj nie ze mną.</ContactSubheading>
      <SectionWrapper>
        <SectionContent>
          Napisz do mnie wiadomość lub zadzwoń. Chętnie odpowiem na wszystkie pytania lub przyjmę
          zamówienie na projekt graficzny. Skontaktuj się ze mną za pośrednictwem formularza
          kontaktowego lub napisz bezpośrednio na maila modernsimple00@gmail.com albo zadzwoń 605
          999 089 Pracuję od poniedziałku do soboty w godzinach 09:00-17:00.
        </SectionContent>
      </SectionWrapper>
    </ComponentWrapper>
  );
};

export default ContactPage;
