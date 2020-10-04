import * as React from 'react';
import SectionTitleSpan from '../AboutMe/styled/SectionTitleSpan';
import SectionTitleWrapper from '../AboutMe/styled/SectionTitleWrapper';
import SectionWrapper from '../AboutMe/styled/SectionWrapper';
import ContactForm from '../ContactForm';
import ContactText from './styled/ContactText';
import ContactSubheading from './styled/ContactSubheading';
import ContactWrapper from './styled/ContactWrapper';

interface ContactProps {
  displayMobile: boolean;
}
const ContactPage: React.FC<ContactProps> = () => {
  return (
    <ContactWrapper>
      <div>
        <SectionTitleWrapper>
          <SectionTitleSpan>Kontakt</SectionTitleSpan>
        </SectionTitleWrapper>

        <SectionWrapper>
          <ContactSubheading>Masz pytania? Skontaktuj sie ze mną.</ContactSubheading>
          <ContactText>
            Napisz do mnie wiadomość lub zadzwoń. Chętnie odpowiem na wszystkie pytania lub przyjmę
            zamówienie na projekt graficzny.
          </ContactText>
          <ContactText>
            Skontaktuj się ze mną za pośrednictwem formularza kontaktowego lub napisz bezpośrednio
            na maila <strong>modernsimple00@gmail.com</strong> albo zadzwoń
            <br />
            <strong>605 999 089</strong>
          </ContactText>
          <ContactText>Pracuję od poniedziałku do soboty w godzinach 09:00-17:00.</ContactText>
        </SectionWrapper>
      </div>
      <ContactForm displayMobile={false} />
    </ContactWrapper>
  );
};

export default ContactPage;
