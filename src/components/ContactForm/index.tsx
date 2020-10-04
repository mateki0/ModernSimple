import * as React from 'react';
import ComponentWrapper from '../AboutMe/styled/ComponentWrapper';
import SectionTitleSpan from '../AboutMe/styled/SectionTitleSpan';
import SectionTitleWrapper from '../AboutMe/styled/SectionTitleWrapper';
import SectionWrapper from '../AboutMe/styled/SectionWrapper';
import ContactButton from '../ContactButton';
import ContactInput from '../ContactInput';
import ButtonDiv from './styled/ButtonDiv';
import Form from './styled/Form';

const ContactForm: React.FC<{ displayMobile: boolean }> = ({ displayMobile }) => {
  return (
    <ComponentWrapper displayMobile={displayMobile}>
      <SectionTitleWrapper>
        <SectionTitleSpan>Formularz</SectionTitleSpan>
      </SectionTitleWrapper>

      <SectionWrapper>
        <Form method="POST" name="contact" data-netlify="true">
          <ContactInput label="Imię i nazwisko" name="name" />
          <ContactInput label="Adres e-mail" name="email" />
          <ContactInput label="Telefon kontaktowy" name="phone" />
          <ContactInput label="Treść wiadomości" name="message" textarea={true} />
          <ButtonDiv>
            <ContactButton type="submit" />
          </ButtonDiv>
        </Form>
      </SectionWrapper>
    </ComponentWrapper>
  );
};

export default ContactForm;
