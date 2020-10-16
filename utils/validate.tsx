import * as yup from 'yup';

const phoneRegExp = /^((\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/ ;

const validationSchema = yup.object().shape({
  name:yup.string().required("Proszę podać swoje imie"),
  email: yup.string().email().required("Proszę podać swój adres e-mail"),
  phone: yup.string().matches(phoneRegExp, 'Podany numer jest nieprawidłowy'),
  message: yup.string().min(10, 'Minimalna liczba znaków to 10').required("Proszę wpisać wiadomość")
})

export default validationSchema;