import * as React from 'react';
import SectionContent from '../AboutMe/styled/SectionContent';
import SectionTitleSpan from '../AboutMe/styled/SectionTitleSpan';
import SectionTitleWrapper from '../AboutMe/styled/SectionTitleWrapper';
import SectionWrapper from '../AboutMe/styled/SectionWrapper';
import ContactForm from '../ContactForm';
import ContactSubheading from './styled/ContactSubheading';
import ContactWrapper from './styled/ContactWrapper';

const ContactPage: React.FC = () => {
  return (
    <ContactWrapper>
      <div>
        <SectionTitleWrapper>
          <SectionTitleSpan>Kontakt</SectionTitleSpan>
        </SectionTitleWrapper>

        <SectionWrapper>
          <ContactSubheading>Masz pytania? Skontaktuj nie ze mną.</ContactSubheading>
          <SectionContent>
            Napisz do mnie wiadomość lub zadzwoń. Chętnie odpowiem na wszystkie pytania lub przyjmę
            zamówienie na projekt graficzny.
          </SectionContent>
          <SectionContent>
            Skontaktuj się ze mną za pośrednictwem formularza kontaktowego lub napisz bezpośrednio
            na maila <strong>modernsimple00@gmail.com</strong> albo zadzwoń
            <br />
            <strong>605 999 089</strong>
          </SectionContent>
          <SectionContent>
            Pracuję od poniedziałku do soboty w godzinach 09:00-17:00.
          </SectionContent>
        </SectionWrapper>
      </div>
      <ContactForm displayMobile={false} />
    </ContactWrapper>
  );
};

export default ContactPage;
