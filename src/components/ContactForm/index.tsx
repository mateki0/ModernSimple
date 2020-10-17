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
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
const ContactForm: React.FC<{ displayMobile: boolean; }> = ({ displayMobile }) => {
  const [state, setState] = React.useState({})
  const handleChange = (e: { target: { name: any; value: any; }; }) => setState({ ...state, [e.target.name]: e.target.value })
  const resolver = useYupValidationResolver(validationSchema)
  const {register, handleSubmit} = useForm<IFormInput>({
    mode: 'onChange',
    resolver:resolver
  });
  const onSubmit = (data, e) =>{
    e.preventDefault();
    fetch('/', {
      method:'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name':'contact',
        ...state
      })
    })
    .then(data=>{
      console.log(data);
      
    })
    .catch(error=>console.log(error));
    
  } 
  
  return (
    <ComponentWrapper displayMobile={displayMobile}>
      <SectionTitleWrapper>
        <SectionTitleSpan>Formularz</SectionTitleSpan>
      </SectionTitleWrapper>

      <SectionWrapper>
        
          <FormWrapper method="POST" name="contact" onSubmit={handleSubmit(onSubmit)} data-netlify-honeypot="bot-field" data-netlify="true" action="/dziekujemy">
            <ContactInput onChange={handleChange} label="Imię i nazwisko" name="name" forwardRef={register}/>
            <ContactInput onChange={handleChange} label="Adres e-mail" name="email" forwardRef={register}/>
            <ContactInput onChange={handleChange} label="Telefon kontaktowy" name="phone" forwardRef={register}/>
            <ContactInput onChange={handleChange} label="Treść wiadomości" name="message" textarea={true} forwardRef={register} />
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
