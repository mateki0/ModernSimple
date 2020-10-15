import * as React from 'react';
import validate from '../../../utils/validate';
import {useForm} from 'react-hook-form';
import ComponentWrapper from '../AboutMe/styled/ComponentWrapper';
import SectionTitleSpan from '../AboutMe/styled/SectionTitleSpan';
import SectionTitleWrapper from '../AboutMe/styled/SectionTitleWrapper';
import SectionWrapper from '../AboutMe/styled/SectionWrapper';
import ContactButton from '../ContactButton';
import ContactInput from '../ContactInput';
import ButtonDiv from './styled/ButtonDiv';
import FormWrapper from './styled/FormWrapper';
type FormData = {
  name: string;
};
const ContactForm: React.FC<{ displayMobile: boolean; }> = ({ displayMobile }) => {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: ""
    }
  });
  const onSubmit = data => console.log(data);
  const phoneRegExp = /^((\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/ 
  return (
    <ComponentWrapper displayMobile={displayMobile}>
      <SectionTitleWrapper>
        <SectionTitleSpan>Formularz</SectionTitleSpan>
      </SectionTitleWrapper>

      <SectionWrapper>
        
          <FormWrapper method="POST" name="contact" data-netlify="true" action="/dziekujemy" onSubmit={handleSubmit(onSubmit)} >
            <ContactInput label="Imię i nazwisko" name="name" ref={register({required:true, maxLength:20})}/>
            <ContactInput label="Adres e-mail" name="email" ref={register({required:true, pattern:/^[A-Za-z]+$/i })}/>
            <ContactInput label="Telefon kontaktowy" name="phone" ref={register({pattern:phoneRegExp })}/>
            <ContactInput label="Treść wiadomości" name="message" textarea={true} ref={register({required:true})} />
            <ButtonDiv>
              <ContactButton />
            </ButtonDiv>
            <input type="hidden" name="form-name" value="contact" />
          </FormWrapper>
        
      </SectionWrapper>
    </ComponentWrapper>
  );
};

export default ContactForm;
