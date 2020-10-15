import * as yup from 'yup';
import { setIn } from 'final-form';

const phoneRegExp = /^((\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/ ;

const validationSchema = yup.object().shape({
  name:yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().matches(phoneRegExp, 'Podany numer jest nieprawidłowy'),
  message: yup.string().required()
})

const validateFormValues = (schema) => async(values) => {
  if (typeof schema === 'function'){
    schema = schema();
  }
  try{
    await schema.validate(values, {abortEarly: false});
  } catch (err) {
    const errors = err.inner.reduce((formError, innerError) => {
      return setIn(formError, innerError.path, innerError.message)
    }, {})
    return errors;
  }
}

const validate = validateFormValues(validationSchema)
export default validate;