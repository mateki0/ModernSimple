import * as React from 'react';
import Input from './styled/Input';
import InputLabel from './styled/InputLabel';
import InputWrapper from './styled/InputWrapper';

interface InputProps {
  width?: string;
  height?: string;
  label: string;
  name: string;
  textarea?: boolean;
  forwardRef: any;
  onChange: (e: { target: { name: string; value: string } }) => void;
}
const ContactInput: React.FC<InputProps> = ({ label, name, textarea, forwardRef, onChange }) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input
        as={textarea ? 'textarea' : 'input'}
        name={name}
        id={name}
        textarea={textarea}
        ref={forwardRef}
        onChange={onChange}
      ></Input>
    </InputWrapper>
  );
};
export default ContactInput;
