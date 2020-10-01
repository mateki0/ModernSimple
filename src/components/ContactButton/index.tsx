import * as React from 'react';
import ButtonWrapper from './styled/ButtonWrapper';
import ButtonText from './styled/ButtonText';

const ContactButton: React.FC = () => {
  return (
    <ButtonWrapper type="submit">
      <ButtonText>Wyślij</ButtonText>
    </ButtonWrapper>
  );
};

export default ContactButton;
