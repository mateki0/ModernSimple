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
import ErrorSpan from './styled/ErrorSpan';
import FormWrapper from './styled/FormWrapper';
interface IFormInput{
  name:string;
  email:string;
  phone:number;
  message:string;
}
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
const ContactForm: React.FC<{ displayMobile: boolean; }> = ({ displayMobile }) => {
  const [state, setState] = React.useState({})
  const handleChange = (e: { target: { name: any; value: any; }; }) => setState({ ...state, [e.target.name]: e.target.value })
  const resolver = useYupValidationResolver(validationSchema)
  const {register, handleSubmit, errors} = useForm<IFormInput>({
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
      window.location.href = "/dziekujemy"
    })
    .catch(error=>console.log(error));
    
  } 
  console.log(errors)
  return (

    <ComponentWrapper displayMobile={displayMobile}>
      <SectionTitleWrapper>
        <SectionTitleSpan>Formularz</SectionTitleSpan>
      </SectionTitleWrapper>

      <SectionWrapper>
        
          <FormWrapper method="POST" name="contact" onSubmit={handleSubmit(onSubmit)} data-netlify-honeypot="bot-field" data-netlify="true" action="/dziekujemy">
            <ContactInput onChange={handleChange} label="Imię i nazwisko" name="name" forwardRef={register}/>
            {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>}
            <ContactInput onChange={handleChange} label="Adres e-mail" name="email" forwardRef={register}/>
            {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}
            <ContactInput onChange={handleChange} label="Telefon kontaktowy" name="phone" forwardRef={register}/>
            {errors.phone && <ErrorSpan>{errors.phone.message}</ErrorSpan>}
            <ContactInput onChange={handleChange} label="Treść wiadomości" name="message" textarea={true} forwardRef={register} />
            {errors.message && <ErrorSpan>{errors.message.message}</ErrorSpan>}
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
