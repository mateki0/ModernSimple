import * as React from 'react';
import ComponentWrapper from '../AboutMe/styled/ComponentWrapper';
import SectionTitleSpan from '../AboutMe/styled/SectionTitleSpan';
import SectionTitleWrapper from '../AboutMe/styled/SectionTitleWrapper';
import SectionWrapper from '../AboutMe/styled/SectionWrapper';
import Form from './styled/Form';

const ContactForm: React.FC<{ displayMobile: boolean }> = ({ displayMobile }) => {
  return (
    <ComponentWrapper displayMobile={displayMobile}>
      <SectionTitleWrapper>
        <SectionTitleSpan>Formularz</SectionTitleSpan>
      </SectionTitleWrapper>

      <SectionWrapper>
        <Form></Form>
      </SectionWrapper>
    </ComponentWrapper>
  );
};

export default ContactForm;
