import * as React from 'react';
import {useForm} from 'react-hook-form';
import useYupValidationResolver from '../../../utils/resolver';
import validationSchema from '../../../utils/validate';

import ComponentWrapper from '../AboutMe/styled/ComponentWrapper';
import SectionTitleSpan from '../AboutMe/styled/SectionTitleSpan';
import SectionTitleWrapper from '../AboutMe/styled/SectionTitleWrapper';
import SectionWrapper from '../AboutMe/styled/SectionWrapper';
import ContactButton from '../ContactButton';
import ContactInput from '../ContactInput';
import ButtonDiv from './styled/ButtonDiv';
import FormWrapper from './styled/FormWrapper';
interface IFormInput{
  name:string;
  email:string;
  phone:number;
  message:string;
}
const ContactForm: React.FC<{ displayMobile: boolean; }> = ({ displayMobile }) => {
  const resolver = useYupValidationResolver(validationSchema)
  const {register, handleSubmit} = useForm<IFormInput>({
    mode: 'onSubmit',
    resolver:resolver
  });
  const onSubmit = (data, e) =>{
    fetch('/', {
      method:'POST',
      body:data
    })
    .then(data=>console.log(data))
    .catch(error=>console.log(error));
    e.target.submit();
  } 
  
  return (
    <ComponentWrapper displayMobile={displayMobile}>
      <SectionTitleWrapper>
        <SectionTitleSpan>Formularz</SectionTitleSpan>
      </SectionTitleWrapper>

      <SectionWrapper>
        
          <FormWrapper method="POST" name="contact" onSubmit={handleSubmit(onSubmit)}  data-netlify="true" action="/dziekujemy">
            <ContactInput label="Imię i nazwisko" name="name" forwardRef={register}/>
            <ContactInput label="Adres e-mail" name="email" forwardRef={register}/>
            <ContactInput label="Telefon kontaktowy" name="phone" forwardRef={register}/>
            <ContactInput label="Treść wiadomości" name="message" textarea={true} forwardRef={register} />
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
